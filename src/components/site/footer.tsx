import { HardHat, Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import { site, waLink, defaultEnquiry } from "@/lib/site";
import { services } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/header";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-800 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-stone-950">
                <HardHat className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-extrabold text-white">
                Home Build <span className="text-amber-400">Construction</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              {site.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-stone-500">
              {site.tagline}
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              What we do
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-stone-400 transition-colors hover:text-amber-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-stone-400 transition-colors hover:text-amber-300"
                >
                  Other renovations &amp; repairs
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-stone-400 transition-colors hover:text-amber-300"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 break-all text-stone-400 transition-colors hover:text-amber-300"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-stone-400">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {site.location} — servicing {site.serviceArea}
              </li>
              <li>
                <a
                  href={site.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-stone-400 transition-colors hover:text-amber-300"
                >
                  <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
                  homebuildconstruction.co.za
                </a>
              </li>
            </ul>
            <a
              href={waLink(defaultEnquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-[#1FA855] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#18894a]"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-stone-800 pt-6 text-xs leading-relaxed text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
            <span className="mt-1.5 block">
              Demo site built for {site.name} — business details from{" "}
              <a
                href={site.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-stone-300"
              >
                homebuildconstruction.co.za
              </a>
              .
            </span>
          </p>
          <a
            href="https://app.businesshustle.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-stone-700 bg-stone-800/60 px-3 py-2 font-medium text-stone-400 transition-colors hover:border-amber-500/50 hover:text-amber-300"
            aria-label="Website built by BusinessHustle — visit businesshustle.co.za"
          >
            Built by BusinessHustle
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
