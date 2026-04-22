"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const modes = [
  {
    title: "PROMISE",
    subtitle: "Promise to Behavior",
    implication: "Design decisions start from product value, not isolated screens.",
    imageBg: "#E6F6FF",
    accentColor: "#00AAFF",
  },
  {
    title: "HIERARCHY",
    subtitle: "Casual vs Power User",
    implication: "Universal behaviors become tabs; advanced workflows move deeper.",
    imageBg: "#F3EEFF",
    accentColor: "#9966FF",
  },
  {
    title: "LOOP",
    subtitle: "Discovery to Wardrobe Action",
    implication: "Inspiration becomes reusable product behavior instead of a static feed.",
    imageBg: "#F5FFB3",
    accentColor: "#889900",
  },
];

export default function ThreeModes() {
  return (
    <section id="framework" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader number="06" title="Redesign Framework" />

        <motion.p {...fadeInUp} className="narrative-body mb-8 max-w-2xl">
          The redesign moved through three layers: product promise, navigation hierarchy, and reusable discovery loops.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-clip flex flex-col bg-black/5"
            >
              <div
                className="h-20 w-full flex items-center px-6"
                style={{ backgroundColor: mode.imageBg }}
              >
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: mode.accentColor }}
                >
                  {mode.title}
                </span>
              </div>

              <div className="p-6 flex flex-col items-start text-left flex-1 gap-4">
                <h3 className="card-heading">{mode.subtitle}</h3>
                <p className="card-body flex-1">{mode.implication}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
