/**
 * Central site configuration for the Home Build Construction demo site.
 * Business details sourced from https://www.homebuildconstruction.co.za/
 */

import heroImage from "@/assets/hero.png";
import kitchenImage from "@/assets/kitchen.png";
import bathroomImage from "@/assets/bathroom.png";
import timberImage from "@/assets/timber.png";
import kitchenDetailImage from "@/assets/kitchen-detail.png";
import timberInteriorImage from "@/assets/timber-interior.png";

export const images = {
  hero: heroImage,
  kitchen: kitchenImage,
  bathroom: bathroomImage,
  timber: timberImage,
  kitchenDetail: kitchenDetailImage,
  timberInterior: timberInteriorImage,
};

export const site = {
  name: "Home Build Construction",
  legalName: "HBC Projects (Pty.) Ltd.",
  tagline: "Efficiency • Quality • Reliability",
  description:
    "Trustworthy and affordable building contractor in the Cape Town area. Kitchen, bathroom & timber-frame specialists with 20+ years of industry experience.",
  phoneDisplay: "+27 67 890 1516",
  phoneHref: "tel:+27678901516",
  /** WhatsApp number in international format, no "+" or spaces */
  whatsappNumber: "27678901516",
  email: "ashy@homebuildconstruction.co.za",
  location: "Cape Town, South Africa",
  serviceArea: "Cape Town & the South Peninsula",
  website: "https://www.homebuildconstruction.co.za/",
  yearsExperience: 20,
} as const;

/** Build a wa.me click-to-chat link with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Prefilled first-enquiry messages per service. */
export const defaultEnquiry =
  "Hi Home Build Construction! I found you online and would like a free quote for a home project.";

export const serviceEnquiries: Record<string, string> = {
  kitchens:
    "Hi Home Build Construction! I'd like a free quote for a KITCHEN RENOVATION. Could we set up a site visit?",
  bathrooms:
    "Hi Home Build Construction! I'd like a free quote for a BATHROOM RENOVATION. Could we set up a site visit?",
  "timber-frame":
    "Hi Home Build Construction! I'd like to chat about a TIMBER-FRAME build / home. Could we set up a consultation?",
  other:
    "Hi Home Build Construction! I'd like to discuss a home renovation project.",
};

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  cta: string;
};

export const services: Service[] = [
  {
    id: "kitchens",
    title: "Kitchen Renovations",
    short: "Kitchens",
    description:
      "From a simple refresh to a full strip-and-refit, we design and build kitchens that suit your home and your budget — custom cabinetry, countertops, plumbing and tiling all handled by one team.",
    features: [
      "Custom cabinetry & countertops",
      "Plumbing, tiling & electrics co-ordinated",
      "Layout redesign for better flow",
      "Painted, wrapped or solid-timber finishes",
    ],
    image: kitchenImage,
    imageAlt: "Newly renovated kitchen with light oak cabinets and granite countertops",
    cta: "Get a kitchen quote",
  },
  {
    id: "bathrooms",
    title: "Bathroom Renovations",
    short: "Bathrooms",
    description:
      "Waterproofed, well-ventilated and beautifully finished bathrooms — completed efficiently so your household is disrupted for days, not months.",
    features: [
      "Full strip-out & rebuild",
      "Waterproofing & leak repairs",
      "Tiling, vanities & fixtures fitted",
      "Wet rooms & walk-in showers",
    ],
    image: bathroomImage,
    imageAlt: "Renovated bathroom with freestanding tub and large format tiles",
    cta: "Get a bathroom quote",
  },
  {
    id: "timber-frame",
    title: "Timber-Frame Construction",
    short: "Timber-Frame",
    description:
      "Build new with warm, exposed wooden beams. Whether you're after a rustic, traditional, craftsman or modern timber-frame home, we help you design and build a unique space that is quick to erect and energy efficient.",
    features: [
      "New timber-frame homes & additions",
      "Exposed beam & truss design",
      "Energy-efficient building envelope",
      "Granny flats & garden cottages",
    ],
    image: timberImage,
    imageAlt: "Timber frame house under construction with exposed wooden beams",
    cta: "Discuss a timber-frame build",
  },
];

export const servicesArea = [
  "Cape Town CBD",
  "Southern Suburbs",
  "South Peninsula",
  "Atlantic Seaboard",
  "Northern Suburbs",
  "West Coast",
];

export const galleryItems = [
  {
    src: kitchenImage,
    alt: "Modern renovated kitchen with oak cabinets",
    title: "Kitchen refit — Southern Suburbs",
    tag: "Kitchen",
  },
  {
    src: bathroomImage,
    alt: "Renovated bathroom with freestanding tub",
    title: "Bathroom rebuild — Muizenberg",
    tag: "Bathroom",
  },
  {
    src: timberInteriorImage,
    alt: "Timber frame home interior with exposed beams",
    title: "Timber-frame home — Peninsula",
    tag: "Timber-Frame",
  },
  {
    src: kitchenDetailImage,
    alt: "Craftsman installing custom kitchen cabinetry",
    title: "Custom cabinetry install",
    tag: "Kitchen",
  },
];
