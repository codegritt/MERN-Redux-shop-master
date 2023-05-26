import React, { Component } from "react";
import { Modal } from "react-responsive-modal";
import overlay__ from "./LoginModal.module.css";
import Cart__header2 from "./CartModal.module.css";
import Cart__box from "./CartModal.module.css";
import Cart__section from "./CartModal.module.css";
import CartSection2data from "../constants/CartSection2data";
import CartSection3data from "../constants/CartSection3data";
import CartSection4data from "../constants/CartSection4data";
import CartSection1data from "../constants/CartSection1data";
import Close__ from "./CartModal.module.css";
import Cart__header1h3 from "./CartModal.module.css";
import Cart__header1h4 from "./CartModal.module.css";
import Cart__sectionlist1 from "./CartModal.module.css";
import Cart__sectionlist2 from "./CartModal.module.css";
import Cart__sectionlist3 from "./CartModal.module.css";
import Cart__sectionlist4 from "./CartModal.module.css";
import Cart__sectionlistp from "./CartModal.module.css";
import Cart__footer1button from "./CartModal.module.css";
import Cart__span1 from "./CartModal.module.css";
import Cart__span2 from "./CartModal.module.css";
import CartTextSpan from "./CartModal.module.css";
import Carticonn from "./CartModal.module.css";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CartModal extends Component {
  state = {
    openModal: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <div>
        {/* <span
          className={CartTextSpan.cartTextSpan}
          onClick={this.onClickButton}
        >
          Cart
          <ShoppingCartIcon className={Carticonn.carticonn} />
         
        </span> */}

        <Link className={CartTextSpan.cartTextSpan} to="/cart">
          My Cart
          <FontAwesomeIcon
            className={Carticonn.carticonn}
            icon={faCartShopping}
          />
        </Link>

        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
          <h1>You Did it!</h1>

          <div className={overlay__.overlay__}>
            <div className={Cart__box.cart__box}>
              <h3 className={Cart__header1h3.cart__header1h3}>
                Shopping Cart is empty!
              </h3>
              <div className={Cart__header2.cart__header2}>
                <h4 className={Cart__header1h4.cart__header1h4}>
                  {" "}
                  BROWSE CATEGORIES
                </h4>
                <div className={Cart__section.cart__section}>
                  <div>
                    {CartSection1data.map((data) => (
                      <div className={Cart__sectionlist1.cart__sectionlist1}>
                        <p className={Cart__sectionlistp.cart__sectionlistp}>
                          {data.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {CartSection2data.map((data) => (
                      <div className={Cart__sectionlist2.cart__sectionlist2}>
                        <p className={Cart__sectionlistp.cart__sectionlistp}>
                          {data.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {CartSection3data.map((data) => (
                      <div className={Cart__sectionlist3.cart__sectionlist3}>
                        <p className={Cart__sectionlistp.cart__sectionlistp}>
                          {data.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {CartSection4data.map((data) => (
                      <div className={Cart__sectionlist4.cart__sectionlist4}>
                        <p className={Cart__sectionlistp.cart__sectionlistp}>
                          {data.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <button className={Cart__footer1button.cart__footer1button}>
                  START SHOPPING NOW
                </button>

                <span className={Cart__span1.cart__span1}>
                  {" "}
                  Safe and Secure Payments{" "}
                </span>
                <span className={Cart__span2.cart__span2}>
                  {" "}
                  100% Payment Protection, Easy Returns Policy
                </span>
              </div>
            </div>

            <div className={Close__.close__}>x</div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CartModal;
