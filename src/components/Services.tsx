"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby="services-title"
    >
      <div id="prices" className="absolute -top-24" aria-hidden />
      <div className="container-ad section-pad">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
              Услуги и цены
            </p>
            <h2
              id="services-title"
              className="font-[family-name:var(--font-unbounded)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Каталог ухода за авто
            </h2>
            <p className="mt-4 text-text-muted">
              Цены указаны как демо / тестовые и могут отличаться в реальном сервисе.
            </p>
          </div>
          <a href="#booking" className="btn-ghost h-12 px-6 text-sm self-start md:self-auto">
            Записаться
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-bg-elevated/60"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-cyan px-3 py-1 text-xs font-bold text-[#041018]">
                  {service.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-unbounded)] text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <a
                  href={`#booking`}
                  className="mt-4 inline-flex text-sm font-semibold text-cyan transition-colors hover:text-white"
                >
                  Выбрать услугу →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
