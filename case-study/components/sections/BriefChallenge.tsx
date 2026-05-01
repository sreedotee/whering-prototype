"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

export default function BriefChallenge() {
  return (
    <section id="brief" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader number="02" title="The Challenge" />

        <motion.div {...fadeInUp} className="mb-8 max-w-3xl">
          <p className="text-base font-medium text-[#5C5C5C] leading-[27.2px]">
            The starting point was simple: <em>"What does Whering do?"</em>
          </p>
          <p className="text-base font-medium text-[#5C5C5C] leading-[27.2px] mt-4">
            The mission is sharp, but the product didn&apos;t make it easy to answer.{" "}
            <strong className="text-[#0A0A0A]">
              The problem was structural: a strong promise buried under competing actions.
            </strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "The Observation",
              content: "Nine actions compete on the first screen. No clear entry point. No obvious loop.",
              highlight: false,
            },
            {
              title: "My Approach",
              content: "Map the promise to behavior, split casual vs power-user needs, and redesign around five destinations.",
              highlight: true,
            },
            {
              title: "The Outcome",
              content: "Each tab gets a clear purpose, and the core loop is easier to reach.",
              highlight: false,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-clip py-6 px-8 ${
                card.highlight ? "bg-primary text-white" : ""
              }`}
              style={card.highlight ? {} : { backgroundColor: "#00000008" }}
            >
              <h3
                className={`heading mb-4 ${
                  card.highlight ? "text-white" : "text-[#0A0A0A]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  card.highlight ? "text-white/70" : "text-[#5C5C5C]"
                }`}
              >
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
