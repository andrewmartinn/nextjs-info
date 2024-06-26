import ProjectGrid from "@/components/projects/project-grid/ProjectGrid";
import styles from "./projects.module.css";
import { Project } from "@/libs/definitions";

const getData = async (): Promise<Project[]> => {
  const response = await fetch("http://localhost:5000/projects");
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }
  const data = response.json();
  return data;
};

const Projects = async () => {
  const projects: Project[] = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  );
};
export default Projects;
