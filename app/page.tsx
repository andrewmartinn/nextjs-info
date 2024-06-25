import Image from "next/image";
import styles from "./home.module.css";
import HeroSection from "@/components/home/hero/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}
