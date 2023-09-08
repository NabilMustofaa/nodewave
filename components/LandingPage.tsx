import React from "react";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import TestimonySection from "./TestimonySection";
import WorkSection from "./WorkSection";
import FeatureSection from "./FeatureSection";
import PriceSection from "./PriceSection";

export default function LandingPage() {
  return (
    <div className="bg-black px-16 flex flex-col w-screen overflow-x-hidden">
      <HeroSection />
      <ProductSection />
      <TestimonySection />
      <WorkSection />
      <FeatureSection />
      <PriceSection />
    </div>
  );
}
