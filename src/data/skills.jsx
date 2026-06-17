import { FaCloud } from "react-icons/fa";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiLinux,
  SiNginx,
} from "react-icons/si";

export const skills = {
  languages: [
    { name: "Golang", icon: <SiGo color="#00ADD8" size={24} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={24} /> },
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={24} /> },
    { name: "SQL", icon: <SiPostgresql color="#336791" size={24} /> },
    { name: "HTML", icon: <SiHtml5 color="#e34f26" size={24} /> },
    { name: "CSS", icon: <SiCss3 color="#1572b6" size={24} /> },
  ],

  frameworks: [
    { name: "Go Chi", icon: <SiGo color="#00ADD8" size={24} /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" size={24} /> },
    { name: "Express", icon: <SiExpress color="#000000" size={24} /> },
    { name: "React", icon: <SiReact color="#61dafb" size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" size={24} /> },
  ],

  databases: [
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={24} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={24} /> },
    { name: "Valkey", icon: <SiRedis color="#DC382D" size={24} /> },
  ],

  tools: [
    { name: "Git", icon: <SiGit color="#f05032" size={24} /> },
    { name: "GitHub", icon: <SiGithub color="#181717" size={24} /> },
    { name: "Docker", icon: <SiDocker color="#0db7ed" size={24} /> },
    { name: "AWS", icon: <FaCloud color="#ff9900" size={24} /> },
    { name: "Linux", icon: <SiLinux color="#FCC624" size={24} /> },
    { name: "Nginx", icon: <SiNginx color="#009639" size={24} /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" size={24} /> },
  ],
};
