"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_IMAGE } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-24 pt-28 md:items-center md:pb-0 md:pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Премиальная мойка автомобиля AQUA DRIVE"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B10] via-[#080B10]/78 to-[#080B10]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-[#080B10]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,191,255,0.18),transparent_55%)]" />
      </div>

      <div className="container-ad section-pad relative z-10 w-full">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
          }}
        >
          <motion.p
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
            }}
          >
            <Sparkles size={14} aria-hidden />
            AQUA DRIVE · демо-лендинг
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-unbounded)] text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Безупречная чистота.
            <span className="mt-2 block text-gradient">В каждой детали.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Профессиональная автомойка и детейлинг нового поколения
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
            }}
          >
            <a href="#booking" className="btn-primary h-14 px-7 text-base">
              Записаться на мойку
              <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#services" className="btn-ghost h-14 px-7 text-base">
              Посмотреть услуги
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
