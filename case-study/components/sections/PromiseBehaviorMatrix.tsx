"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const matrixData = {
  features: ["Digitizing", "AI Stylist", "Planner", "Stats (CPW)"],
  pillars: ["Waste Reduction", "Style Better", "Shop Smarter", "Organization"],
  master: {
    "Digitizing": {
      "Waste Reduction": ["Prevents repeat buys", "Extends garment life", "Identifies unused items", "Discourages throw-away"],
      "Style Better": ["Reveals color palettes", "Enables cross-matching", "Visualizes capsules", "Eliminates closet blindness"],
      "Shop Smarter": ["Store compatibility", "Verifies item gaps", "Prevents impulse one-offs", "In-hand reference"],
      "Organization": ["Centralizes boxes", "Indexes rotations", "Tracks laundry/repair", "Searchable inventory"],
    },
    "AI Stylist": {
      "Waste Reduction": ["Rescues deadstock", "Kills 'nothing to wear'", "Promotes restyling", "Slows replacement cycle"],
      "Style Better": ["Professional pairings", "Bold combo experiments", "Doubles perceived closet", "Daily style loops"],
      "Shop Smarter": ["Identifies missing basics", "Prevents non-stylable buys", "Links to wishlists", "Shows 'missing piece' use"],
      "Organization": ["Groups by 'Mood'", "Weather-based sorting", "Silhouette clustering", "Auto-tagging flow"],
    },
    "Planner": {
      "Waste Reduction": ["Social event panic-buys", "Travel rouse maximization", "Shopping avoidance", "Rotational wear checks"],
      "Style Better": ["Thoughtful curation", "Situational styling", "Consistent branding", "Travel lookbooks"],
      "Shop Smarter": ["Pinpoints outfit gaps", "Informs planned trips", "Tracks event spending", "Versatility checks"],
      "Organization": ["Physical storage map", "Laundry cycle mgt", "Seasonal pack-away", "Packing list automation"],
    },
    "Stats (CPW)": {
      "Waste Reduction": ["Shames fast-fashion", "Highlights low-utility", "Usage-rotation rewards", "Eco-progress metrics"],
      "Style Better": ["Most-worn signature", "Aesthetic validation", "Friction identification", "Silhouette frequency"],
      "Shop Smarter": ["Investment ROI proof", "Budget allocation info", "Impulse death-math", "Brand loyalty data"],
      "Organization": ["Donation flagging", "Utilization rates", "Shelf-space hierarchy", "Clear-out automation"],
    },
  },
  casual: {
    "Digitizing": {
      "Waste Reduction": ["Prevents repeat buys"],
      "Style Better": ["Reveals color palettes", "Enables cross-matching"],
      "Shop Smarter": ["Store compatibility"],
      "Organization": ["Searchable inventory"],
    },
    "AI Stylist": {
      "Waste Reduction": ["Rescues deadstock"],
      "Style Better": ["Professional pairings", "Bold combo experiments", "Doubles perceived closet"],
      "Shop Smarter": ["Links to wishlists"],
      "Organization": ["Groups by 'Mood'", "Weather-based sorting"],
    },
    "Planner": {
      "Waste Reduction": ["Social event panic-buys"],
      "Style Better": ["Thoughtful curation"],
      "Shop Smarter": [],
      "Organization": [],
    },
    "Stats (CPW)": {
      "Waste Reduction": [],
      "Style Better": [],
      "Shop Smarter": [],
      "Organization": [],
    },
  },
  power: {
    "Digitizing": {
      "Waste Reduction": ["Extends garment life", "Identifies unused items", "Discourages throw-away"],
      "Style Better": ["Visualizes capsules", "Eliminates closet blindness"],
      "Shop Smarter": ["Verifies item gaps", "In-hand reference"],
      "Organization": ["Centralizes boxes", "Indexes rotations", "Tracks laundry/repair"],
    },
    "AI Stylist": {
      "Waste Reduction": ["Promotes restyling", "Slows replacement cycle"],
      "Style Better": ["Identifies missing basics", "Prevents non-stylable buys"],
      "Shop Smarter": [],
      "Organization": ["Silhouette clustering", "Auto-tagging flow"],
    },
    "Planner": {
      "Waste Reduction": ["Travel rouse maximization", "Shopping avoidance", "Rotational wear checks"],
      "Style Better": ["Situational styling", "Consistent branding"],
      "Shop Smarter": ["Pinpoints outfit gaps", "Informs planned trips", "Tracks event spending", "Versatility checks"],
      "Organization": ["Physical storage map", "Laundry cycle mgt", "Seasonal pack-away", "Packing list automation"],
    },
    "Stats (CPW)": {
      "Waste Reduction": ["Shames fast-fashion", "Highlights low-utility", "Usage-rotation rewards", "Eco-progress metrics"],
      "Style Better": ["Most-worn signature", "Aesthetic validation", "Friction identification", "Silhouette frequency"],
      "Shop Smarter": ["Investment ROI proof", "Budget allocation info", "Impulse death-math"],
      "Organization": ["Utilization rates", "Shelf-space hierarchy", "Clear-out automation"],
    },
  },
};

