import * as motion from "motion/react-client";
import { Quote } from "lucide-react";
import { villageData } from "@/data/content";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";

export default function QuoteSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src={villageData.quote.imageUrl}
          alt={villageData.quote.imageAlt}
          className="filter saturate-90"
          strength={12}
        />
        {/* Deep Forest Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest/90 to-forest-dark/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-8 border border-white/20"
        >
          <Quote className="w-8 h-8 text-earth" />
        </motion.div>

        <Reveal
          as="blockquote"
          delay={0.15}
          y={36}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight mb-8 text-balance"
        >
          &ldquo;{villageData.quote.text}&rdquo;
        </Reveal>

        <Reveal delay={0.35} className="inline-block border-t border-white/30 pt-4">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-earth-bright font-medium">
            {villageData.quote.source} · {villageData.quote.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
