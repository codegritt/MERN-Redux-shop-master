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
