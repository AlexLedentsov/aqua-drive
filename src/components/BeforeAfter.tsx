"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AFTER_IMAGE, BEFORE_IMAGE } from "@/lib/data";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="relative py-20 md:py-28" aria-labelledby="before-after-title">
      <div className="container-ad section-pad">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            До / После
          </p>
          <h2
            id="before-after-title"
            className="font-[family-name:var(--font-unbounded)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Разница, которую видно
          </h2>
          <p className="mt-4 text-text-muted">
            Перетащите ползунок — демо-сравнение на стоковых фото (тестовые данные).
          </p>
        </div>

        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] cursor-ew-resize touch-none overflow-hidden rounded-2xl border border-white/10 select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            role="img"
            aria-label="Интерактивное сравнение до и после мойки"
          >
            <Image
              src={AFTER_IMAGE}
              alt="После — чистый автомобиль"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              draggable={false}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={BEFORE_IMAGE}
                alt="До — загрязнённый салон / авто"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
                draggable={false}
              />
            </div>

            <div
              className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_20px_rgba(0,191,255,0.5)]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#080B10]/85 text-cyan shadow-lg backdrop-blur">
                <span className="text-xs font-bold" aria-hidden>
                  ⇄
                </span>
              </div>
            </div>

            <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              До
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-cyan/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#041018]">
              После
            </span>
          </div>

          <label className="mt-5 flex items-center gap-3 text-sm text-text-muted">
            <span className="shrink-0">Позиция</span>
            <input
              type="range"
              min={2}
              max={98}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-cyan"
              aria-label="Позиция сравнения до и после"
            />
          </label>
        </motion.div>
      </div>
    </section>
  );
}
