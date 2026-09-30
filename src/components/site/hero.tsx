import Image from "next/image";
import { ArrowDown, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/site/header";
import { site, waLink, defaultEnquiry, images } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative bg-stone-950">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:pt-28">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-5 gap-1.5 rounded-full border-amber-400/40 bg-stone-950/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {site.serviceArea}
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Kitchens, bathrooms &{" "}
            <span className="text-amber-400">timber-frame homes</span> built
            right
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Workmanship you can trust. We&apos;re a Cape Town building
            contractor with {site.yearsExperience}+ years in the industry —
            delivering quality renovations at an affordable price.
          </p>

          {/* CTAs — thumb-friendly on mobile */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-13 min-h-13 bg-[#1FA855] px-7 text-base font-semibold text-white shadow-lg shadow-emerald-950/40 hover:bg-[#18894a]"
            >
              <a
                href={waLink(defaultEnquiry)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                WhatsApp for a Free Quote
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-13 min-h-13 bg-amber-500 px-7 text-base font-semibold text-stone-950 hover:bg-amber-400"
            >
              <a href="#contact">
                Request a Call Back
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Micro trust line */}
          <p className="mt-6 flex items-center gap-2 text-sm text-stone-400">
            <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
            Free quotes &nbsp;•&nbsp; {site.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { value: `${site.yearsExperience}+`, label: "Years experience" },
    { value: "3", label: "Trade specialities" },
    { value: "100%", label: "Free, no-obligation quotes" },
    { value: "CT", label: "Cape Town & Peninsula" },
  ];

  return (
    <section
      aria-label="Key facts"
      className="border-b border-stone-200 bg-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-stone-200 px-4 py-6 sm:px-6 md:grid-cols-4 md:divide-x">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-0.5 px-3 py-3 text-center"
          >
            <span className="font-heading text-2xl font-extrabold text-amber-600 sm:text-3xl">
              {item.value}
            </span>
            <span className="text-xs font-medium text-stone-600 sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
