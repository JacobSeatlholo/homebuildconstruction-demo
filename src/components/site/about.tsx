import Image from "next/image";
import { Award, Clock, HandCoins, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { site, servicesArea, images } from "@/lib/site";

const reasons = [
  {
    icon: Award,
    title: "20+ years of expertise",
    text: "From a simple bathroom refresh to a full timber-frame build, we have the knowledge to take on your project and deliver quality results.",
  },
  {
    icon: Clock,
    title: "Efficiency first",
    text: "We plan tightly and work cleanly, so renovations finish in days-to-weeks — not dragging on for months while your home is upside down.",
  },
  {
    icon: HandCoins,
    title: "Affordable, honest quotes",
    text: "Detailed, no-obligation estimates up front. No surprise costs halfway through the job — you approve the numbers before we start.",
  },
  {
    icon: MapPin,
    title: "Local to the Peninsula",
    text: "Based in the South Peninsula and servicing the greater Cape Town area — we're nearby when you need us, before and after the build.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700"
            >
              About Us
            </Badge>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Workmanship you can trust, from a local Cape Town team
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-stone-600">
              <p>
                Home Build Construction is a trustworthy and affordable
                building contractor company in the Cape Town area. We
                specialise in kitchen, bathroom &amp; home renovations, and we
                have vast experience in home developments — taking on a wide
                variety of renovation and construction projects.
              </p>
              <p>
                With over {site.yearsExperience} years in the industry, you can
                trust that we have the knowledge and expertise to take on your
                project and deliver quality results at an affordable price. Get
                in touch today to receive your free estimate.
              </p>
            </div>

            {/* Service area chips */}
            <div className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                Areas we serve
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {servicesArea.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-sm font-medium text-stone-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image + reasons */}
          <div className="flex flex-col gap-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <Image
                src={images.timberInterior}
                alt="Timber-frame home interior with exposed wooden beams built by Home Build Construction"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li
                  key={reason.title}
                  className="rounded-xl border border-stone-200 bg-stone-50 p-4"
                >
                  <reason.icon
                    className="h-5 w-5 text-amber-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-2.5 text-sm font-bold text-stone-900">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    {reason.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RecentWork() {
  const items = [
    {
      src: images.kitchen,
      alt: "Renovated kitchen with light oak cabinets and granite countertops",
      title: "Kitchen refit & layout redesign",
      tag: "Kitchens",
    },
    {
      src: images.bathroom,
      alt: "Renovated bathroom with freestanding tub and tiled walk-in shower",
      title: "Full bathroom rebuild",
      tag: "Bathrooms",
    },
    {
      src: images.timber,
      alt: "Timber-frame structure with exposed trusses during construction",
      title: "Timber-frame erect & beam work",
      tag: "Timber-Frame",
    },
    {
      src: images.kitchenDetail,
      alt: "Craftsman fitting custom wooden kitchen cabinetry on site",
      title: "Custom cabinetry, made to fit",
      tag: "Kitchens",
    },
  ];

  return (
    <section id="recent-work" className="bg-stone-100 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700"
          >
            Recent Work
          </Badge>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            A look at what we build
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
            Every home is different — these projects show the range of work we
            handle across our three trades. Ask us for references in your area.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  {item.tag}
                </span>
                <h3 className="mt-1 text-sm font-semibold leading-snug text-stone-900">
                  {item.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-500">
          Illustrative demo imagery — ask us for photos of jobs near you.
        </p>
      </div>
    </section>
  );
}
