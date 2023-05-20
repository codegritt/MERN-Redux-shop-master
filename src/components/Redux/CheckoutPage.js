import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbsmain from "./CheckoutPage.module.css";
import Breadcrumbscon from "./CheckoutPage.module.css";
import Summarytax from "./CheckoutPage.module.css";
import Summarytaxx from "./CheckoutPage.module.css";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleChange = (panel) => (event, expanded) => {
    if (expanded) {
      this.setState({ expanded: panel });
    } else {
      this.setState({ expanded: false });
    }
  };

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };
  render() {
    return (
      <div className={Breadcrumbscon.breadcrumbscon}>
        <h6 style={{ fontWeight: "bold" }}>Checkout Page</h6>

        <div>
          <Link to="/">
            <span className={Breadcrumbsmain.breadcrumbsmain}>Home -></span>
          </Link>
          <Link to="/cart">
            <span className={Breadcrumbsmain.breadcrumbsmain}>Cart -></span>
          </Link>
          <Link to="/checkout">
            <span className={Breadcrumbsmain.breadcrumbsmain}>Checkout</span>
          </Link>
        </div>

        <hr></hr>

        <div className={Summarytax.summarytax}>
          <h6 style={{ fontWeight: "bold" }}>Price Summary</h6>
          <hr></hr>
          <div className={Summarytaxx.summarytaxx}>
            <ul style={{ display: "flex" }}>
              <p>Order Subtotal:</p>
              <p style={{ paddingLeft: "200px" }}> {this.props.total}</p>
            </ul>
            <ul style={{ display: "flex" }}>
              <p>Coupons:</p>
              <p style={{ paddingLeft: "238px" }}> 0$</p>
            </ul>
            <ul style={{ display: "flex" }}>
              <p>Promotion:</p>
              <p style={{ paddingLeft: "228px" }}>0$</p>
            </ul>

            <ul style={{ display: "flex" }}>
              <p>Estimated Tax (0%):</p>
              <p style={{ paddingLeft: "174px" }}> 0$</p>
            </ul>

            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <span>Shipping Fee(+6$)</span>
            </label>

            <hr></hr>
            <ul style={{ display: "flex" }}>
              <b>Total: </b>
              <p style={{ paddingLeft: "260px" }}>{this.props.total}$</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
