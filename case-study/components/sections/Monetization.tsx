"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const impactAreas = [
  {
    title: "Activation",
    body: "A clearer first screen gives new users fewer decisions before they understand what Whering is for.",
  },
  {
    title: "Retention",
    body: "Collections and wardrobe context give users a reason to return after the first discovery session.",
  },
  {
    title: "Creator Discovery",
    body: "Creator -> outfit -> item paths make people easier to follow through taste, not just profile metadata.",
  },
  {
    title: "Shopping Intent",
    body: "Item-level actions make inspiration more actionable because users can save, compare, and style individual pieces.",
  },
];

export default function Monetization() {
  return (
    <section id="monetization" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader number="13" title="Business Impact" subtitle="Why this product structure matters" />

        <motion.p
          {...fadeInUp}
          className="text-base font-medium text-[#5C5C5C] leading-[27.2px] mb-8 max-w-2xl"
        >
          This redesign is not just a cleanup exercise. A stronger loop can help Whering turn
          inspiration into repeated behavior: browse, save, organize, style, and return.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <ul className="space-y-4">
            {impactAreas.map((area) => (
              <li key={area.title} className="flex gap-4 items-start">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <span className="font-semibold text-primary">{area.title} — </span>
                  <span className="card-body text-primary/75">{area.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-primary text-white p-8 md:p-10"
        >
          <p className="card-microlabel !text-white/50 mb-4">Core Business Hypothesis</p>
          <h3 className="narrative-para-heading !text-white mb-4">
            If discovery becomes reusable, it can support more than engagement.
          </h3>
          <p className="narrative-body !text-white/70 max-w-3xl">
            It can feed wardrobe digitization, creator following, outfit creation, item saving,
            shopping decisions, and long-term organization. That is the loop the redesign is built
            around.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
