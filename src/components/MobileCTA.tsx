"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const booking = document.getElementById("booking");
      const bookingVisible =
        booking &&
        booking.getBoundingClientRect().top < window.innerHeight * 0.85 &&
        booking.getBoundingClientRect().bottom > 80;
      setVisible(window.scrollY > 420 && !bookingVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 p-4 md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <a
            href="#booking"
            className="btn-primary flex h-14 w-full shadow-[0_-8px_40px_rgba(0,0,0,0.45)]"
          >
            Записаться на мойку
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
