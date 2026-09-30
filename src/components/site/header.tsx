"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site, waLink, defaultEnquiry } from "@/lib/site";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#recent-work", label: "Recent Work" },
  { href: "#contact", label: "Get a Quote" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all ${
        scrolled
          ? "border-stone-200 bg-stone-50/95 shadow-sm backdrop-blur"
          : "border-transparent bg-stone-50"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <Link href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-stone-950">
            <HardHat className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-heading text-base font-extrabold tracking-tight text-stone-900 sm:text-lg">
              Home Build <span className="text-amber-600">Construction</span>
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-wider text-stone-500 sm:block">
              Cape Town Builders
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-200/70 hover:text-stone-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-10 border-stone-300 text-stone-800"
          >
            <a href={site.phoneHref} aria-label={`Call ${site.name}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="h-10 bg-[#1FA855] font-semibold text-white hover:bg-[#18894a]"
          >
            <a
              href={waLink(defaultEnquiry)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Mobile CTAs */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            asChild
            size="sm"
            className="h-10 bg-[#1FA855] font-semibold text-white hover:bg-[#18894a]"
          >
            <a
              href={waLink(defaultEnquiry)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden min-[380px]:inline">WhatsApp</span>
              <span className="min-[380px]:hidden">Chat</span>
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-stone-300"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-stone-50">
              <SheetHeader className="border-b border-stone-200 pb-4 text-left">
                <SheetTitle className="flex items-center gap-2 font-heading text-lg font-extrabold text-stone-900">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-stone-950">
                    <HardHat className="h-5 w-5" aria-hidden="true" />
                  </span>
                  Home Build Construction
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-4 pt-4"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-stone-800 transition-colors hover:bg-stone-200/70"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t border-stone-200 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 w-full border-stone-300 text-stone-800"
                  >
                    <a href={site.phoneHref}>
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call {site.phoneDisplay}
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="h-11 w-full bg-[#1FA855] font-semibold text-white hover:bg-[#18894a]"
                  >
                    <a
                      href={waLink(defaultEnquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
