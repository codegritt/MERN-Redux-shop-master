import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Reduxhome_box from "./ReduxHome.module.css";
import Reduxhome_headtext from "./ReduxHome.module.css";
import Reduxhome_card from "./ReduxHome.module.css";
import Reduxhome_image from "./ReduxHome.module.css";
import Reduxhome_title from "./ReduxHome.module.css";
import Redux_plusicon from "./ReduxHome.module.css";
import Redux_button from "./ReduxHome.module.css";
import { Link } from "react-router-dom";

class ReduxHome extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className={Reduxhome_card.reduxhome_card} key={item.id}>
          <div className={Reduxhome_image.reduxhome_image}>
            <img
              className={Reduxhome_image.reduxhome_image}
              src={item.img}
              alt={item.title}
            />
            <span className={Reduxhome_title.reduxhome_title}>
              {item.title}
            </span>
            <span
              to="/"
              className={Redux_button.redux_button}
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <Link to="/cart">
                <button className={Redux_plusicon.redux_plusicon}>ADD</button>
              </Link>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className={Reduxhome_headtext.reduxhome_headtext}>WISHLIST</h3>
        <div className={Reduxhome_box.reduxhome_box}>{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxHome);
