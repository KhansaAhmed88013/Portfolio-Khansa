import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../pages/Skills.css";

const SKILLS = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  /*{
    name: "OpenCV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
  },*/
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["Python", "C++", "C#", "Java"] },
    { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Databases and Tools", items: ["MySQL", "MongoDB", "Git"] },
    {
  title: "DevOps & Cloud",
  items: ["Docker", "CI/CD", "Linux", "Vercel", "Nginx"]
}],
  [
    { title: "Frameworks and Libraries", items: ["TensorFlow", "PyTorch"] },
  
    {
      title: "Core Concepts",
      items: [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Deep Learning",
        "AI",
      ],
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
    },
  ],
];

export default function SkillsSection() {
  const stageRef = useRef();
  const floatAnimationsRef = useRef(new WeakMap());

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const layoutCircles = () => {
      const circles = Array.from(stage.querySelectorAll(".skill-circle"));
      const rect = stage.getBoundingClientRect();
      const placed = [];

      const isOverlapping = (x, y, size, gap) =>
        placed.some((p) => {
          const dx = p.x - x;
          const dy = p.y - y;
          return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + gap;
        });

      circles.forEach((circle) => {
        const existing = floatAnimationsRef.current.get(circle);
        if (existing) {
          existing.cancel();
        }

        const size = circle.offsetWidth;
        const isSmallScreen = window.innerWidth <= 640;
        const gap = isSmallScreen ? 16 : 32;
        let x;
        let y;
        let tries = 0;
        do {
          x = Math.random() * Math.max(1, rect.width - size - 12);
          y = Math.random() * Math.max(1, rect.height - size - 12);
          tries += 1;
        } while (isOverlapping(x, y, size, gap) && tries < 150);

        placed.push({ x, y, size });
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        const travel = isSmallScreen ? 40 : 80;
        const dx = (Math.random() - 0.5) * travel;
        const dy = (Math.random() - 0.5) * travel;
        const floatAnimation = circle.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${dx}px, ${dy}px)` },
          ],
          {
            duration: 5000 + Math.random() * 2000,
            direction: "alternate",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        );
        floatAnimationsRef.current.set(circle, floatAnimation);
      });
    };

    layoutCircles();
    window.addEventListener("resize", layoutCircles);

    return () => {
      window.removeEventListener("resize", layoutCircles);
      const circles = Array.from(stage.querySelectorAll(".skill-circle"));
      circles.forEach((circle) => {
        const existing = floatAnimationsRef.current.get(circle);
        if (existing) {
          existing.cancel();
        }
      });
    };
  }, []);

  return (
    <section className="skills-container" id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-divider"></div>
        <p className="skills-subtitle">
          Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      <motion.div
        className="skills-stage relative mx-auto mb-20"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "100%",
          background: "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
          boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
        }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
              background: "rgba(0,255,255,0.12)",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              whileHover={{
                filter: "drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.6)",
                rotate: [0, 6, -6, 0],
                transition: { duration: 0.5 },
              }}
            />
            <span>
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: (rowIndex + colIndex) * 0.1,
                }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item) => (
                    <motion.li key={item} whileHover={{ x: 4, color: "#00ffc8" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
