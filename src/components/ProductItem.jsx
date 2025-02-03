import PropTypes from "prop-types";
import styles from "./ProductItem.module.css";
import { useProducts } from "../contexts/ProductsContext";

function ProductItem({ product }) {
  const { handleSelectItem } = useProducts();
  return (
    <li
      className={styles.productList}
      onClick={() => handleSelectItem(product)}
    >
      <div className={styles.productImage}>
        {product.image ? (
          <img src={product.image} alt={product.model} />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.titleAndPrice}>
          <h1>{product.model || "No model available"}</h1>
          <h3>{product.price ? `$${product.price}` : "No price available"}</h3>
        </div>
        <div className={styles.discount}>
          {product.discount && <p>discount ${product.discount}</p>}
        </div>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
