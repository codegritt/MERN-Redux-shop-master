import React from "react";
import { useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>

          {productQuantity > 0 ? (
            <>
              <div>
                <div column="true" sm="6">
                  In Cart: {productQuantity}
                </div>
                <div>
                  <button
                    sm="6"
                    onClick={() => cart.addOneToCart(product.id)}
                    className="mx-2"
                  >
                    +
                  </button>
                  <button
                    sm="6"
                    onClick={() => cart.removeOneFromCart(product.id)}
                    className="mx-2"
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                onClick={() => cart.deleteFromCart(product.id)}
                className="my-2"
              >
                Remove from cart
              </button>
            </>
          ) : (
            <button
              onClick={() => cart.addOneToCart(product.id)}
              className="btn-primary"
            >
              Add To Cart
            </button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
