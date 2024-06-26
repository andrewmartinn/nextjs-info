import { Project } from "@/libs/definitions";
import ProjectCard from "../project-card/ProjectCard";
import styles from "./project-grid.module.css";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectGrid;
