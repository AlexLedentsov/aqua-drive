"use client";

import { motion } from "framer-motion";
import { FlaskConical, Users, Wrench, Zap } from "lucide-react";
import { ADVANTAGES } from "@/lib/data";

const ICONS = {
  wrench: Wrench,
  flask: FlaskConical,
  users: Users,
  zap: Zap,
} as const;

export function Advantages() {
  return (
    <section id="about" className="relative py-20 md:py-28" aria-labelledby="advantages-title">
      <div className="container-ad section-pad">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            Почему мы
          </p>
          <h2
            id="advantages-title"
            className="font-[family-name:var(--font-unbounded)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Преимущества AQUA DRIVE
          </h2>
          <p className="mt-4 text-text-muted">
            Современный сервис ухода за автомобилем — тестовые формулировки для демо-лендинга.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {ADVANTAGES.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.article
                key={item.title}
                className="glass group rounded-2xl p-6 transition-colors hover:border-cyan/30"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-dim text-cyan transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-[family-name:var(--font-unbounded)] text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
