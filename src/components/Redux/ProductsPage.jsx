/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbsmain from "./CheckoutPage.module.css";
import Productsmain from "./ProductsPage.module.css";
import Productsmainbread from "./ProductsPage.module.css";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trendingi from "./ProductsPage.module.css";
import Trendingis from "./ProductsPage.module.css";
import Trendlist from "./ProductsPage.module.css";
import Leftwrapper from "./ProductsPage.module.css";
import Leftwrapperr from "./ProductsPage.module.css";
import { Collapse } from "antd";
import { Slider } from "antd";
import Rating from "./Rating";

const { Panel } = Collapse;

const ProductsPage = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className={Productsmain.productsmain}>
      <div className={Productsmainbread.productsmainbread}>
        <Link to="/">
          <span className={Breadcrumbsmain.breadcrumbsmain}>Home /</span>
        </Link>
        <Link>
          <span className={Breadcrumbsmain.breadcrumbsmain}>
            Sports Fashion /
          </span>
        </Link>
        <Link>
          <span className={Breadcrumbsmain.breadcrumbsmain}>
            Men's Sports Fashion /
          </span>
        </Link>
        <Link>
          <span className={Breadcrumbsmain.breadcrumbsmain}>
            Men's Sports Footwear /
          </span>
        </Link>
        <Link>
          <span className={Breadcrumbsmain.breadcrumbsmain}>
            Sports Shoes for men /
          </span>
        </Link>
      </div>

      <div style={{ marginTop: "0", paddingLeft: "50px" }}>
        <span style={{ display: "inline-block" }}>
          <i className={Trendingi.trendingi}>
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </i>
          <span className={Trendingis.trendingis}>Trending searches:</span>
        </span>
        <span id="trendingSearches">
          <span className={Trendlist.trendlist}>kitchen product</span>
          <span className={Trendlist.trendlist}>shoes for men </span>
          <span className={Trendlist.trendlist}>kurti set </span>
          <span className={Trendlist.trendlist}> sandal men </span>
          <span className={Trendlist.trendlist}>sport shoe men </span>
          <span className={Trendlist.trendlist}>saree </span>
          <span className={Trendlist.trendlist}>tshirt </span>
          <span className={Trendlist.trendlist}>wall stickers </span>
        </span>
      </div>

      <div className={Leftwrapper.leftwrapper}>
        <div className={Leftwrapperr.leftwrapperr}>
          <Collapse defaultActiveKey={["1"]} ghost>
            <span
              style={{
                color: "gray",
                float: "right",
                position: "relative",
                top: "13px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              4464
            </span>
            <Panel
              style={{
                fontWeight: "bold",
                color: "lightgray",
                fontSize: "13px",
              }}
              header="Sports Fashion"
              key="1"
            >
              <Collapse defaultActiveKey={["2"]} ghost>
                <span
                  style={{
                    color: "gray",
                    float: "right",
                    position: "relative",
                    top: "13px",
                    left: "15px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  4897
                </span>
                <Panel
                  style={{
                    fontWeight: "bold",
                    color: "lightgray",
                    fontSize: "13px",
                  }}
                  header="Men's sports fashion"
                  key="2"
                >
                  <Collapse defaultActiveKey={["3"]} ghost>
                    <span
                      style={{
                        color: "gray",
                        float: "right",
                        position: "relative",
                        top: "13px",
                        left: "30px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      232
                    </span>
                    <Panel
                      style={{
                        fontWeight: "bold",
                        color: "lightgray",
                        fontSize: "13px",
                      }}
                      header="Sports shoes for men"
                      key="3"
                    >
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        45
                      </span>
                      <p>Training Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        4
                      </span>
                      <p>Basketball Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        87
                      </span>
                      <p>Cricket Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        9
                      </span>
                      <p>Badminton Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        23
                      </span>
                      <p>Football Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        8
                      </span>
                      <p>Hiking Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        11
                      </span>
                      <p>Running Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        45
                      </span>
                      <p>Indoor Court Shoes</p>
                      <span
                        style={{
                          color: "gray",
                          float: "right",
                          position: "relative",
                          bottom: "0px",
                          left: "40px",
                          fontSize: "12px",
                        }}
                      >
                        88
                      </span>
                      <p>Formal Shoes</p>
                    </Panel>
                  </Collapse>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </div>

        <div className={Leftwrapperr.leftwrapperr}>
          <Collapse defaultActiveKey={["4"]} ghost>
            <Panel
              style={{
                fontWeight: "bold",
                color: "lightgray",
                fontSize: "13px",
              }}
              header="Price"
              key="4"
            >
              <div
                class="filter-inner"
                data-name="Price"
                data-filter-type="slider"
              >
                <Slider range defaultValue={[20, 50]} disabled={disabled} />

                <div style={{ clear: "both" }} class="clear">
                  <span
                    style={{ fontSize: "12px", textAlign: "left" }}
                    class="from-price-text"
                  >
                    Rs. 360
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      textAlign: "left",
                      float: "right",
                    }}
                    class="to-price-text"
                  >
                    Rs. 2799
                  </span>
                </div>
                <div
                  style={{
                    width: "34%",
                    float: "left",
                    textAlign: "center",
                    padding: "8px 0",
                    border: "0",
                  }}
                  class="price-input"
                >
                  <div
                    style={{
                      position: "relative",
                      top: "20px",
                      height: "10px",
                    }}
                    class="price-text-box"
                  >
                    <input
                      style={{
                        paddingLeft: "25px",
                        lineHeight: "16px",
                        marginBottom: "5px",
                        border: "1px solid #dbdbdb",
                        width: "60%",
                        padding: "10px 1px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        height: "15px",
                        color: "#9e9e9e",
                      }}
                      type="text"
                      name="fromVal"
                      value="360"
                      class="input-filter"
                      className="form-control"
                    />
                    {/* <span className={qweqweq.qweqweq}>Rs.</span> */}
                  </div>
                </div>

                <div class="price-input">
                  <div class="price-text-box">
                    <input
                      style={{
                        paddingLeft: "35px",
                        lineHeight: "16px",
                        marginBottom: "5px",
                        border: "1px solid #dbdbdb",
                        width: "20%",
                        padding: "10px 1px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        height: "15px",
                        color: "#9e9e9e",
                        position: "relative",
                        left: "15px",
                        top: "7px",
                      }}
                      type="text"
                      name="toVal"
                      class="input-filter"
                      value="2799"
                      className="form-control"
                    />
                    {/* <span className={qweqweqq.qweqweqq}>Rs.</span> */}
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    float: "right",
                    left: "20px",
                    bottom: "35px",
                  }}
                  class="price-go-arrow btn btn-line btn-theme-secondary"
                >
                  GO
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className={Leftwrapperr.leftwrapperr}>
          <Collapse defaultActiveKey={["5"]} ghost>
            <Panel
              style={{
                fontWeight: "bold",
                color: "lightgray",
                fontSize: "13px",
              }}
              header="Customer Rating"
              key="5"
            >
              <div
                style={{
                  lineHeight: "10px",

                  paddingRight: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Rating />

                  <span
                    style={{
                      textAlign: "end",
                      fontWeight: "bold",
                      color: "gray",
                      fontSize: "13px",
                    }}
                  >
                    (314)
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <Rating />

                  <span
                    style={{
                      textAlign: "end",
                      fontWeight: "bold",
                      color: "gray",
                      fontSize: "13px",
                    }}
                  >
                    (1768)
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <Rating />

                  <span
                    style={{
                      textAlign: "end",
                      fontWeight: "bold",
                      color: "gray",
                      fontSize: "13px",
                    }}
                  >
                    (7984)
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <Rating />

                  <span
                    style={{
                      textAlign: "end",
                      fontWeight: "bold",
                      color: "gray",
                      fontSize: "13px",
                    }}
                  >
                    (123)
                  </span>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
