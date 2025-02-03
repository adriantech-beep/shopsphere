import Navigation from "../components/Navigation";
// import Products from "../src/components/Products";
// import CategoryPages from "../src/components/CategoryPages";
import styles from "./Deals.module.css";

function Deals() {
  return (
    <>
      <div className={styles.dealsWrapper}>
        <Navigation />
      </div>
      <h1 className={styles.dealsTitle}>
        <h1>Get 5% cashback</h1>
        <p>on Shopsphere.com</p>
      </h1>
      {/* <CategoryPages /> */}
      {/* <Products /> */}
    </>
  );
}

export default Deals;
