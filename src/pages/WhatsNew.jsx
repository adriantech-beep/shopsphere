import Navigation from "../components/Navigation";
import styles from "./WhatsNew.module.css";
// import Products from "../src/components/Products";
// import CategoryPages from "../src/components/CategoryPages";

function WhatsNew() {
  return (
    <>
      <div className={styles.whatsnewWrapper}>
        <Navigation />
        <div className={styles.whatsnewTitle}>
          <h1>Get 5% CashBack On $200</h1>
          <p>
            Shopping is a bit relaxing for me.Which is sometimes troubling for
            the bank balancs
          </p>
        </div>
      </div>
      {/* <CategoryPages /> */}
      {/* <Products /> */}
    </>
  );
}

export default WhatsNew;
