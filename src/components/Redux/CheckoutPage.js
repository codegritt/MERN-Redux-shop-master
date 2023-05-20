import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbsmain from "./CheckoutPage.module.css";
import Breadcrumbscon from "./CheckoutPage.module.css";

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
        <h6>Checkout Page</h6>

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
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <span>Shipping(+6$)</span>
            </label>
          </li>
          <li className="collection-item">
            <b>Total: {this.props.total} $</b>
          </li>
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
