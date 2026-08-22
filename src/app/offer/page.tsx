import type { Metadata } from "next";
import OfferHero from "@/components/sections/OfferHero";
import OfferPitch from "@/components/sections/OfferPitch";
import OfferResults from "@/components/sections/OfferResults";
import OfferAuthority from "@/components/sections/OfferAuthority";
import OfferClose from "@/components/sections/OfferClose";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Get Instant Access — Logan & Trey",
  description:
    "The $30 Starter Kit for building your own window cleaning route from scratch.",
};

export default function Offer() {
  return (
    <main>
      <OfferHero />
      <OfferPitch />
      <OfferResults />
      <OfferAuthority />
      <OfferClose />
      <Footer />
    </main>
  );
}
