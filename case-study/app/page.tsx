'use client';

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import SessionSignal from "@/components/SessionSignal";
import SectionTimeline from "@/components/SectionTimeline";
import Footer from "@/components/Footer";

const load = (path: string) => dynamic(() => import(`@/components/sections/${path}`), { loading: () => null });

// Context
const Overview              = load("Overview");
const BriefChallenge        = load("BriefChallenge");
const MarketContext         = load("MarketContext");
const UserPersonas          = load("UserPersonas");

// Research
const AuditAndMethod        = load("AuditAndMethod");
const UserResearch          = load("UserResearch");
const CurrentStateProblems  = load("CurrentStateProblems");
const CompetitiveLandscape  = load("CompetitiveLandscape");
const CompetitiveInspiration = load("CompetitiveInspiration");

// Synthesis
const UserInsights          = load("UserInsights");
const JobsToBeDone          = load("JobsToBeDone");
const StrategicOpportunity  = load("StrategicOpportunity");
const CardSorting           = load("CardSorting");
const InteractionClarityTerminology = load("InteractionClarityTerminology");

// Framework
const PromiseBehaviorMatrix = load("PromiseBehaviorMatrix");
const ThreeModes            = load("ThreeModes");
const ModeDecisions         = load("ModeDecisions");

// Design
const RedesignDirection     = load("RedesignDirection");
const DesignLanguage        = load("DesignLanguage");
const InformationArchitecture = load("InformationArchitecture");
const ProductPrinciples     = load("ProductPrinciples");
const ModeScreens           = dynamic(() => import("@/components/sections/ModeScreens"), { loading: () => null });

// System & Validation
const Iterations            = load("Iterations");
const DesignSystem          = load("DesignSystem");
const BrandPreservation     = load("BrandPreservation");
const VideoAndPrototype     = load("VideoAndPrototype");
const ProblemEvolution      = load("ProblemEvolution");
const Validation            = load("Validation");
const ImpactMetrics         = load("ImpactMetrics");
const Monetization          = load("Monetization");
const Constraints           = load("Constraints");
const Reflection            = load("Reflection");

