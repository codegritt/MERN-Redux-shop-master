/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Moverlay__ from "./Login.module.css";
import MLeft_container from "./Login.module.css";
import MLeft__ from "./Login.module.css";
import MLeft__img1 from "./Login.module.css";
import MLeft_containerp from "./Login.module.css";
import MRight__ from "./Login.module.css";
import MLogin__title from "./Login.module.css";
import MLogin__desc from "./Login.module.css";
import Mtermsandcond__ from "./Login.module.css";
import MLogin__btn from "./Login.module.css";
import MLogin__googlebtn from "./Login.module.css";
import MLogin__googlelogo from "./Login.module.css";
import MLogin__span from "./Login.module.css";
import MLogin_label from "./Login.module.css";
import MLogin_input from "./Login.module.css";
import "./Login.css";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      fetch("http://localhost:3000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp)
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              sessionStorage.setItem("userrole", resp.role);
              usenavigate("/home");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const ProceedLoginusingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      let inputobj = { username: username, password: password };
      fetch("https://localhost:44308/User/Authenticate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Login failed, invalid credentials");
          } else {
            toast.success("Success");
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("jwttoken", resp.jwtToken);
            usenavigate("/home");
          }
          // if (Object.keys(resp).length === 0) {
          //     toast.error('Please Enter valid username');
          // } else {
          //     if (resp.password === password) {
          //         toast.success('Success');
          //         sessionStorage.setItem('username',username);
          //         usenavigate('/')
          //     }else{
          //         toast.error('Please Enter valid credentials');
          //     }
          // }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <>
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
        <form onSubmit={ProceedLogin}>
          <div className={MRight__.Mright}>
            <p className={MLogin__title.Mlogin__title}>
              Login/Sign Up On Snapdeal
            </p>
            <p className={MLogin__desc.MLogin_des}>
              Please provide your Mobile Number or Email to Login/ Sign Up on
              Snapdeal
            </p>
            <label className={MLogin_label.Mlogin_label}>
              User Name <span className="errmsg">*</span>
            </label>
            <input
              value={username}
              onChange={(e) => usernameupdate(e.target.value)}
              className="form-control"
            ></input>
            <label className={MLogin_label.Mlogin_label}>
              Password <span className="errmsg">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => passwordupdate(e.target.value)}
              className="form-control"
            ></input>
            <div className="card-footer">
              <button type="submit" className={MLogin__btn.Mlogin__btnn}>
                Login
              </button>{" "}
              {/* <Link
                className="btn btn-success"
                to={"/register"}
                style={{ position: "relative", top: "12px", left: "10px" }}
              >
                Sign Up
              </Link> */}
            </div>

            <p className={Mtermsandcond__.Mtermsandcon}></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
