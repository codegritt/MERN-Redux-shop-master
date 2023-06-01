/* eslint-disable import/no-anonymous-default-export */

import React, { Component } from "react";
import {
  removeItem,
  addProductQuantity,
  subtractProductQuantity,
} from "../../components/actions/cartActions";
import { connect } from "react-redux";
import ProdNotedescd from "./SingleProductDetails.module.css";

export class SingleProductDetails extends Component {
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
            {/* <div className={Product_descqq.product_descqq}> */}
            <ul className="collection-item avatar" key={item.id}>
              <p style={{ color: "gray", fontSize: "20px" }}>Description</p>
              <hr></hr>
              <p className={ProdNotedescd.prodnotedescd}>{item.desc}</p>
              <p style={{ color: "gray", fontSize: "20px" }}>
                Terms & Conditions
              </p>
              <hr></hr>
              <p className={ProdNotedescd.prodnotedescd}>
                The images represent actual product though color of the image
                and product may slightly differ. Snapdeal does not select, edit,
                modify, alter, add or supplement the information, description
                and other specifications provided by the Seller.
              </p>
            </ul>

            {/* </div> */}
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
        <div style={{ padding: "50px", position: "relative", bottom: "40px" }}>
          {addedItems}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductDetails);
