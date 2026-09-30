"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronRight,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/site/header";
import { useToast } from "@/hooks/use-toast";
import { site, waLink, defaultEnquiry } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  service: string;
  details: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  suburb: "",
  service: "",
  details: "",
};

const serviceOptions = [
  { value: "kitchen-renovation", label: "Kitchen renovation" },
  { value: "bathroom-renovation", label: "Bathroom renovation" },
  { value: "timber-frame-build", label: "Timber-frame build / addition" },
  { value: "other-home-project", label: "Other home project" },
];

/** Build the WhatsApp lead message from form state. */
function buildLeadMessage(form: FormState): string {
  const lines = [
    "Hi Home Build Construction! I'd like to request a service.",
    "",
    `*Service:* ${form.service}`,
    `*Name:* ${form.name}`,
    `*Suburb:* ${form.suburb}`,
    `*Phone:* ${form.phone}`,
  ];
  if (form.email.trim()) lines.push(`*Email:* ${form.email.trim()}`);
  if (form.details.trim()) {
    lines.push("", `*Project details:* ${form.details.trim()}`);
  }
  return lines.join("\n");
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name";
    if (!form.phone.trim()) next.phone = "We need a number to quote you";
    else if (!/^[+0-9 ()-]{7,}$/.test(form.phone.trim()))
      next.phone = "That number doesn't look right";
    if (!form.suburb.trim()) next.suburb = "Which area are you in?";
    if (!form.service) next.service = "Pick the type of work you need";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "A few details are missing",
        description: "Fill in the highlighted fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    // Compose the lead and hand it off to WhatsApp — the first enquiry
    // lands directly in the business's WhatsApp chat.
    const link = waLink(buildLeadMessage(form));
    window.open(link, "_blank", "noopener,noreferrer");

    toast({
      title: "Opening WhatsApp…",
      description:
        "Your enquiry is pre-filled — just press send and we'll take it from there.",
    });

    // Reset shortly after the handoff, keeping the UX smooth.
    window.setTimeout(() => {
      setForm(initialForm);
      setSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-stone-950 py-16 text-stone-100 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Left: pitch + contact details */}
          <div className="lg:col-span-2">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-amber-400/40 bg-stone-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300"
            >
              Request Service
            </Badge>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get your free quote in minutes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-300">
              Fill in the quick form and we&apos;ll open WhatsApp with
              everything pre-filled — no copy-pasting, no waiting on hold.
              Prefer to chat first? Message or call us directly.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-900 ring-1 ring-stone-700">
                  <Phone className="h-5 w-5 text-amber-400" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Call us</p>
                  <a
                    href={site.phoneHref}
                    className="mt-0.5 block text-sm text-stone-300 transition-colors hover:text-amber-300"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-900 ring-1 ring-stone-700">
                  <Mail className="h-5 w-5 text-amber-400" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Email us</p>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      "Service enquiry via website"
                    )}`}
                    className="mt-0.5 block break-all text-sm text-stone-300 transition-colors hover:text-amber-300"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-900 ring-1 ring-stone-700">
                  <MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Where we work</p>
                  <p className="mt-0.5 text-sm text-stone-300">
                    {site.serviceArea}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-900 ring-1 ring-stone-700">
                  <Clock className="h-5 w-5 text-amber-400" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Hours</p>
                  <p className="mt-0.5 text-sm text-stone-300">
                    Mon – Fri, 08:00 – 17:00 · Sat by appointment
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: the form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-white p-5 shadow-xl shadow-stone-950/40 ring-1 ring-stone-800/60 sm:p-8"
              aria-label="Service request form"
            >
              <div className="flex items-center gap-2.5 border-b border-stone-100 pb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#128C4B]">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-stone-900">
                    Request a service
                  </h3>
                  <p className="text-xs text-stone-500">
                    Sent straight to our WhatsApp — we usually reply the same
                    day.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. Thandi Mokoena"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    className="h-12 bg-stone-50"
                  />
                  {errors.name && (
                    <p className="text-xs font-medium text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone / WhatsApp number <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. 082 123 4567"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                    className="h-12 bg-stone-50"
                  />
                  {errors.phone && (
                    <p className="text-xs font-medium text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="font-normal text-stone-400">(optional)</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="h-12 bg-stone-50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="suburb">
                    Your suburb <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="suburb"
                    name="suburb"
                    autoComplete="address-level2"
                    placeholder="e.g. Fish Hoek"
                    value={form.suburb}
                    onChange={(e) => set("suburb", e.target.value)}
                    aria-invalid={!!errors.suburb}
                    className="h-12 bg-stone-50"
                  />
                  {errors.suburb && (
                    <p className="text-xs font-medium text-red-600" role="alert">
                      {errors.suburb}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="service">
                    What do you need done? <span className="text-red-600">*</span>
                  </Label>
                  <Select value={form.service} onValueChange={(v) => set("service", v)}>
                    <SelectTrigger
                      id="service"
                      aria-invalid={!!errors.service}
                      className="h-12 w-full bg-stone-50 text-stone-900"
                    >
                      <SelectValue placeholder="Choose a service…" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.label}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-xs font-medium text-red-600" role="alert">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="details">
                    Project details{" "}
                    <span className="font-normal text-stone-400">
                      (optional — size, age of home, timeline…)
                    </span>
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="e.g. 1980s kitchen, roughly 3x4m, want new cabinets, countertops and a moved sink…"
                    value={form.details}
                    onChange={(e) => set("details", e.target.value)}
                    className="resize-y bg-stone-50"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="mt-6 h-13 min-h-13 w-full bg-[#1FA855] text-base font-semibold text-white hover:bg-[#18894a] disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Opening WhatsApp…
                  </>
                ) : (
                  <>
                    <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                    Send enquiry via WhatsApp
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>

              <p className="mt-4 text-center text-xs leading-relaxed text-stone-500">
                Submitting opens WhatsApp with your details pre-filled — nothing
                is stored on this demo site. You can also{" "}
                <a
                  href={waLink(defaultEnquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#128C4B] underline-offset-2 hover:underline"
                >
                  start a quick chat
                </a>{" "}
                or{" "}
                <a
                  href={site.phoneHref}
                  className="font-medium text-stone-700 underline-offset-2 hover:underline"
                >
                  call {site.phoneDisplay}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
