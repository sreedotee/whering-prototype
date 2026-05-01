"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const strengths = [
  "Sustainability feels personal.",
  "Wardrobe planning feels creative.",
  "It solves the 'full closet, nothing to wear' problem.",
];

const focusAreas = [
  {
    title: "Clearer feature hierarchy",
    desc: "Reduce competing actions so each screen has one job.",
  },
  {
    title: "Cleaner object model",
    desc: "Treat saved concepts as one Collection model.",
  },
  {
    title: "Canvas-first creation loop",
    desc: "Put the canvas at the center of remixing.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader number="01" title="Overview" doubleGap={true} />

        <div className="space-y-8">
          <motion.div {...fadeInUp}>
            <h3 className="narrative-para-heading">Why Whering Works</h3>
            <p className="narrative-body mb-5 max-w-3xl">
              Whering helps people fall back in love with what they already own. It feels
              sustainable, playful, nostalgic, and personal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {strengths.map((item) => (
                <div key={item} className="rounded-2xl bg-surface border border-black/5 p-5">
                  <p className="card-body !text-primary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="narrative-para-heading">Where I Focused</h3>
            <p className="narrative-body max-w-3xl">
              The idea is strong. I focused on where the promise gets lost: crowded IA, competing
              actions, duplicate saved objects, and a loop that doesn&apos;t always lead to action.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="narrative-para-heading">The Redesign Hypothesis</h3>
            <p className="narrative-body mb-4">
              Whering&apos;s next leap is making inspiration reusable: discover, remix, save, and
              plan.
            </p>
            <p className="narrative-body-bold mb-5">
              creator -&gt; outfit -&gt; item -&gt; canvas -&gt; collection -&gt; calendar
            </p>
            <ul className="space-y-4">
              {focusAreas.map((item) => (
                <li key={item.title} className="narrative-body flex gap-3">
                  <span className="text-plum/30 font-bold shrink-0">-</span>
                  <p>
                    <span className="narrative-body-bold !text-primary">{item.title}</span>
                    <span className="mx-2 text-plum/30">-</span>
                    <span className="opacity-80">{item.desc}</span>
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
