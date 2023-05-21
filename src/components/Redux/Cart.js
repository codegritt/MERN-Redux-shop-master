import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../actions/cartActions";
import Recipe from "./CartPage";
import Sidebar from "../Sidebar";
import Cartcontainer from "./Cart.module.css";
import Cartcart from "./Cart.module.css";
import Cartcarth from "./Cart.module.css";
import Footer__body from "../Home.module.css";
import FooterImage from "../FooterImage";
import Footer1 from "../Footer1";
import Footer4 from "../Footer4";
import Footer2 from "../Footer2";
import Footer3 from "../Footer3";
import { ToastContainer, toast } from "react-toastify";

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
    toast.success("Item removed !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
              <ToastContainer />
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <>
        <div
          style={{
            backgroundColor: "whitesmoke",
          }}
        >
          <Sidebar />

          <div className={Cartcontainer.cartcontainer}>
            <div className={Cartcart.cartcart}>
              <h5 className={Cartcarth.cartcarth}>You have ordered:</h5>
              <ul style={{ margin: "20px" }} className="collection">
                {addedItems}
              </ul>
            </div>
            <Recipe />
          </div>
        </div>
        <div style={{ position: "relative", top: "400px" }}>
          <div className={Footer__body.footer__body}>
            <FooterImage />
            <Footer1 />
            <Footer4 />
            <Footer2 />
            <Footer3 />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
