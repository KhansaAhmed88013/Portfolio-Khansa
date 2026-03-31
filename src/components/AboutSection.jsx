import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="container" style={{ padding: "64px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "left",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "1.5rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1rem",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I&apos;m <strong>Khansa Ahmed</strong>, a passionate Computer
          Science student at Quaid-i-Azam University, Islamabad with a strong
          interest in <strong>software development</strong> and{" "}
          <strong>emerging technologies</strong> I enjoy building efficient
          backend systems and exploring how modern tools like <strong>cloud computing </strong>
          and <strong>generative AI</strong> are transforming the tech landscape. I’m
          particularly driven by the idea of creating solutions that are both
          practical and impactful.
        </p>

        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
          Beyond coding, I like learning new technologies, improving my development workflow, and experimenting with ideas that enhance user experience. My goal is to grow as a developer while contributing to innovative and meaningful projects
        </p>

        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
          Currently pursuing my degree (2022–2026), I have hands-on experience in Python, Node.js, and backend web development. I’ve also completed certifications in cloud computing, React, Git/GitHub, and generative AI, and I’m actively seeking opportunities to apply my skills in real-world projects and internships.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Bachelor's in information technology
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Quaid-e-Azam University</strong> - Islamabad, Pakistan
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  4th year (Pursuing) | CGPA: 3.8/4.0
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 - 2026</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
