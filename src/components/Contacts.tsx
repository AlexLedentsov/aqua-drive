"use client";

import { motion } from "framer-motion";
import { Clock3, MapPin, Navigation, Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";

export function Contacts() {
  return (
    <section
      id="contacts"
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby="contacts-title"
    >
      <div className="container-ad section-pad">
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            Контакты
          </p>
          <h2
            id="contacts-title"
            className="font-[family-name:var(--font-unbounded)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Как нас найти
          </h2>
          <p className="mt-4 text-text-muted">
            Адрес, телефон и часы ниже — демо / тестовые данные для лендинга.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass space-y-6 rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-dim text-cyan">
                <MapPin size={20} aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-white">Адрес</h3>
                <p className="mt-1 text-sm text-text-muted">{CONTACT.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-dim text-cyan">
                <Phone size={20} aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-white">Телефон</h3>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1 block text-sm text-cyan transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-dim text-cyan">
                <Clock3 size={20} aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-white">Часы работы</h3>
                <p className="mt-1 text-sm text-text-muted">{CONTACT.hours}</p>
              </div>
            </div>

            <a
              href={CONTACT.routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-12 w-full px-6 text-sm"
            >
              <Navigation size={16} aria-hidden />
              Построить маршрут
            </a>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-3xl border border-white/10 bg-graphite"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <iframe
              title="Карта AQUA DRIVE (демо)"
              src={CONTACT.mapEmbed}
              className="h-[320px] w-full border-0 md:h-full md:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="border-t border-white/8 px-4 py-3 text-center text-xs text-text-muted">
              Карта-заглушка OpenStreetMap · тестовая геолокация
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
