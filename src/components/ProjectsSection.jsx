
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Youtube } from "lucide-react";

const PROJECTS = [
  {
  title: "SmartAI Factory – AI-Powered Machine Monitoring System",
  desc: "AI-powered industrial machine monitoring system combining IoT sensor data, time-series forecasting, and an interactive dashboard to support predictive maintenance. Built with ESP32, React, Node.js, MongoDB, Python, FastAPI, and PyTorch.",
  ss: "/smart-ai-factory.png",
  tech: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "FastAPI",
    "PyTorch",
    "ESP32",
    "IoT",
  ],
  live: "https://smart-ai-frontend.vercel.app/login",
  code: "https://github.com/KhansaAhmed88013/SmartAI-Backend",
  youtube: "https://youtu.be/aYHcdaFQDWI",
},
  {
    title: "SpecifyAI – AI Requirement Analysis Platform",
    desc: "AI-powered web application that transforms project ideas into structured technical specifications. Features authentication, project management, and automated requirement analysis.",
    ss: "/specifyai.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Nginx", "PM2", "CI/CD"],
    youtube: "https://youtu.be/YB5HyQ9pkOQ?si=BCoNX1T2GzadE7AY", // Add SpecifyAI YouTube video URL
    code: "https://github.com/KhansaAhmed88013/SpecifyAI-project",
  },
  {
    title: "AI Merge Risk Advisor",
    desc: "AI-based system that analyzes code changes and predicts their potential impact before merging. Builds dependency graphs and provides risk scores with merge recommendations.",
    ss: "/merge.png",
    tech: ["Python", "FastAPI", "React", "NetworkX", "AI"],
    youtube: "https://youtu.be/-PdpqvVubkQ?si=PpuHvgNdHmJXH9TB", // Add AI Merge Risk Advisor YouTube video URL
    code: "https://gitlab.com/gitlab-ai-hackathon/participants/35349418",
  },
  {
    title: "SmartMart – E-commerce Web App",
    desc: "Full-stack e-commerce application with product management, authentication, and dashboard features. Built with React frontend and Node.js backend.",
    ss: "/smartmart.png",
    tech: ["React", "Redux", "Node.js", "Express", "MySQL", "Sequelize"],
    live: "https://smart-mart-client.vercel.app",
    code: "https://github.com/KhansaAhmed88013/SmartMart-client",
  },
  {
    title: "Store Pulse – Retail Analytics & ETL Platform",
    desc: "End-to-end retail analytics platform that transforms raw Walmart sales data into clean, validated datasets. Features an automated ETL pipeline, PostgreSQL integration through Supabase, SQL-based business analytics, an interactive Streamlit dashboard, and an AI-assisted insights experience.",
    ss: "/store-pulse.png", // Add this image to your public folder
    tech: [
      "Python",
      "Pandas",
      "ETL",
      "PostgreSQL",
      "Supabase",
      "SQLAlchemy",
      "Streamlit",
      "OpenAI API",
    ],
    youtube: "https://youtu.be/VW7KecWJxyg?si=WCzV62zpvjz3rh_o", // Add Store Pulse YouTube video URL
    code: "https://github.com/OpenAI-Hackathon-Team/store-pulse",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      className="container"
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      style={{ padding: "64px 0" }}
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Projects
        </motion.h2>

        <p className="text-gray-400 mb-10">
          A collection of my major works, blending research,
          AI innovation, and data engineering.
        </p>

        <div className="projects-grid" style={{ display: "grid" }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </motion.div>

              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    color: "#0ea5e9",
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "#bbb",
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,255,255,0.05)",
                        border: "1px solid rgba(0,255,255,0.1)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#aaf",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 10,
                    marginTop: "auto",
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,0.05)",
                      color: "#0ea5e9",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      border: "1px solid rgba(0,255,255,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  {p.live && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.05, filter: "brightness(0.9)" }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        background:
                          "linear-gradient(90deg, #06b6d4, #0891b2)",
                        color: "#fff",
                        padding: "6px 12px",
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: "none",
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  )}

                  {p.youtube && (
                    <motion.a
                      href={p.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        background:
                          "linear-gradient(90deg, #f87171, #ef4444)",
                        color: "#fff",
                        padding: "6px 12px",
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: "none",
                      }}
                    >
                      <Youtube size={14} /> Watch Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
