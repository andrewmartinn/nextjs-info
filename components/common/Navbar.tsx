import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link href="/">
        <h2 className={styles.logo}>AM.</h2>
      </Link>
      <div className={styles.linkContainer}>
        <Link href="/about" className={styles.navCta}>
          About
        </Link>
        <Link href="/projects" className={styles.navCta}>
          Projects
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
