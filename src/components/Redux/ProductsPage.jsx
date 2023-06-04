/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
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

const { Panel } = Collapse;

const ProductsPage = () => {
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
              <hr></hr>
              <div
                class="filter-inner"
                data-name="Price"
                data-filter-type="slider"
              >
                <div class="clear">
                  <span class="from-price-text">Rs. 360</span>
                  <span class="to-price-text">Rs. 2799</span>
                </div>
                <div class="price-input">
                  <div class="price-text-box">
                    <input
                      type="text"
                      name="fromVal"
                      value="360"
                      class="input-filter"
                      className="form-control"
                    />
                    <span class="rsText">Rs.</span>
                  </div>
                </div>
                <span class="dash"> - </span>
                <div class="price-input">
                  <div class="price-text-box">
                    <input
                      type="text"
                      name="toVal"
                      class="input-filter"
                      value="2799"
                      className="form-control"
                    />
                    <span class="rsText">Rs.</span>
                  </div>
                </div>
                <div class="price-go-arrow btn btn-line btn-theme-secondary">
                  GO
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
