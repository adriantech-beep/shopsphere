import { useProducts } from "../contexts/ProductsContext";
import styles from "./CategoryPages.module.css";
import CategoryTitle from "./CategoryTitle";
function Categories() {
  const { sortByCategory } = useProducts();
  return (
    <>
      <CategoryTitle />
      <div className={styles.categoryPages}>
        <div
          onClick={() => sortByCategory("mobile")}
          className={`${styles.phonesLink} ${styles.link}`}
        >
          <p className={`${styles.categoryTitle} ${styles.phones}`}>Phones</p>
        </div>
        <div
          onClick={() => sortByCategory("laptop")}
          className={`${styles.laptopsLink} ${styles.link}`}
        >
          <p className={`${styles.categoryTitle} ${styles.laptops}`}>Laptops</p>
        </div>
        <div
          onClick={() => sortByCategory("audio")}
          className={`${styles.headsetLink} ${styles.link}`}
        >
          <p className={`${styles.categoryTitle} ${styles.headset}`}>Headset</p>
        </div>
        <div
          onClick={() => sortByCategory("all")}
          className={`${styles.controllerLink} ${styles.link}`}
        >
          <p className={`${styles.categoryTitle} ${styles.controller}`}>All</p>
        </div>
      </div>
    </>
  );
}

export default Categories;
