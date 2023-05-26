import {
  NOTE_ADD_QUANTITY,
  NOTE_SUB_QUANTITY,
  NOTE_REMOVE_ITEM,
  NOTE_ADD_TO_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "./action-types/cart-actions";
import { useState, createContext } from "react";
import { getcartReducerData } from "../reducers/cartReducer";

export const ReduxCartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeItem: () => {},
  subtractQuantity: () => {},
  addQuantity: () => {},
  addNoteToCart: () => {},
  removeNoteItem: () => {},
  subtractNoteQuantity: () => {},
  addNoteQuantity: () => {},
  getTotalCost: () => {},
});

export function ReduxCartProvider({ children }) {
  const [reduxcartProducts, setreduxCartProducts] = useState([]);

  function getreduxProductQuantity(id) {
    const quantity = reduxcartProducts.find(
      (reduxproduct) => reduxproduct.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addToCart(id) {
    const quantity = getreduxProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setreduxCartProducts([
        ...reduxcartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
      setreduxCartProducts(
        reduxcartProducts.map(
          (reduxproduct) =>
            reduxproduct.id === id // if condition
              ? { ...reduxproduct, quantity: reduxproduct.quantity + 1 } // if statement is true
              : reduxproduct // if statement is false
        )
      );
    }
  }

  function removeItem(id) {
    const quantity = getreduxProductQuantity(id);

    if (quantity === 1) {
      subtractQuantity(id);
    } else {
      setreduxCartProducts(
        reduxcartProducts.map(
          (reduxproduct) =>
            reduxproduct.id === id // if condition
              ? { ...reduxproduct, quantity: reduxproduct.quantity - 1 } // if statement is true
              : reduxproduct // if statement is false
        )
      );
    }
  }

  function subtractQuantity(id) {
    // [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setreduxCartProducts((reduxcartProducts) =>
      reduxcartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    reduxcartProducts.map((cartItem) => {
      const productData = getcartReducerData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const reduxcontextValue = {
    items: reduxcartProducts,
    getreduxProductQuantity,
    addToCart,
    removeItem,
    subtractQuantity,
    addQuantity,
    addNoteToCart,
    removeNoteItem,
    subtractNoteQuantity,
    addNoteQuantity,
    getTotalCost,
  };

  return (
    <ReduxCartContext.Provider value={reduxcontextValue}>
      {children}
    </ReduxCartContext.Provider>
  );
}

export default ReduxCartProvider;

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

//add Notecart action
export const addNoteToCart = (id) => {
  return {
    type: NOTE_ADD_TO_CART,
    id,
  };
};

//remove Noteitem action
export const removeNoteItem = (id) => {
  return {
    type: NOTE_REMOVE_ITEM,
    id,
  };
};

//subtract qt action
export const subtractNoteQuantity = (id) => {
  return {
    type: NOTE_SUB_QUANTITY,
    id,
  };
};

//add Noteqt action
export const addNoteQuantity = (id) => {
  return {
    type: NOTE_ADD_QUANTITY,
    id,
  };
};
