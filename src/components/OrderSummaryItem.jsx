import PropTypes from "prop-types";
import styles from "./OrderSummaryItem.module.css";
import { useProducts } from "../contexts/ProductsContext";

function OrderSummaryItem({ item }) {
  const { handleRemoveItem } = useProducts();
  return (
    <li className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <div className={styles.imageWrapper}>
          <img src={item.image} />
        </div>
        <div className={styles.detailsWrapper}>
          <h1>{item.brand}</h1>
          <p>{item.model}</p>
          <div className={styles.descriptionWrapper}>
            <p>color:{item.color}</p>
            {!item.discount ? "" : <p>discount:${item.discount}</p>}
          </div>
          <div className={styles.priceWrapper}>
            {!item.discount ? (
              <p>${item.price}</p>
            ) : (
              <p>${item.discountedPrice}</p>
            )}
          </div>
        </div>
        <i
          className="fa-solid fa-xmark"
          onClick={() => handleRemoveItem(item.productId)}
        ></i>
      </div>
    </li>
  );
}

OrderSummaryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemoveItem: PropTypes.func,
};

export default OrderSummaryItem;
