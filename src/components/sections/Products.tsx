import Image from "next/image";
import { ShoppingBasket, Store } from "lucide-react";
import { villageData } from "@/data/content";
import { getProducts } from "@/data/liveData";
import { whatsappLink } from "@/lib/whatsapp";
import { fillTemplate } from "@/lib/text";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import SampleNote from "@/components/ui/SampleNote";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { staggerDelay } from "@/components/motion/presets";

// Foto dari folder public (/foto/...) dan Unsplash diperkecil otomatis oleh Next.js.
// Foto dari alamat lain (misalnya diisi lewat Google Sheets) ditampilkan apa adanya.
const canOptimize = (url: string) => url.startsWith("/") || url.startsWith("https://images.unsplash.com/");

const { contact } = villageData;
const text = villageData.sections.products;

// Etalase produk warga dengan tombol pesan lewat WhatsApp.
// Datanya dari Google Sheets (lihat src/data/liveData.ts).
export default async function Products() {
  const { items, isSample } = await getProducts();

  return (
    <section id="produk" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={ShoppingBasket}
          badge={text.badge}
          title={text.title}
          description={text.description}
          className="mb-14"
        >
          {isSample && (
            <Reveal delay={0.2} className="mt-5">
              <SampleNote text={text.sampleNote} />
            </Reveal>
          )}
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product, index) => {
            const orderUrl = whatsappLink(
              product.whatsapp || contact.whatsapp,
              fillTemplate(text.orderMessage, { produk: product.name })
            );
            return (
              <Reveal
                key={product.id}
                delay={staggerDelay(index)}
                className="bg-white rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,translate] duration-300 flex flex-col group"
              >
                <div className="relative h-44 w-full overflow-hidden bg-sage-light">
                  <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    fill
                    unoptimized={!canOptimize(product.imageUrl)}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 text-forest">
                    {product.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg font-bold text-charcoal leading-snug">{product.name}</h3>
                  {product.price && <p className="text-sm font-semibold text-earth-dark mt-1">{product.price}</p>}
                  <p className="text-sm text-charcoal-muted font-light leading-relaxed mt-3 flex-1">
                    {product.description}
                  </p>
                  {product.seller && (
                    <p className="mt-4 flex items-center gap-1.5 text-xs text-charcoal-muted">
                      <Store className="w-3.5 h-3.5 text-sage shrink-0" />
                      <span>
                        {text.sellerLabel}: {product.seller}
                      </span>
                    </p>
                  )}

                  <WhatsAppButton
                    href={orderUrl}
                    label={text.orderButtonLabel}
                    unavailableLabel={text.orderUnavailableLabel}
                    className="mt-5 px-5 py-2.5 whitespace-nowrap"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
