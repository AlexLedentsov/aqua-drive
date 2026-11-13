import { Camera, MessageCircle, Send } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#06080c] pb-24 pt-14 md:pb-12">
      <div className="container-ad section-pad">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a
              href="#hero"
              className="font-[family-name:var(--font-unbounded)] text-xl font-bold tracking-[0.14em] text-white"
            >
              AQUA<span className="text-cyan"> DRIVE</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Премиальная автомойка и детейлинг. Демо-лендинг со тестовыми данными — без реальных
              записей и платежей.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Навигация
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  className="text-sm text-text-muted transition-colors hover:text-cyan"
                >
                  Запись
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Соцсети
            </h3>
            <div className="flex gap-3">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
                aria-label="Telegram (демо)"
              >
                <Send size={18} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
                aria-label="Instagram (демо)"
              >
                <Camera size={18} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
                aria-label="WhatsApp (демо)"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <p className="mt-4 text-xs text-text-muted">Ссылки демо / тестовые</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} AQUA DRIVE. Все права защищены. Демо-проект.</p>
          <p>Создано как тестовый лендинг · без реальных услуг</p>
        </div>
      </div>
    </footer>
  );
}