type ViewType = "master" | "casual" | "power";

export default function PromiseBehaviorMatrix() {
  const [view, setView] = useState<ViewType>("master");

  const currentData = matrixData[view];
  const isItemEmpty = (items: string[]) => items.length === 0;

  return (
    <section id="matrix" className="py-10 bg-white scroll-mt-20">
      <div className="container-standard">
        <SectionHeader
          number="06"
          title="Feature Impact Map"
          subtitle="How every action supports Whering's core promises"
        />

        <motion.p {...fadeInUp} className="narrative-body mb-8 max-w-3xl">
          The core insight: Whering's promise (dress better, reduce waste, shop smarter, organize)
          needs to be backed by clear, layered actions. This map shows how every action strengthens multiple pillars,
          then reveals how everyday users and power enthusiasts experience different depths of the same system.
        </motion.p>

        {/* View Toggle */}
        <motion.div
          {...fadeInUp}
          className="flex gap-3 mb-10"
        >
          {(["master", "casual", "power"] as ViewType[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                view === v
                  ? "bg-primary text-white"
                  : "bg-surface border border-black/5 text-primary hover:border-primary/20"
              }`}
            >
              {v === "master" ? "Full Feature Set" : v === "casual" ? "Casual User" : "Power User"}
            </button>
          ))}
        </motion.div>

        {/* Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-black/5"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5 border-b border-primary/10">
                <th className="px-6 py-5 text-left font-bold text-primary uppercase tracking-widest text-[10px] border-r border-primary/10">
                  Action
                </th>
                {matrixData.pillars.map((pillar) => (
                  <th
                    key={pillar}
                    className="px-6 py-5 text-left font-bold text-primary uppercase tracking-widest text-[10px] border-l border-primary/10"
                  >
                    {pillar}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrixData.features.map((feature, idx) => (
                <tr key={feature} className={idx > 0 ? "border-t border-black/5" : ""}>
                  <td className="px-6 py-5 font-bold text-primary bg-white sticky left-0 z-10 whitespace-nowrap">
                    {feature}
                  </td>
                  {matrixData.pillars.map((pillar) => {
                    const items = currentData[feature as keyof typeof currentData][pillar as keyof typeof currentData["Digitizing"]];
                    const isEmpty = isItemEmpty(items);
                    return (
                      <td
                        key={`${feature}-${pillar}`}
                        className={`px-6 py-5 border-l border-black/5 ${
                          isEmpty ? "bg-gray-50" : ""
                        }`}
                      >
                        {isEmpty ? (
                          <span className="text-black/20">—</span>
                        ) : (
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li
                                key={item}
                                className="text-[13px] text-[#5F5A5D] leading-relaxed flex gap-2"
                              >
                                <span className="text-black/20 shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* View Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl bg-plum/5 border border-plum/10 p-6"
        >
          {view === "master" && (
            <p className="text-sm text-[#5F5A5D]">
              <span className="font-bold text-primary">Full Feature Set:</span> Every action Whering offers, mapped
              against its core promises. This is the complete capability landscape. Notice how each action strengthens multiple pillars—that's
              intentional product coherence.
            </p>
          )}
          {view === "casual" && (
            <p className="text-sm text-[#5F5A5D]">
              <span className="font-bold text-primary">Casual User:</span> First-time and daily users see the essentials.
              Photo your clothes, get outfit ideas, and plan your week. Advanced tools exist, but stay deeper in the product.
            </p>
          )}
          {view === "power" && (
            <p className="text-sm text-[#5F5A5D]">
              <span className="font-bold text-primary">Power User:</span> Users committed to Whering as their wardrobe system
              unlock full depth: detailed analytics, advanced tagging, seasonal management, and investment tracking.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
