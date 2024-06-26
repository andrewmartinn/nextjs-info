import Image from "next/image";
import styles from "./project-card.module.css";
import { FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiNextdotjs,
  SiReactrouter,
  SiTailwindcss,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import { LuLink } from "react-icons/lu";
import Link from "next/link";
import { IconMap, Project } from "@/libs/definitions";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const CardIcons: IconMap = {
    react: FaReact,
    typescript: SiTypescript,
    chakra: SiChakraui,
    json: LuFileJson2,
    next: SiNextdotjs,
    tailwind: SiTailwindcss,
    "react query": SiReactquery,
    "react router": SiReactrouter,
  };
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={project.image}
        height={340}
        width={420}
        alt={project.title}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <div className={styles.cardInfo}>
        <div className={styles.stack}>
          {project.stack.map((item, index) => {
            const IconComponent = CardIcons[item];
            return <div key={index}>{IconComponent && <IconComponent />}</div>;
          })}
        </div>
        <Link href={project.codeLink} className={styles.cta}>
          <LuLink size={"14px"} />
          <p className={styles.ctaText}>Code</p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
