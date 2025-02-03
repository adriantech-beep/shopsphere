import { useContext, useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const ProductsContext = createContext();
const Base_URL = "https://fakestoreapi.in/api/products?limit=150";

function ProductsProvider({ children }) {
  /*i needed to destructure the products because
   the data is returning an object instead*/
  const [{ products }, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);
  // const [viewError, setViewError] = useState(false);

  const [selectedItem, setSelectedItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openViewCart, setOpenViewCart] = useState(false);
  const [isAddedtoCart, setIsAddedtoCart] = useState(false);
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);

  const [shippingAmount, setShippingAmount] = useState(0);
  const [totalCheckoutAmount, setTotalCheckoutAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        /*this is to prevent white display on top of the 
        page when scrolling down and up.
        i dont know if this is a good practice.but it works.
        and also it is good for performance i think.
        */
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(Base_URL);
        const data = await res.json();
        setProducts(data);
        setSortedProducts(data);
      } catch (error) {
        setError(error.message);
        // setViewError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  useEffect(() => {
    if (selectedItem) {
      console.log("Selected item changed:", selectedItem);
    }
  }, [selectedItem]);

  const updateCart = (
    productId,
    quantity,
    brand,
    price,
    image,
    color,
    discount,
    model
  ) => {
    const existingItem = cartItems.find((item) => item.productId === productId);
    if (existingItem) {
      setIsAlreadyAdded(true);
      setIsAddedtoCart(false);
    }

    if (!existingItem) {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          productId,
          quantity,
          brand,
          image,
          price,
          color,
          discount,
          model,
          discountedPrice: price - discount,
        },
      ]);

      setCartQuantity((prevQuantity) => prevQuantity + quantity);
      setIsAddedtoCart(true);
    }
  };

  //used a useEffect hook because setting it up inside the updateCart function
  //makes the total price not updating
  useEffect(() => {
    const calculateTotalAmount = () => {
      const totalAmount = Object.values(cartItems).reduce((acc, item) => {
        const discount = item.discount ?? 0;
        return acc + Number(item.price) - Number(discount);
      }, 0);
      setTotalAmount(Number(totalAmount));
    };
    calculateTotalAmount();
  }, [cartItems]);

  useEffect(() => {
    const calculateShippingAmount = () => {
      const shippingAmount = totalAmount * 0.02;
      setShippingAmount(shippingAmount);
    };
    calculateShippingAmount();
  }, [totalAmount]);

  useEffect(() => {
    const calculateTotalCheckoutAmount = () => {
      const checkOutAmount = totalAmount + shippingAmount;
      setTotalCheckoutAmount(checkOutAmount);
    };
    calculateTotalCheckoutAmount();
  }, [totalAmount, shippingAmount]);

  const sortByCategory = (category) => {
    if (category === "all") {
      setSortedProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setSortedProducts(filtered);
    }
  };

  function handleSelectItem(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
    setIsAddedtoCart(false);
    setIsAlreadyAdded(false);
  }

  function handleCloseCart() {
    setOpenViewCart(false);
  }
  function handleViewCart() {
    setOpenViewCart(true);
  }

  function handleRemoveItem(productId) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.productId !== productId);
    });
    setCartQuantity((prevQuantity) => {
      const removedItem = cartItems.find(
        (item) => item.productId === productId
      );
      return prevQuantity - removedItem.quantity;
    });
  }
  return (
    <ProductsContext.Provider
      value={{
        allProducts: products,
        products: sortedProducts,
        isLoading,
        error,
        cartItems,
        cartQuantity,
        updateCart,
        sortByCategory,
        selectedItem,
        handleSelectItem,
        isOpen,
        setIsOpen,
        handleClose,
        isExpanded,
        setIsExpanded,
        openViewCart,
        handleViewCart,
        handleCloseCart,
        totalAmount,
        handleRemoveItem,
        isAddedtoCart,
        isAlreadyAdded,
        shippingAmount,
        totalCheckoutAmount,
      }}
    >
      {error && <div>Error: {error}</div>}
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("Products context was used outside the Products Provider");
  return context;
}

export { ProductsProvider, useProducts };
