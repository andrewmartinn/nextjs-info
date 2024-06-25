import Image from "next/image";
import styles from "./heroSection.module.css";
import HeroImage from "@/public/assets/hero-img.png";
import Link from "next/link";

interface SocialLinks {
  id: number;
  name: string;
  href: string;
  icon: string;
}

const HeroSection = () => {
  const socialLinksData: SocialLinks[] = [
    {
      id: 1,
      name: "Linkedin",
      href: "https://linkedin.com/in/andrew-martin-80b898253/",
      icon: "/assets/linkedin-logo.svg",
    },
    {
      id: 2,
      name: "Github",
      href: "https://github.com/andrewmartinn",
      icon: "/assets/github-logo.svg",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <Image className={styles.hero} alt="hero image" src={HeroImage} />
      </div>
      <div className={styles.info}>
        <h1>
          Andrew
          <br />
          Martin
        </h1>
        <h2>Frontend Engineer</h2>
        <span className={styles.social}>
          {socialLinksData.map((link) => (
            <Link href="" key={link.id} target="_blank">
              <Image
                src={link.icon}
                alt={link.name}
                width={"100"}
                height={"50"}
                className={styles.icon}
              />
            </Link>
          ))}
        </span>
        <p className={styles.description}>
          Passionate in crafting digital experiences and leveraging design
          concepts into dynamic web applications
        </p>
        <a
          href="/assets/resume.pdf"
          className={styles.cta}
          download="Andrew_Martin_Resume.pdf"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
export default HeroSection;
