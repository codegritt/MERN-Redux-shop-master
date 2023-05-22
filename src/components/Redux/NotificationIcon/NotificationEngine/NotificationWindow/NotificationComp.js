/* eslint-disable import/no-anonymous-default-export */

import React, { Component } from "react";
import Notecontainer from "./NotificationComp.module.css";
import Chatlist from "./NotificationComp.module.css";
import {
  removeNoteItem,
  addNoteQuantity,
  subtractNoteQuantity,
} from "../../../../actions/cartActions";
import { connect } from "react-redux";
import Recipe from "../../../CartPage";
import NoteCartcontainer from "./NotificationComp.module.css";
import NoteCartcart from "./NotificationComp.module.css";
import NoteCartcarth from "./NotificationComp.module.css";
import { Link } from "react-router-dom";

export class NotificationComp extends Component {
  //to remove the item completely
  handleNoteRemove = (id) => {
    this.props.removeNoteItem(id);
  };
  //to add the quantity
  handleNoteAddQuantity = (id) => {
    this.props.addNoteQuantity(id);
  };
  //to substruct from the quantity
  handleNoteSubtractQuantity = (id) => {
    this.props.subtractNoteQuantity(id);
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
                      this.handleNoteAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleNoteSubtractQuantity(item.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleNoteRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      // <div className={Notecontainer.notecontainer}>
      <div className={Chatlist.chatlist}>
        <div
          style={{
            backgroundColor: "whitesmoke",
          }}
        >
          <div className={NoteCartcontainer.notecartcontainer}>
            <div className={NoteCartcart.notecartcart}>
              <h5 className={NoteCartcarth.notecartcarth}>You have ordered:</h5>
              <ul style={{ margin: "20px" }} className="collection">
                {addedItems}
              </ul>
            </div>
            <Recipe />
          </div>
        </div>
        <div style={{ position: "relative", top: "400px" }}></div>
      </div>
      // </div>
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
    removeNoteItem: (id) => {
      dispatch(removeNoteItem(id));
    },
    addNoteQuantity: (id) => {
      dispatch(addNoteQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractNoteQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComp);
