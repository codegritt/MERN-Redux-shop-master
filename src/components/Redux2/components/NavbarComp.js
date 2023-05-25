import React, { useState, useContext } from "react";
import { Button, Modal } from "antd";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function NavbarComp() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  return (
    <>
      <Button onClick={showModal}>Cart {productsCount} Items</Button>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>Shopping Cart</h1>
        {productsCount > 0 ? (
          <>
            <p>Items in your cart:</p>
            {cart.items.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              ></CartProduct>
            ))}

            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

            <button variant="success" onClick={checkout}>
              Purchase items!
            </button>
          </>
        ) : (
          <h1>There are no items in your cart!</h1>
        )}
      </Modal>

      <div>
        <h1>Shopping Cart</h1>
        {productsCount > 0 ? (
          <>
            <p>Items in your cart:</p>
            {cart.items.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              ></CartProduct>
            ))}

            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

            <button variant="success" onClick={checkout}>
              Purchase items!
            </button>
          </>
        ) : (
          <h1>There are no items in your cart!</h1>
        )}
      </div>
    </>
  );
}

export default NavbarComp;
