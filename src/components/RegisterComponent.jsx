import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../Helpers/getUniqueId";
import { toast } from "react-toastify";
import Moverlay__ from "./RegisterComponent.module.css";
import MLeft_container from "./RegisterComponent.module.css";
import MLeft__ from "./RegisterComponent.module.css";
import MLeft__img1 from "./RegisterComponent.module.css";
import MLeft_containerp from "./RegisterComponent.module.css";
import MRight__ from "./RegisterComponent.module.css";
import MLogin__title from "./RegisterComponent.module.css";
import MLogin__desc from "./RegisterComponent.module.css";
import Mtermsandcond__ from "./RegisterComponent.module.css";
import MLogin__btn from "./RegisterComponent.module.css";
import MLogin_label from "./RegisterComponent.module.css";
import Mspan__btn from "./RegisterComponent.module.css";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register =  () => {
    try {
      let res =  RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentails.name,
        email: credentails.email,
        imageLink:
          "https://i1.sndcdn.com/avatars-rX0omUAsYYlCSrCM-ZLRqkw-t500x500.jpg",
      });
      navigate("/login");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <>
    <div className="login-wrapper">


      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, name: event.target.value })
            }
            type="text"
            className="form-control"
            placeholder="Your Name"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="form-control"
            placeholder="Email or phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="form-control"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr class="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
    <div className={Moverlay__.Moverlay__}>
        <div className={MLeft__.Mleft}>
          <div className={MLeft_container.Mleft_container}>
            <img
              className={MLeft__img1.Mleft__img1}
              src="https://img.favpng.com/3/23/13/map-icon-png-vector-format-png-favpng-SwT3fkihcFphPUsrfz8zy4RnC.jpg"
              alt=""
            />
            <p className={MLeft_containerp.Mleft_containerp}>
              MANAGE YOUR ORDERS
              <p>Track orders, manage cancellations & returns.</p>
            </p>

            <img
              className={MLeft__img1.Mleft__img1}
              src="https://cdn-icons-png.flaticon.com/512/252/252273.png"
              alt=""
            />
            <p className={MLeft_containerp.Mleft_containerp}>
              SHORTLIST ITEMS YOU LOVE
              <p>Keep items you love on a watchlist.</p>{" "}
            </p>
            <img
              className={MLeft__img1.Mleft__img1}
              src="https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png"
              alt=""
            />

            <p className={MLeft_containerp.Mleft_containerp}>
              AWESOME OFFERS UPDATES FOR YOU
              <p> Be first to know about great offers and save.</p>
            </p>
          </div>
        </div>
        <form >
          <div className={MRight__.Mright}>
            <p className={MLogin__title.Mlogin__title}>
              Sign Up On Snapdeal
            </p>
            <p className={MLogin__desc.MLogin_des}>
              Please provide your Mobile Number or Email to Login/ Sign Up on
              Snapdeal
            </p>
            <div style={{lineHeight:"5px"}}>
            <label className={MLogin_label.Mlogin_label}>
              User Name <span className="errmsg">*</span>
            </label>
            <input
              style={{
                position: "relative",
                bottom: "17px",
                height: "30px",
                fontSize: "12px",
              }}
              onChange={(event) =>
                setCredentials({ ...credentails, name: event.target.value })
              }
              className="form-control"
            ></input>
            <label className={MLogin_label.Mlogin_label}>
              Password <span className="errmsg">*</span>
            </label>
            <input
              style={{
                position: "relative",
                bottom: "20px",
                height: "30px",
                fontSize: "12px",
              }}
              type="password"
              onChange={(event) =>
                setCredentials({ ...credentails, password: event.target.value })
              }
              className="form-control"
            ></input>
             <label className={MLogin_label.Mlogin_label}>
              Mobile Number <span className="errmsg">*</span>
            </label>
            <input
              style={{
                position: "relative",
                bottom: "20px",
                height: "30px",
                fontSize: "12px",
              }}
              type="text"
              onChange={(event) =>
                setCredentials({ ...credentails, email: event.target.value })
              }
              className="form-control"
            />
            </div>
            {/* <div className="card-footer"> */}
            <span className={Mspan__btn.Mspan__btnn}>New User?</span>
            <button  onClick={register} type="submit" className={MLogin__btn.Mlogin__btnn}>
              Register
            </button>{" "}
            {/* <Link
                className="btn btn-success"
                to={"/register"}
                style={{ position: "relative", top: "12px", left: "10px" }}
              >
                Sign Up
              </Link> */}
            {/* </div> */}
            <p className={Mtermsandcond__.Mtermsandcon}></p>
          </div>
        </form>
      </div>
    </>
  );
}
