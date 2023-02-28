"use client";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { BannerIntro } from "../components/BannerIntro";
import { IntroSection } from "../components/IntroSection";
import { Conceptual } from "../components/Conceptual";
import { AdminDashboard } from "../components/AdminDashboard";
import { GetVersion } from "../components/GetVersion";
import { FeatureOverview } from "../components/FeatureOverview";
import { StoryBehind } from "../components/StoryBehind";
import { Roadmap } from "../components/Roadmap";
import { PurchaseAndBuilding } from "../components/PurchaseAndBuilding";
import { Footer } from "../components/Footer";
import { Application } from "../components/Application";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <BannerIntro />
      <IntroSection />
      <Conceptual />
      <AdminDashboard />
      <GetVersion />
      <FeatureOverview />
      <Application />
      <StoryBehind />
      <Roadmap />
      <PurchaseAndBuilding />
      <Footer />
    </main>
  );
}
