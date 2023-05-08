import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReduxHome from "./components/ReduxHome";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AppHome from "./components/Home.module.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import HamburgerMenu from "./components/HamburgerMenu";
import Login from "./components/Login";
import Register from "./components/Register";
import Appheader from "./components/Appheader";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          {/* <Appheader /> */}
          <div className="App">
            <div className={AppHome.appHome}>
              <Header1 />

              <Header2 />
              <HamburgerMenu />
            </div>

            {/* <Navbar /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/reduxhome" element={<ReduxHome />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
