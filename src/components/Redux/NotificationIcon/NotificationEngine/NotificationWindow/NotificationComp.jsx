/* eslint-disable import/no-anonymous-default-export */

import React, { Component } from "react";
import {
  removeItem,
  addNoteQuantity,
  subtractNoteQuantity,
} from "../../../../actions/cartActions";
import { connect } from "react-redux";
import Itemimgimg from "./NotificationComp.module.css";
import Notetitle from "./NotificationComp.module.css";
import Notedesc from "./NotificationComp.module.css";
import Noteprize from "./NotificationComp.module.css";
import Notequan from "./NotificationComp.module.css";
import { Link } from "react-router-dom";

export class NotificationComp extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
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
            <div>
              <img
                className={Itemimgimg.itemimgimg}
                src={item.img}
                alt={item.img}
              />
            </div>

            <div className="item-desc">
              <span className={Notetitle.notetitle}>{item.title}</span>
              <p className={Notedesc.notedesc}>{item.desc}</p>
              <p>
                <b className={Noteprize.noteprize}>Price: {item.price}$</b>
              </p>
              <p>
                <b className={Notequan.notequan}>Quantity: {item.quantity}</b>
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
                style={{
                  fontSize: "9px",
                  height: "20px",
                  paddingBottom: "30px",
                  position: "relative",
                  bottom: "35px",
                }}
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p
        style={{
          padding: "20px",
          marginLeft: "20px",
          fontSize: "12px",
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
            height: "170px",
            margin: "10px",
            float: "right",
            overflowX: "auto",
            overflowY: "auto",
          }}
          className="collection"
        >
          {addedItems}
        </ul>
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
      dispatch(addNoteQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractNoteQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComp);
