/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./ExpansionPanel.css";
function ExpansionPanel() {
  return (
    <div>
      <Accordion title="Default address">
        <div className="accordionadd">
          <label style={{ float: "right" }} for="check">
            <input type="checkbox" id="check" />

            <span style={{ fontSize: "12px" }} class="fake-label">
              Use a selected address ?
            </span>
          </label>
        </div>
      </Accordion>
      <Accordion isExpand={true} title="Custom shipping address">
        <div>
          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="text"
            className="form-control"
            placeholder="First Name*"
          />

          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="text"
            className="form-control"
            placeholder="Last Name*"
          />

          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="email"
            className="form-control"
            placeholder="Email Address*"
          />

          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="text"
            className="form-control"
            placeholder="Company Name"
          />

          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="text"
            className="form-control"
            placeholder="City*"
          />

          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="text"
            className="form-control"
            placeholder="Street Address*"
          />

          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="text"
            className="form-control"
            placeholder="Apartment/Unit"
          />

          <input
            style={{
              border: "1px solid lightgray",
              height: "25px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "95%",
              borderRadius: "3px",
              marginBottom: "20px",
            }}
            type="text"
            className="form-control"
            placeholder="Postal Code/ZIP*"
          />

          <select
            style={{
              border: "1px solid lightgray",
              height: "30px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              paddingLeft: "10px",
              width: "97%",
              borderRadius: "3px",
              marginBottom: "20px",
              backgroundColor: "whitesmoke",
            }}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>India</option>
            <option value="1">United States of America</option>
            <option value="2">Asia</option>
            <option value="3">Europe</option>
          </select>
        </div>
      </Accordion>

      <Accordion title="Shipping Method">
        <div style={{ fontSize: "11px" }}>
          <p>Standard Shipping (Free)</p>
          <p>Express Shipping ($6.99)</p>
          <p>Next Day Shipping ($10)</p>
        </div>
      </Accordion>

      <Accordion title="Coupons and Promotions">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <span>
              <input
                style={{
                  border: "1px solid lightgray",
                  height: "25px",
                  fontSize: "12px",
                  position: "relative",
                  top: "5px",
                  paddingLeft: "10px",
                  width: "90%",
                  borderRadius: "3px",
                  marginBottom: "20px",
                }}
                type="text"
                className="form-control"
                placeholder="Coupon"
              />
            </span>
            <span>
              <button
                style={{
                  backgroundColor: "#c6003d",
                  height: "30px",
                  borderRadius: "5px",
                  fontSize: "10px",
                  position: "relative",
                  top: "5px",
                  right: "5px",
                  color: "whitesmoke",
                }}
                class="btn btn-primary"
              >
                Apply
              </button>
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span>
              <input
                style={{
                  border: "1px solid lightgray",
                  height: "25px",
                  fontSize: "12px",
                  position: "relative",
                  top: "5px",
                  paddingLeft: "10px",
                  width: "90%",
                  borderRadius: "3px",
                  marginBottom: "20px",
                }}
                type="text"
                className="form-control"
                placeholder="Promotions"
              />
            </span>
            <span>
              <button
                style={{
                  backgroundColor: "#c6003d",
                  height: "30px",
                  borderRadius: "5px",
                  fontSize: "10px",
                  position: "relative",
                  top: "5px",
                  right: "5px",
                  color: "whitesmoke",
                }}
                class="btn btn-primary"
              >
                Apply
              </button>
            </span>
          </div>
        </div>
      </Accordion>

      <Accordion title="Extra Details">
        <div style={{ fontSize: "11px" }}>
          <span>Order Notes</span>
          <textarea style={{ color: "gray" }}>Notes/Other Details</textarea>
        </div>
      </Accordion>
      <Accordion title="Pay With Credit Card">
        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "95%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="First Name*"
        />

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "95%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="Last Name*"
        />

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "95%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="email"
          className="form-control"
          placeholder="Email Address*"
        />

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "95%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="Company Name"
        />

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "95%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="City*"
        />

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "95%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="Street Address*"
        />

        <select
          style={{
            border: "1px solid lightgray",
            height: "30px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "97%",
            borderRadius: "3px",
            marginBottom: "20px",
            backgroundColor: "whitesmoke",
          }}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>India</option>
          <option value="1">United States of America</option>
          <option value="2">Asia</option>
          <option value="3">Europe</option>
        </select>

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "45%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="Credit Card Number"
        />

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "45%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="Expiration Date*"
        />

        <input
          style={{
            border: "1px solid lightgray",
            height: "25px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            paddingLeft: "10px",
            width: "45%",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="CVV*"
        />
        <button
          style={{
            backgroundColor: "#c6003d",
            height: "30px",
            borderRadius: "5px",
            fontSize: "12px",
            position: "relative",
            top: "5px",
            left: "150px",
            width: "50%",
            color: "whitesmoke",
          }}
          class="btn btn-primary"
        >
          Create Order
        </button>
      </Accordion>
      <Accordion isExpand={true} title="Pay with PayPal">
        <div>
          <button
            style={{
              backgroundColor: "#ffd140",
              height: "35px",
              borderRadius: "3px",
              fontSize: "12px",
              position: "relative",
              top: "5px",
              width: "50%",
            }}
            class="btn btn-primary"
          >
            <img
              style={{
                width: "30%",
                height: "30px",
              }}
              src="https://ecrlib.org/wp-content/uploads/2023/03/PayPal-Logo.png"
              alt=""
            />
          </button>
          <div>
            <button
              style={{
                backgroundColor: "#c6003d",
                height: "35px",
                borderRadius: "3px",
                fontSize: "12px",
                position: "relative",
                top: "5px",
                left: "0px",
                width: "50%",
                marginTop: "30px",
                color: "whitesmoke",
              }}
              class="btn btn-primary"
            >
              Debit or Credit Card
            </button>
          </div>
          <div>
            <img
              style={{
                width: "15%",
                marginTop: "15px",
                position: "relative",
                left: "120px",
              }}
              src="https://ultimatemember.com/wp-content/uploads/2019/08/Powered-By-PayPal-Logo.png"
              alt=""
            />
          </div>
        </div>
      </Accordion>
      <button
        style={{
          backgroundColor: "#c6003d",
          height: "35px",
          borderRadius: "3px",
          fontSize: "12px",
          position: "relative",
          top: "5px",
          left: "0px",
          width: "59%",
          marginTop: "30px",
          color: "whitesmoke  ",
        }}
        class="btn btn-primary"
      >
        PLACE ORDER
      </button>
    </div>
  );
}

const Accordion = ({ children, title, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);
  return (
    <>
      <div className="box">
        <div
          className="title-box"
          onClick={() => setExpand((expand) => !expand)}
        >
          <span className="title">{title}</span>
          <span className="icon">
            <i
              style={{
                position: "relative",
                left: "10px",
              }}
              className={`fa fa-play-circle${!expand ? " down" : ""}`}
            ></i>
          </span>
          <div className="clearfix"></div>
        </div>
        {expand && <div className="content">{children}</div>}
      </div>
    </>
  );
};

export default ExpansionPanel;
