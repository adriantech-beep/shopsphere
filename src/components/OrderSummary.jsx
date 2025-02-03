import { useProducts } from "../contexts/ProductsContext";
import styles from "./OrderSummary.module.css";
import OrderSummaryItem from "./OrderSummaryItem";

function OrderSummary() {
  const {
    cartItems,
    handleCloseCart,
    totalAmount,
    shippingAmount,
    totalCheckoutAmount,
  } = useProducts();

  const hasProducts = Object.keys(cartItems).length > 0;

  return (
    <ul className={`${styles.orderSummaryWrapper} ${styles.show}`}>
      {hasProducts ? (
        Object.values(cartItems).map((item) => (
          <OrderSummaryItem key={item.productId} item={item} />
        ))
      ) : (
        <div className={styles.emptyCartWrapper}>
          <h1>Cart is empty</h1>
          <p>Please add items to your cart</p>
        </div>
      )}
      <p className={styles.closeButton} onClick={handleCloseCart}>
        Close
      </p>
      <div className={styles.priceDetailsWrapper}>
        <div className={styles.priceWrapper}>
          <h5>Subtotal:</h5>
          <p>${totalAmount}</p>
        </div>
        <div className={styles.priceWrapper}>
          <h5>Shipping:</h5>
          <p>${shippingAmount.toFixed(2)}</p>
        </div>
        <div className={styles.priceWrapper}>
          <h5>Total:</h5>
          <p>${totalCheckoutAmount}</p>
        </div>
      </div>
      <button className={styles.checkoutBtn}>Checkout &rarr;</button>
    </ul>
  );
}

export default OrderSummary;
