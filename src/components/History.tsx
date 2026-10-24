import { BookOpen, Clock, Info } from "lucide-react";
import * as motion from "motion/react-client";
import { villageData } from "@/data/content";
import Reveal from "@/components/Reveal";
import { easeOut } from "@/components/motionPresets";

export default function History() {
  const { history } = villageData.sections;

  return (
    <section id="sejarah" className="py-20 md:py-28 bg-cream-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-sage" />
            <span>{history.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5">
            {history.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed max-w-2xl mx-auto">
            {history.description}
          </Reveal>

          {/* Official History Notice Badge */}
          <Reveal delay={0.24} className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm text-sage bg-white px-4 py-2 rounded-full border border-sand shadow-2xs">
            <Info className="w-4 h-4 text-earth shrink-0" />
            <span>{history.notice}</span>
          </Reveal>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          {/* Vertical timeline line for mobile & tablet, horizontal line on lg desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-sand -translate-y-1/2 z-0">
            {/* Garis hijau yang tergambar dari kiri saat timeline terlihat */}
            <motion.div
              className="h-full bg-forest origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1.6, ease: easeOut }}
            />
          </div>
          <div className="lg:hidden absolute top-4 bottom-4 left-6 w-0.5 bg-sand z-0">
            <motion.div
              className="w-full h-full bg-forest origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1.8, ease: easeOut }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {villageData.historyMilestones.map((item, index) => (
              <div
                key={index}
                className="flex flex-row lg:flex-col items-start gap-5 lg:gap-4 group"
              >
                {/* Node marker */}
                <motion.div
                  className="relative shrink-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 + index * 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-forest text-forest group-hover:bg-forest group-hover:text-white transition-all shadow-sm flex items-center justify-center font-serif text-sm font-bold">
                    0{index + 1}
                  </div>
                </motion.div>

                {/* Content Card */}
                <Reveal
                  delay={0.3 + index * 0.3}
                  className="flex-1 bg-white p-6 rounded-2xl border border-sand shadow-sm hover:shadow-md hover:-translate-y-1 transition-[box-shadow,translate] duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-earth-dark">
                      {item.period}
                    </span>
                    <span
                      className={`text-[10px] uppercase px-2 py-0.5 rounded-full ${
                        item.status === "verified"
                          ? "bg-sage-light text-forest"
                          : "bg-earth-light text-earth-dark"
                      }`}
                    >
                      {history.statusLabels[item.status]}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2 leading-snug group-hover:text-forest transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Box */}
        <Reveal className="mt-16 bg-forest text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <BookOpen className="w-7 h-7 text-earth" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                {history.closingTitle}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light mt-1">
                {history.closingText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
