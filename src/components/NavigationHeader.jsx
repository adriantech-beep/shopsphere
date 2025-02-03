import styles from "./NavigationHeader.module.css";

function NavigationHeader() {
  return (
    <div className={styles.navHeader}>
      <p>+0012345678</p>
      <div className={styles.navHeaderTitle}>
        <p>Get 50% Off on SElected Items |</p>
        <p>Shop Now</p>
      </div>
      <div>
        <select>
          <option>Eng</option>
          <option>Tagalog</option>
        </select>
        <select>
          <option>Location</option>
          <option>Philippines</option>
        </select>
      </div>
    </div>
  );
}

export default NavigationHeader;
