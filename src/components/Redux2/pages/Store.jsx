import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";

function Store() {
  return (
    <>
      <Container>
        <NavbarComp />
      </Container>
      <div>
        <h1 align="center" className="p-3">
          Welcome to the store!
          <Row xs={1} md={3} className="g-4">
            {productsArray.map((product, idx) => (
              <Col align="center" key={idx}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </h1>
      </div>
    </>
  );
}

export default Store;
