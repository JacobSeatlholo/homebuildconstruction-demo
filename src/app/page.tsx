import { Header } from "@/components/site/header";
import { Hero, TrustBar } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { About, RecentWork } from "@/components/site/about";
import { LeadForm } from "@/components/site/lead-form";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-900 antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <RecentWork />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
