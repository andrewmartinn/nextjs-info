import Image from "next/image";
import styles from "./about.module.css";
import HeroImage from "@/public/assets/hero-img.png";
import { FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiNextdotjs,
  SiReactrouter,
  SiTailwindcss,
  SiReactquery,
  SiTypescript,
  SiMobx,
} from "react-icons/si";
interface Skill {
  id: number;
  name: string;
  icon: React.ComponentType<{ size: string }>;
}

const About = () => {
  const skillsData: Skill[] = [
    {
      id: 1,
      name: "React",
      icon: FaReact,
    },
    {
      id: 2,
      name: "Next",
      icon: SiNextdotjs,
    },
    {
      id: 3,
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      id: 4,
      name: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      id: 5,
      name: "Chakra",
      icon: SiChakraui,
    },
    {
      id: 6,
      name: "MobX",
      icon: SiMobx,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.aboutGrid}>
        <div>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.sectionDescription}>
            As a frontend engineer, I am dedicated to crafting compelling web
            applications and designing dynamic user interfaces that enhance user
            experiences. With a keen eye for detail and a passion for
            technology, I thrive on translating complex ideas into elegant,
            functional solutions.
          </p>
          <hr className={styles.divider} />
          <div>
            <h4 className={styles.sectionSubtitle}>Skills</h4>
            <div className={styles.skillGrid}>
              {skillsData.map((skill) => (
                <div key={skill.id} className={styles.skillItem}>
                  <skill.icon size={"40px"} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={HeroImage} alt="about image" />
        </div>
      </div>
    </div>
  );
};
export default About;
