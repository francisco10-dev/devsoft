import React from "react";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaJava,
  FaGithub,
  FaGit,
  FaPlusCircle
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiFastapi, SiTypescript, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Technologies: React.FC = () => {
  const technologies = [
    { name: "React", logo: <FaReact /> },
    { name: "TypeScript", logo: <SiTypescript /> },
    { name: "Java", logo: <FaJava /> },
    { name: "Node.js", logo: <FaNodeJs /> },
    { name: "Python", logo: <FaPython /> },
    { name: "FastApi", logo: <SiFastapi /> },
    { name: "AWS", logo: <FaAws /> },
    { name: "Docker", logo: <FaDocker /> },
    { name: "Flutter", logo: <FaFlutter /> },
    { name: "PostgreSQL", logo: <SiPostgresql /> },
    { name: "Git", logo: <FaGit /> },
    { name: "Github", logo: <FaGithub /> },
    { name: "React Native", logo: <TbBrandReactNative />},
    { name: "Y más...", logo: <FaPlusCircle/>},
  ];

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <h2 className="section-title">Tecnologías que utilizamos</h2>
        <p className="section-subtitle">
          Trabajamos con las herramientas más modernas y confiables del mercado
        </p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-logo">{tech.logo}</div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
