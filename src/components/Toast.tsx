"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

type ToastProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export function Toast({ open, message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed bottom-24 left-1/2 z-[60] w-[min(92vw,28rem)] -translate-x-1/2 sm:bottom-8"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          role="status"
          aria-live="polite"
        >
          <div className="glass-strong flex items-start gap-3 rounded-2xl px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={22} aria-hidden />
            <p className="flex-1 text-sm leading-relaxed text-text">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 text-text-muted transition-colors hover:text-white"
              aria-label="Закрыть уведомление"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
