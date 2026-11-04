import Image from "next/image";
import { MessageCircle, ShoppingBasket, Store } from "lucide-react";
import { villageData } from "@/data/content";
import { getProducts } from "@/data/liveData";
import { whatsappLink } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import SampleNote from "@/components/SampleNote";
import { staggerDelay } from "@/components/motionPresets";

// Foto dari folder public (/foto/...) dan Unsplash diperkecil otomatis oleh Next.js.
// Foto dari alamat lain (misalnya diisi lewat Google Sheets) ditampilkan apa adanya.
const canOptimize = (url: string) => url.startsWith("/") || url.startsWith("https://images.unsplash.com/");

// Etalase produk warga dengan tombol pesan lewat WhatsApp.
// Datanya dari Google Sheets (lihat src/data/liveData.ts).
export default async function Products() {
  const text = villageData.sections.products;
  const { items, isSample } = await getProducts();

  return (
    <section id="produk" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <ShoppingBasket className="w-3.5 h-3.5 text-sage" />
            <span>{text.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5">
            {text.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {text.description}
          </Reveal>
          {isSample && (
            <Reveal delay={0.2} className="mt-5">
              <SampleNote text={text.sampleNote} />
            </Reveal>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product, index) => {
            const orderUrl = whatsappLink(
              product.whatsapp || villageData.contact.whatsapp,
              text.orderMessage.replace("{produk}", product.name)
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

                  {orderUrl ? (
                    <a
                      href={orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-forest hover:bg-forest-dark text-white text-sm font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{text.orderButtonLabel}</span>
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-sand/60 text-charcoal-muted text-sm font-medium whitespace-nowrap">
                      <MessageCircle className="w-4 h-4" />
                      <span>{text.orderUnavailableLabel}</span>
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
