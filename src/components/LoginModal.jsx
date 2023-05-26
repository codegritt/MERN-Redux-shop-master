import React, { Component } from "react";
import { Modal } from "react-responsive-modal";
import overlay__ from "./LoginModal.module.css";
import Left_container from "./LoginModal.module.css";
import Left__ from "./LoginModal.module.css";
import Left__img1 from "./LoginModal.module.css";
import Left_containerp from "./LoginModal.module.css";
import Right__ from "./LoginModal.module.css";
import Login__title from "./LoginModal.module.css";
import Login__desc from "./LoginModal.module.css";
import Login__input from "./LoginModal.module.css";
import termsandcond__ from "./LoginModal.module.css";
import Login__btn from "./LoginModal.module.css";
import Login__googlebtn from "./LoginModal.module.css";
import Login__googlelogo from "./LoginModal.module.css";
import Close__ from "./LoginModal.module.css";
import Login__span from "./LoginModal.module.css";
import AccountUserName from "./LoginModal.module.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleIconn from "./LoginModal.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginModal extends Component {
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
      <>
        <div>
          <span
            style={{ left: "320px" }}
            className={AccountUserName.accountUserName}
            onClick={this.onClickButton}
          >
            Sign In
            <FontAwesomeIcon
              className={CircleIconn.circleiconn}
              icon={faUser}
            />
          </span>
        </div>
        <div>
          <Modal open={this.state.openModal} onClose={this.onCloseModal}>
            <div className={overlay__.overlay__}>
              <div className={Left__.left}>
                <div className={Left_container.left_container}>
                  <img
                    className={Left__img1.left__img1}
                    src="https://img.favpng.com/3/23/13/map-icon-png-vector-format-png-favpng-SwT3fkihcFphPUsrfz8zy4RnC.jpg"
                    alt=""
                  />
                  <p className={Left_containerp.left_containerp}>
                    MANAGE YOUR ORDERS
                    <p>Track orders, manage cancellations & returns.</p>
                  </p>

                  <img
                    className={Left__img1.left__img1}
                    src="https://cdn-icons-png.flaticon.com/512/252/252273.png"
                    alt=""
                  />
                  <p className={Left_containerp.left_containerp}>
                    SHORTLIST ITEMS YOU LOVE
                    <p>Keep items you love on a watchlist.</p>{" "}
                  </p>
                  <img
                    className={Left__img1.left__img1}
                    src="https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png"
                    alt=""
                  />

                  <p className={Left_containerp.left_containerp}>
                    AWESOME OFFERS UPDATES FOR YOU
                    <p> Be first to know about great offers and save.</p>
                  </p>
                </div>
              </div>

              <div className={Right__.right}>
                <p className={Login__title.login__title}>
                  Login/Sign Up On Snapdeal
                </p>
                <p className={Login__desc.Login_des}>
                  Please provide your Mobile Number or Email to Login/ Sign Up
                  on Snapdeal
                </p>
                <input
                  type="email"
                  className={Login__input.login__input}
                  placeholder="Mobile Number/ Email "
                  required
                />
                <p className={termsandcond__.termsandcon}></p>

                <button className={Login__btn.login__btnn}>CONTINUE</button>
                <span className={Login__span.login__span}>or Login Using</span>
                <button className={Login__googlebtn.login__googlebtnn}>
                  <img
                    className={Login__googlelogo.login__googlelogo}
                    src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png"
                    alt=""
                  />
                  Google
                </button>
              </div>
              <div className={Close__.close__} onClick={this.onCloseModal}>
                x
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default LoginModal;
