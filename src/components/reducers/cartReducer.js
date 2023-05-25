import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import Item7 from "../../images/item7.jpg";
import Item8 from "../../images/item8.jpg";
import Item9 from "../../images/item9.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc: "Exquisite suede sneakers capable of increasing your game",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "Adidas",
      desc: "Rock these sporty adidas sneakers to up your game",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Vans",
      desc: "If you are willing to go full classic, Vans are your mate",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "White",
      desc: "This item imitates Balanciaga!",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc: "This item brings class and elegance together",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "Blues",
      desc: "The one and only Kanye's best choice!",
      price: 90,
      img: Item6,
    },
    {
      id: "price_1NBFs3SB5pYQ7COX2suTMIZr",
      title: "Coffee",
      desc: "The one and only best coffe in the world!",
      price: 4.99,
      img: Item7,
    },
    {
      id: "price_1NBFtCSB5pYQ7COXVbBSGbJn",
      title: "Sunglasses",
      desc: "Makes you look like 007!",
      price: 9.99,
      img: Item8,
    },
    {
      id: "price_1NBFu3SB5pYQ7COXuup72aKT",
      title: "Camera",
      desc: "You are the next Roger Deakins!",
      price: 39.99,
      img: Item9,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;

function getcartReducerData(id) {
  let cartReducerData = initState.find(
    (cartReducerproduct) => cartReducerproduct.id === id
  );

  if (cartReducerData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return cartReducerData;
}

export { initState, getcartReducerData };
