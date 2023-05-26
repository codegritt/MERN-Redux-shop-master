import React from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";

function Success() {
  return (
    <>
      <Container>
        <NavbarComp />
      </Container>
      <div>
        <h1>Thank you for your purchase!</h1>
      </div>
    </>
  );
}

export default Success;
