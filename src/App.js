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
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import SnapFeed from "./components/SnapFeed/SnapFeed";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Appheader />
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
            <Route exact path="/home2" element={<ShowBookList />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
            <Route path="/show-book/:id" element={<ShowBookDetails />} />
            <Route path="snapfeed" element={<SnapFeed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
