
import React from "react";
import { motion } from "framer-motion";
import "../CSS/Experience.css";

const EXPERIENCES = [
  {
    role: "Computer Vision Engineer",
    organization: "Public Sector Organization · Pakistan",
    period: "August 2026 – Present",
    type: "Professional Experience",
    description:
      "Working on computer vision and AI-related projects, focusing on model development and practical engineering applications.",
    tags: ["Computer Vision", "Deep Learning", "AI/ML"],
    current: true,
  },
  {
    role: "Software Engineering Intern",
    organization: "HAILZ",
    period: "June 2026 – July 2026",
    type: "Professional Experience",
    description:
      "Worked on an AI-based document verification system for driver onboarding, integrating document processing and information extraction with the application backend.",
    tags: [
      "AI Integration",
      "Document Verification",
      "Flutter",
      "Backend"
    ],
    current: false,
  },
  {
    role: "Code in Place Section Leader",
    organization: "Stanford University · Code in Place",
    period: "April 2026 – May 2026",
    type: "Teaching & Mentorship",
    description:
      "Mentored international students in Python, helping them understand programming concepts, complete coding exercises, and strengthen their problem-solving skills.",
    tags: ["Python", "Teaching", "Mentorship"],
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="experience-title">Experience</h2>
        <div className="experience-divider" />
        <p className="experience-subtitle">
          Professional work, teaching &amp; mentorship
        </p>
      </motion.div>

      <div className="experience-timeline">
        {EXPERIENCES.map((item, index) => (
          <motion.article
            className="experience-item"
            key={item.role}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.15 }}
          >
            <span className="experience-dot" />

            <div className="experience-content">
              <div className="experience-role-row">
                <h3 className="experience-role">{item.role}</h3>

                {item.current && (
                  <span className="experience-current">CURRENT</span>
                )}
              </div>

              <h4 className="experience-organization">
                {item.organization}
              </h4>

              <p className="experience-meta">
                {item.type} · {item.period}
              </p>

              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-tags">
                {item.tags.map((tag) => (
                  <span className="experience-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
