import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/site/header";
import { services, waLink, serviceEnquiries } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700"
          >
            Our Services
          </Badge>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Three trades. One trusted team.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
            We specialise in kitchen, bathroom and timber-frame work — and take
            on a variety of other renovation &amp; construction projects around
            the home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-stone-950/80 px-2.5 py-1 font-heading text-xs font-bold uppercase tracking-wider text-amber-400 backdrop-blur">
                  0{i + 1} / {service.short}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-xl font-bold text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-stone-700"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Button
                    asChild
                    className="h-12 w-full bg-[#1FA855] text-sm font-semibold text-white hover:bg-[#18894a]"
                  >
                    <a
                      href={waLink(serviceEnquiries[service.id])}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${service.cta} on WhatsApp`}
                    >
                      <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                      {service.cta}
                    </a>
                  </Button>
                  <a
                    href="#contact"
                    className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-stone-600 transition-colors hover:text-amber-700"
                  >
                    Or send a detailed request
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
