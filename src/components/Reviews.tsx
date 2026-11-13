"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";

export function Reviews() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="reviews-title">
      <div className="container-ad section-pad">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            Отзывы
          </p>
          <h2
            id="reviews-title"
            className="font-[family-name:var(--font-unbounded)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Говорят клиенты
          </h2>
          <p className="mt-4 text-text-muted">
            Все отзывы ниже — демо / тестовые данные для презентации лендинга.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.name}
              className="glass flex h-full flex-col rounded-2xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="mb-4 flex gap-1" aria-label={`Оценка ${review.rating} из 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "fill-cyan text-cyan"
                        : "fill-transparent text-white/20"
                    }
                    aria-hidden
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-text-muted">
                «{review.text}»
              </p>
              <footer className="mt-5 border-t border-white/8 pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-white">{review.name}</span>
                  <span className="mt-1 block text-xs text-text-muted">{review.car}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
