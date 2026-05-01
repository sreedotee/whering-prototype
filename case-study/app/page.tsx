'use client';

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import SessionSignal from "@/components/SessionSignal";
import SectionTimeline from "@/components/SectionTimeline";

const load = (path: string) => dynamic(() => import(`@/components/sections/${path}`), { loading: () => null });

const Overview = load("Overview");
const BriefChallenge = load("BriefChallenge");
const MarketContext = load("MarketContext");
const UserPersonas = load("UserPersonas");
const AuditAndMethod = load("AuditAndMethod");
const UserResearch = load("UserResearch");
const CurrentStateProblems = load("CurrentStateProblems");
const CompetitiveLandscape = load("CompetitiveLandscape");
const CompetitiveInspiration = load("CompetitiveInspiration");
const UserInsights = load("UserInsights");
const JobsToBeDone = load("JobsToBeDone");
const StrategicOpportunity = load("StrategicOpportunity");
const CardSorting = load("CardSorting");
const InteractionClarityTerminology = load("InteractionClarityTerminology");
const PromiseBehaviorMatrix = load("PromiseBehaviorMatrix");
const ModeDecisions = load("ModeDecisions");
const DesignLanguage = load("DesignLanguage");
const InformationArchitecture = load("InformationArchitecture");
const ProductPrinciples = load("ProductPrinciples");
const Iterations = load("Iterations");
const DesignSystem = load("DesignSystem");
const BrandPreservation = load("BrandPreservation");
const VideoAndPrototype = load("VideoAndPrototype");
const ProblemEvolution = load("ProblemEvolution");
const Validation = load("Validation");
const ImpactMetrics = load("ImpactMetrics");
const Monetization = load("Monetization");
const Constraints = load("Constraints");
const Reflection = load("Reflection");

export default function Home() {
  return (
    <main className="bg-white min-h-screen lg:ml-[260px]">
      <SectionTimeline />
      <Hero />
      <SessionSignal />
      <div className="flex flex-col">
        <Overview />
        <BriefChallenge />
        <CompetitiveInspiration />
        <AuditAndMethod />
        <UserInsights />
        <StrategicOpportunity />
        <InteractionClarityTerminology />
        <PromiseBehaviorMatrix />
        <DesignLanguage />
        <InformationArchitecture />
        <ProductPrinciples />
        <BrandPreservation />
        <Monetization />
        <Reflection />
      </div>
    </main>
  );
}
