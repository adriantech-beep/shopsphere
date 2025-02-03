import { useRef } from "react";
import Navigation from "../components/Navigation";
import styles from "./HomePage.module.css";
import CategoryPages from "../components/CategoryPages";
import Products from "../components/Products";
import { useProducts } from "../contexts/ProductsContext";
import Button from "../components/Button";
import OrderSummary from "../components/OrderSummary";
import Article from "../components/Article";
import Footer from "../components/Footer";

const HomePage = () => {
  const { products, openViewCart } = useProducts();
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.homePage}>
        <Navigation />
        <div className={styles.title}>
          <h1>Your One-Stop Electronic Market</h1>
          <p>
            Browse our vast collection of products, discover new favorites and
            enjoy a seamless shopping experience.
          </p>
          <Button onClick={scrollToProducts}>Shop Now</Button>
        </div>
      </div>
      <CategoryPages />
      <div ref={productsRef}>
        <Products products={products} />
      </div>
      {openViewCart && <OrderSummary />}
      <Article />
      <Footer />
    </>
  );
};

export default HomePage;
