"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { CAR_TYPES, SERVICES, TIME_SLOTS } from "@/lib/data";
import { formatPhoneInput, isValidPhone } from "@/lib/phone";
import { Toast } from "./Toast";

type FormState = {
  name: string;
  phone: string;
  carType: string;
  service: string;
  date: string;
  time: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  phone: "",
  carType: "",
  service: "",
  date: "",
  time: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [toastOpen, setToastOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Укажите имя (минимум 2 символа)";
    }
    if (!isValidPhone(form.phone)) {
      next.phone = "Введите телефон в формате +7 (999) 000-00-00";
    }
    if (!form.carType) next.carType = "Выберите тип авто";
    if (!form.service) next.service = "Выберите услугу";
    if (!form.date) next.date = "Укажите дату";
    if (!form.time) next.time = "Укажите время";
    return next;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 450));
    setSubmitting(false);
    setToastOpen(true);
    setForm(initial);
  };

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <section
      id="booking"
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby="booking-title"
    >
      <div className="container-ad section-pad">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
              Онлайн-запись
            </p>
            <h2
              id="booking-title"
              className="font-[family-name:var(--font-unbounded)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Записаться на мойку
            </h2>
            <p className="mt-4 max-w-md text-text-muted">
              Форма работает в демо-режиме: данные никуда не отправляются. Это тестовый сценарий
              без реального бэкенда.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cyan/20 bg-cyan-dim px-4 py-3 text-sm text-cyan">
              <CalendarCheck size={18} aria-hidden />
              Тестовая запись · без подтверждения
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            noValidate
            className="glass-strong rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="label-ad">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={`input-field ${errors.name ? "error" : ""}`}
                  placeholder="Александр"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-danger">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="label-ad">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={`input-field ${errors.phone ? "error" : ""}`}
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setField("phone", formatPhoneInput(e.target.value))}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-danger">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="carType" className="label-ad">
                  Тип авто
                </label>
                <select
                  id="carType"
                  name="carType"
                  className={`input-field ${errors.carType ? "error" : ""}`}
                  value={form.carType}
                  onChange={(e) => setField("carType", e.target.value)}
                >
                  <option value="">Выберите тип</option>
                  {CAR_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.carType && (
                  <p className="mt-1.5 text-xs text-danger">{errors.carType}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="label-ad">
                  Услуга
                </label>
                <select
                  id="service"
                  name="service"
                  className={`input-field ${errors.service ? "error" : ""}`}
                  value={form.service}
                  onChange={(e) => setField("service", e.target.value)}
                >
                  <option value="">Выберите услугу</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} — {s.price}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-danger">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="date" className="label-ad">
                  Дата
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={minDate}
                  className={`input-field ${errors.date ? "error" : ""}`}
                  value={form.date}
                  onChange={(e) => setField("date", e.target.value)}
                />
                {errors.date && (
                  <p className="mt-1.5 text-xs text-danger">{errors.date}</p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="label-ad">
                  Время
                </label>
                <select
                  id="time"
                  name="time"
                  className={`input-field ${errors.time ? "error" : ""}`}
                  value={form.time}
                  onChange={(e) => setField("time", e.target.value)}
                >
                  <option value="">Выберите время</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1.5 text-xs text-danger">{errors.time}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary mt-7 h-14 w-full text-base disabled:opacity-70"
              disabled={submitting}
            >
              {submitting ? "Отправка…" : "Отправить заявку"}
            </button>
            <p className="mt-3 text-center text-xs text-text-muted">
              Нажимая кнопку, вы подтверждаете, что это демо / тестовая форма без реальной записи.
            </p>
          </motion.form>
        </div>
      </div>

      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        message="Заявка принята в демо-режиме. Это тестовые данные — реальной записи нет и бэкенд не вызывался."
      />
    </section>
  );
}
