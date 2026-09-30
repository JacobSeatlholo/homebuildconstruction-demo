"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/site/header";
import { waLink, defaultEnquiry } from "@/lib/site";

/**
 * Floating WhatsApp button — appears after the user scrolls past the hero,
 * giving a persistent one-tap route to the first enquiry.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(defaultEnquiry)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Home Build Construction on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/30 transition-all duration-300 hover:scale-105 hover:bg-[#20c35c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20 [animation-duration:2.5s]" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