export default function Home() {
  const mode1Screens = [
    {
      title: "Home",
      caption: "Passive inspiration without search clutter",
      bg: "linear-gradient(135deg, #3D2B4C 0%, #5a3d6e 100%)",
      icon: "home",
      imageSrc: "/images/Recently Added.svg",
    },
    {
      title: "Search",
      caption: "Instagram-style Explore hub for active style discovery",
      bg: "linear-gradient(135deg, #2a1e36 0%, #3D2B4C 100%)",
      icon: "link",
      imageSrc: "/images/Pasted Link (1).svg",
      scrollable: true,
    },
    {
      title: "Canvas",
      caption: "Try-on canvas as the main creation surface",
      bg: "linear-gradient(135deg, #4a3560 0%, #6b3fa0 100%)",
      icon: "floppy-disk",
    },
    {
      title: "Wardrobe",
      caption: "Items, outfits, and collection types",
      bg: "linear-gradient(135deg, #3D2B4C 0%, #7b4fb5 100%)",
      icon: "card-index-dividers",
      imageSrc: "/images/Collection-Items.svg",
    },
  ];

  const mode2Screens = [
    {
      title: "Creator Card",
      caption: "Creator taste becomes a discovery path",
      bg: "linear-gradient(135deg, #1a1520 0%, #3D2B4C 100%)",
      icon: "sparkles",
      slideshow: [
        "/images/TryOnCanvas.svg",
        "/images/Bottoms Try On.svg",
        "/images/Outerwear Try On.svg",
        "/images/Footwear Try On.svg",
        "/images/Accessories Try On.svg",
      ],
    },
    {
      title: "Outfit Card",
      caption: "Outfits expose reusable items",
      bg: "linear-gradient(135deg, #2a1e36 0%, #4a3560 100%)",
      icon: "dress",
    },
    {
      title: "Item Detail",
      caption: "Items connect discovery to wardrobe",
      bg: "linear-gradient(135deg, #3D2B4C 0%, #6b3fa0 100%)",
      icon: "lightning",
      imageSrc: "/images/OutfitHistory.svg",
    },
    {
      title: "Collection Detail",
      caption: "Saved taste becomes reusable context",
      bg: "linear-gradient(135deg, #4a3560 0%, #8b5fc0 100%)",
      icon: "party-popper",
      imageSrc: "/images/Post-Generation-Result.svg",
      scrollable: true,
    },
  ];

  const mode3Screens = [
    {
      title: "Promise Matrix",
      caption: "Promise mapped to behavior",
      bg: "linear-gradient(135deg, #1a1520 0%, #2a1e36 100%)",
      icon: "clipboard",
      imageSrc: "/images/OutfitHistory.svg",
    },
    {
      title: "Casual User View",
      caption: "Universal needs separated from depth",
      bg: "linear-gradient(135deg, #2a1e36 0%, #3D2B4C 100%)",
      icon: "heart",
      imageSrc: "/images/ExpandedOutfitDetails.svg",
      scrollable: true,
    },
    {
      title: "Power User View",
      caption: "Advanced workflows moved deeper",
      bg: "linear-gradient(135deg, #3D2B4C 0%, #5a3d6e 100%)",
      icon: "magnifying-glass",
      imageSrc: "/images/ExpandedItemDetails.svg",
      scrollable: true,
    },
    {
      title: "Clustered Tabs",
      caption: "Related actions grouped into destinations",
      bg: "linear-gradient(135deg, #4a3560 0%, #6b3fa0 100%)",
      icon: "card-file-box",
    },
  ];

  return (
    <main className="bg-white min-h-screen lg:ml-[260px]">
      <SectionTimeline />
      <Hero />
      <SessionSignal />
      <div className="flex flex-col">

        {/* ── Context ── */}
        <Overview />
        <BriefChallenge />
        <CompetitiveInspiration />

        {/* ── Research ── */}
        <AuditAndMethod />

        {/* ── Synthesis ── */}
        <UserInsights />
        <StrategicOpportunity />
        <InteractionClarityTerminology />

        {/* ── Framework ── */}
        <PromiseBehaviorMatrix />
        <ThreeModes />

        {/* ── Design ── */}
        <RedesignDirection />
        <DesignLanguage />
        <InformationArchitecture />
        <ProductPrinciples />

        <div id="designs" />
        <ModeScreens
          mode1Data={{
            modeTitle: "Layer 1: NAVIGATION",
            subtitle: "Purpose-Driven Hubs",
            microlabel: "Action Hierarchy",
            intro: "The navigation layer replaces competing feature clusters with five intent-based hubs. By mapping each tab to a clear purpose (Home, Explore, Canvas, Inbox, Profile), the first screen has fewer competing demands.",
            screens: mode1Screens,
            flowSteps: ["Audit CTAs", "Clarify tab purpose", "Cluster hub jobs", "Derive destinations"],
          }}
          mode2Data={{
            modeTitle: "Layer 2: DISCOVERY LOOP",
            subtitle: "Creator to Wardrobe",
            microlabel: "Creator to Wardrobe",
            intro: "The discovery layer makes inspiration modular. Creators lead to outfits, outfits expose items, items move into try-on remixing, and saved context feeds calendar planning.",
            screens: mode2Screens,
            feature: {
              icon: "sparkles",
              title: "Reusable Inspiration",
              text: "Discovery should not end at a like or static save. Every outfit and item should become a path into remixing, collecting, planning, and returning.",
            },
          }}
          mode3Data={{
            modeTitle: "Layer 3: DECISION MODEL",
            subtitle: "Logic-Based Redesign",
            microlabel: "Matrix to Structure",
            intro: "The decision model validates product depth by segregating daily Dressing Intent from long-term Management. By relocating low-frequency stats and tools to the Profile 'Identity' hub, the surface remains clean without losing product power.",
            screens: mode3Screens,
          }}
        />

        {/* ── System & Validation ── */}
        <BrandPreservation />
        <Monetization />

        {/* ── Closing ── */}
        <Reflection />
      </div>
      <Footer />
    </main>
  );
}
