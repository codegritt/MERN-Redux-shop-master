/* eslint-disable import/no-anonymous-default-export */

import React, { Component } from "react";
import {
  removeItem,
  addProductQuantity,
  subtractProductQuantity,
} from "../../components/actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductItemimgimg from "./SingleProductPage.module.css";
import Product_desc from "./SingleProductPage.module.css";
import Prod_image from "./SingleProductPage.module.css";
import ProdNotetitle from "./SingleProductPage.module.css";
import ProdNotedesc from "./SingleProductPage.module.css";
import ProdNoteprize from "./SingleProductPage.module.css";
import ProdNotequan from "./SingleProductPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import Rating from "./Rating";
import Footer__body from "../Home.module.css";
import Footer1 from "../Footer1";
import Footer2 from "../Footer2";
import Footer3 from "../Footer3";
import Footer4 from "../Footer4";
import SizeModal from "./SizeModal";
import SingleProductDetails from "./SingleProductDetails";

const showToastMessage = () => {
  toast.success("Item added !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export class SingleProductPage extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleProductAddQuantity = (id) => {
    this.props.addProductQuantity(id);
  };
  //to substruct from the quantity
  handleProductSubtractQuantity = (id) => {
    this.props.subtractProductQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <>
            {" "}
            <li className="collection-item avatar" key={item.id}>
              <div className={Prod_image.prod_image}>
                <img
                  style={{ width: "420px" }}
                  className={ProductItemimgimg.productitemimgimg}
                  src={item.img}
                  alt={item.img}
                />
              </div>

              <div className={Product_desc.product_desc}>
                <span className={ProdNotetitle.prodnotetitle}>
                  {item.title}
                </span>

                <h6 style={{ position: "absolute", left: "0px", top: "25px" }}>
                  <Rating />
                </h6>
                <p>
                  <b className={ProdNoteprize.prodnoteprize}>
                    Price: {item.price}$
                  </b>
                </p>
                <p className={ProdNotedesc.prodnotedesc}>{item.desc}</p>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src="https://i.pinimg.com/736x/09/51/c2/0951c247dcd42d66662a622ab5451f19.jpg"
                      alt=""
                    />
                    <p style={{ color: "gray", fontSize: "10px" }}>
                      COD available
                    </p>
                  </div>
                  <div>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src="https://previews.123rf.com/images/arcady31/arcady311510/arcady31151000035/46535025-30-days-money-back-guarantee-icon.jpg"
                      alt=""
                    />
                    <p style={{ color: "gray", fontSize: "10px" }}>
                      30 days replcament
                    </p>
                  </div>

                  <div>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src="https://cdn3.vectorstock.com/i/1000x1000/33/92/successful-delivery-icon-outline-style-vector-22283392.jpg"
                      alt=""
                    />
                    <p style={{ color: "gray", fontSize: "10px" }}>
                      Snap delivered
                    </p>
                  </div>
                  <div>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src="https://previews.123rf.com/images/arcady31/arcady311503/arcady31150300014/37426795-satisfaction-guarantee-icon.jpg"
                      alt=""
                    />
                    <p style={{ color: "gray", fontSize: "10px" }}>
                      1year guarantee
                    </p>
                  </div>
                </div>
                <p>
                  <b className={ProdNotequan.prodnotequan}>
                    Quantity: {item.quantity}
                  </b>
                </p>
                <div className="add-remove">
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleProductAddQuantity(item.id);
                      }}
                    >
                      arrow_drop_up
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleProductSubtractQuantity(item.id);
                      }}
                    >
                      arrow_drop_down
                    </i>
                  </Link>
                </div>

                <div style={{ display: "flex" }}>
                  <Link to="/cart">
                    <button
                      style={{
                        position: "relative",
                        bottom: "35px",
                        height: "30px",
                        fontSize: "12px",
                        backgroundColor: "#3f3f3f",
                      }}
                      onClick={showToastMessage}
                      className="waves-effect waves-light btn remove"
                    >
                      ADD TO CART
                    </button>
                    <ToastContainer />
                  </Link>

                  <button
                    style={{
                      fontSize: "12px",
                      height: "20px",
                      paddingBottom: "30px",
                      left: "30px",
                      position: "relative",
                      bottom: "33px",
                    }}
                    className="waves-effect waves-light btn pink remove"
                    onClick={() => {
                      this.handleRemove(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
                <SizeModal />
                <div
                  style={{
                    display: "flex",
                    position: "relative",
                    bottom: "30px",
                  }}
                >
                  <span style={{ color: "gray" }}>Delivery</span>
                  <input
                    style={{
                      border: "1px solid lightgray",
                      height: "25px",
                      fontSize: "14px",
                      position: "relative",
                      top: "0px",
                      marginLeft: "30px",
                      paddingLeft: "10px",
                      width: "20px",
                      borderRadius: "3px",
                    }}
                    className="form-control"
                    placeholder="Enter Pincode"
                  />
                  <button
                    style={{
                      position: "relative",
                      height: "25px",
                      fontSize: "11px",
                      backgroundColor: "#3f3f3f",
                      paddingBottom: "27px",
                    }}
                    className="waves-effect waves-light btn remove"
                  >
                    CHECK
                  </button>
                </div>
              </div>
            </li>
          </>
        );
      })
    ) : (
      <p
        style={{
          padding: "20px",
          marginLeft: "20px",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Nothing to show!
      </p>
    );

    return (
      <>
        <ul
          style={{
            width: "105%",
            height: "470px",
            margin: "10px",
            float: "right",
          }}
          className="collection"
        >
          {addedItems}
        </ul>

        <div style={{ position: "relative", top: "1000px" }}>
          {/* <div
            style={{ height: "1200px" }}
            className={SizeModallchart.sizemodallchart}
          > */}
          <div
            style={{ position: "relative", bottom: "900px", padding: "50px" }}
          >
            <SingleProductDetails />
          </div>
          {/* </div> */}
          <div style={{ position: "relative", top: "1000px" }}>
            <div className={Footer__body.footer__body}>
              <Footer1 />
              <Footer4 />
              <Footer2 />
              <Footer3 />
            </div>
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
    addNoteQuantity: (id) => {
      dispatch(addProductQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractProductQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);
