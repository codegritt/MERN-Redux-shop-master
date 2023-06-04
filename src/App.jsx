import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReduxHome from "./components/Redux/ReduxHome";
import Cart from "./components/Redux/Cart";
import Home from "./components/Home";
import AppHome from "./components/Home.module.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import HamburgerMenu from "./components/HamburgerMenu";
import Login from "./components/Login";
import Register from "./components/Register";
import Appheader from "./components/Appheader";
import ShowBookDetails from "./components/Bookstore/ShowBookDetails";
import UpdateBookInfo from "./components/Bookstore/UpdateBookInfo";
import CreateBook from "./components/Bookstore/CreateBook";
import ShowBookList from "./components/Bookstore/ShowBookList";
import SnapFeed from "./components/SnapFeed/SnapFeed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SupportEngine from "./components/Chatbot/SupportEngine";
import CheckoutPage from "./components/Redux/CheckoutPage";
import Store from "./components/Redux2/pages/Store";
import Success from "./components/Redux2/pages/Success";
import Cancel from "./components/Redux2/pages/Cancel";
import CartProvider from "./components/Redux2/CartContext";
import Loginbase from "./Pages/Loginbase";
import Registerbase from "./Pages/Registerbase";
import SingleProductPage from "./components/Redux/SingleProductPage";
import ProductsPage from "./components/Redux/ProductsPage";

export const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Appheader />
          <div className="App">
            <ToastContainer
              theme="colored"
              position="top-center"
            ></ToastContainer>

            <div className={AppHome.appHome}>
              <Header1 />

              <Header2 />
              <HamburgerMenu />
              <SupportEngine />
            </div>

            {/* <Navbar /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/reduxhome" element={<ReduxHome />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route exact path="/home2" element={<ShowBookList />} />
              <Route path="/create-book" element={<CreateBook />} />
              <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
              <Route path="/show-book/:id" element={<ShowBookDetails />} />
              <Route path="/snapfeed" element={<SnapFeed />} />
              <Route path="/store" element={<Store />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/loginbase" element={<Loginbase />} />
              <Route path="/registerbase" element={<Registerbase />} />
              <Route
                path="/singleproductpage"
                element={<SingleProductPage />}
              />
              <Route path="/productspage" element={<ProductsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
