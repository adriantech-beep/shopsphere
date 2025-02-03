import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <Logo />

      <p>© 2025 Shopsphere. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
