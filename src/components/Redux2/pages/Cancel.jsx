import React from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";

function Cancel() {
  return (
    <>
      <Container>
        <NavbarComp />
      </Container>
      <div>
        <h1>Sorry to see you cancelled your Stripe payment!</h1>
      </div>
    </>
  );
}

export default Cancel;
