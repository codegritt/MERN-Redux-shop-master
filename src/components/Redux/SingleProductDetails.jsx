/* eslint-disable import/no-anonymous-default-export */

import React, { Component } from "react";
import {
  removeItem,
  addProductQuantity,
  subtractProductQuantity,
} from "../../components/actions/cartActions";
import { connect } from "react-redux";
import ProdNotedescd from "./SingleProductDetails.module.css";
import Specbodyspecifications from "./SingleProductDetails.module.css";
import Specbodyspecificationst from "./SingleProductDetails.module.css";
import Specbodyspecificationstd from "./SingleProductDetails.module.css";
import Specbodykeyfeatures from "./SingleProductDetails.module.css";
import Specbodykeyfeaturesli from "./SingleProductDetails.module.css";
import Ratingtext from "./SingleProductDetails.module.css";
import Ratingtextt from "./SingleProductDetails.module.css";
import Ratingtexttt from "./SingleProductDetails.module.css";
import Rating from "./Rating";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Redux/SingleProductDetails.css";

export class SingleProductDetails extends Component {
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <>
            {/* <div className={Product_descqq.product_descqq}> */}
            {/* <ul
              style={{ position: "relative", bottom: "400px" }}
              className="collection-item avatar"
              key={item.id}
            > */}

            <span
              style={{
                color: "gray",
                fontSize: "20px",
              }}
            >
              Highlights
            </span>
            <hr></hr>
            <div className={Specbodykeyfeatures.specbodykeyfeatures}>
              <ul
                style={{ margin: "20px 0", clear: "both" }}
                class="dtls-list clear"
              >
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Veirdo</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Color: Green</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Fabric: Cotton</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Fit: Regular Fit</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Neck Shape: Round</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Pattern: Solid</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Sleeves Length: Half Sleeves</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Pack: Pack of 1</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Hemline: Straight</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Pattern or Print Type: Solid</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Shop By Occasion: Casual</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Season: Summer</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Pattern Coverage: All Over</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Product Length: Regular</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Number of Pocket: No Pocket</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Wash Care: Machine-wash</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Weave Type: Knitted</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">Closure: Pullover</span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">
                    The product may vary from the images due to various reasons
                    like monitor setting or photographic lighting sources or
                    handiwork &amp; craftmanship.
                  </span>
                </li>
                <li
                  className={Specbodykeyfeaturesli.specbodykeyfeaturesli}
                  class="col-xs-8 dtls-li"
                  id="highlightSupc"
                >
                  <span class="list-cicrle-cont">
                    <span class="list-circle"></span>
                  </span>
                  <span class="h-content">SUPC: SDL302182620</span>
                </li>
              </ul>
            </div>
            <hr></hr>
            <span style={{ color: "gray", fontSize: "20px" }}>
              Other Specifications
            </span>
            <hr></hr>
            <p className={ProdNotedescd.prodnotedescd}>
              <div className={Specbodyspecifications.specbodyspecifications}>
                <div style={{ lineHeight: "20px" }} class="detailssubbox">
                  <table
                    className={Specbodyspecificationst.specbodyspecificationst}
                    style={{
                      width: "100%",
                      border: "0",
                      cellspacing: "0",
                      cellpadding: "0",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          className={
                            Specbodyspecificationstd.specbodyspecificationstd
                          }
                        >
                          <table
                            className={
                              Specbodyspecificationst.specbodyspecificationst
                            }
                            style={{
                              width: "100%",
                              border: "0",
                              cellspacing: "0",
                              cellpadding: "0",
                            }}
                            class="product-spec"
                          >
                            <tbody>
                              <tr>
                                <th colspan="2"> Other Details</th>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    Specbodyspecificationstd.specbodyspecificationstd
                                  }
                                  style={{ width: "20%" }}
                                >
                                  Country of Origin or Manufacture or Assembly
                                </td>
                                <td>India </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20%" }}>
                                  Common or Generic Name of the commodity
                                </td>
                                <td>M-T Shirts </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20%" }}>Net Contents</td>
                                <td>1 </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20%" }}>
                                  Manufacturer's Name &amp; Address
                                </td>
                                <td>
                                  Veirdo Ventures,2ND F-A,ANZ INFINITY, Nr
                                  Ranipur CHurch, Narol, Ahmedabad{" "}
                                </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20%" }}>
                                  Packer's Name &amp; Address
                                </td>
                                <td>
                                  Veirdo Ventures,2ND F-A,ANZ INFINITY, Nr
                                  Ranipur CHurch, Narol, Ahmedabad{" "}
                                </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20%" }}>
                                  Marketer's Name &amp; Address
                                </td>
                                <td>
                                  Veirdo Ventures,2ND F-A,ANZ INFINITY, Nr
                                  Ranipur CHurch, Narol, Ahmedabad{" "}
                                </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20%" }}>
                                  Importer's Name &amp; Address
                                </td>
                                <td>
                                  Veirdo Ventures,2ND F-A,ANZ INFINITY, Nr
                                  Ranipur CHurch, Narol, Ahmedabad{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </p>

            <span style={{ color: "gray", fontSize: "20px" }}>Description</span>
            <hr></hr>
            <p
              style={{
                paddingLeft: "52px",
                padding: "15px 35px 20px 33px",
              }}
              className={ProdNotedescd.prodnotedescd}
            >
              {item.desc}
            </p>

            <span style={{ color: "gray", fontSize: "20px" }}>
              {" "}
              Terms & Conditions
            </span>
            <hr></hr>
            <p
              style={{
                paddingLeft: "52px",
                padding: "15px 35px 20px 33px",
              }}
              className={ProdNotedescd.prodnotedescd}
            >
              The images represent actual product though color of the image and
              product may slightly differ. Snapdeal does not select, edit,
              modify, alter, add or supplement the information, description and
              other specifications provided by the Seller.
            </p>
            <div
              style={{
                padding: "30px",
                paddingLeft: "0",
              }}
            >
              <span style={{ color: "gray", fontSize: "20px" }}>
                Ratings & Reviews
              </span>
              <div
                style={{ display: "flex", padding: "30px", paddingLeft: "0" }}
              >
                <div className={Ratingtext.ratingtext}>
                  <div className={Ratingtextt.ratingtextt}>
                    <Rating />
                  </div>
                  <p
                    style={{ color: "gray", fontSize: "17px" }}
                    class="total-review-txt"
                  >
                    6037 Ratings &amp; 134 Reviews
                  </p>
                  <p style={{ color: "lightblue", fontSize: "17px" }}>
                    View All Reviews
                  </p>
                </div>
                <div className={Ratingtext.ratingtext}>
                  <div className={Ratingtexttt.ratingtexttt}>29%</div>
                  <p
                    style={{ color: "gray", fontSize: "17px" }}
                    class="total-review-txt"
                  >
                    Based on 1012 Recommendations
                  </p>
                  <div style={{ display: "flex" }}>
                    <p style={{ color: "gray", fontSize: "15px" }}>
                      Would you like to recommend this item?
                    </p>
                    <button
                      style={{ backgroundColor: "green" }}
                      class="btn waves-effect waves-green"
                    >
                      YES
                    </button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button
                      style={{ backgroundColor: "#3f3f3f" }}
                      class="btn waves-effect waves-grey"
                    >
                      NO
                    </button>
                  </div>
                </div>
                <div className={Ratingtext.ratingtext}>
                  <p
                    style={{
                      color: "gray",
                      fontSize: "17px",
                      position: "relative",
                      top: "70px",
                    }}
                    class="total-review-txt"
                  >
                    Have you used this product?
                  </p>
                  <button
                    style={{
                      fontSize: "17px",
                      height: "20px",
                      paddingBottom: "30px",
                      left: "10px",
                      position: "relative",
                      top: "80px",
                    }}
                    className="waves-effect waves-light btn pink remove"
                  >
                    Review
                  </button>
                </div>
              </div>
            </div>
            <p style={{ color: "gray", fontSize: "13px" }}>
              1-10 of 134 Reviews
            </p>
            <hr></hr>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  color: "gray",
                  fontSize: "20px",
                }}
              >
                Customer Reviews |
              </span>
              <FontAwesomeIcon
                style={{
                  color: "gray",
                  fontSize: "13px",
                  position: "relative",
                  left: "30px",
                  top: "10px",
                }}
                icon={faMagnifyingGlass}
              />
              <div>
                <input
                  style={{
                    height: "30px",
                    fontSize: "13px",
                    position: "relative",
                    top: "0px",
                    right: "30px",
                    marginLeft: "30px",
                    paddingLeft: "40px",
                    width: "400px",
                    borderRadius: "3px",
                  }}
                  className="form-control"
                  placeholder="Search customer reviews"
                />
              </div>
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                padding: "30px",
                paddingTop: "5px",
                marginBottom: "60px",
              }}
            >
              <img
                style={{ width: "50px", position: "relative", top: "60px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWBWJ_C2F1wDn97QqFPTOreBip4gYhfQ3MWec_ecaRCuuJ0ghOX2fSmLVRaHmraFaPs8&usqp=CAU"
                alt=""
              />
              <div className="text">
                <div className="user-review">
                  <div className="rating">
                    <Rating />
                  </div>
                  <div style={{ position: "relative", bottom: "30px" }}>
                    <div className="head"> {item.review1}</div>
                    <div className="_reviewUserName" title="rama">
                      by rama on Oct 31, 2021
                    </div>
                    <span className="verifiedname">
                      <i className="filled2"></i>
                      Verified Buyer
                    </span>
                    <p className="filled3">
                      {" "}
                      It is very nice comfortable..I liked it
                    </p>
                    <div className="review">
                      0 People found this review helpful. Was this review
                      helpful?
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <img
                style={{ width: "50px", position: "relative", top: "60px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWBWJ_C2F1wDn97QqFPTOreBip4gYhfQ3MWec_ecaRCuuJ0ghOX2fSmLVRaHmraFaPs8&usqp=CAU"
                alt=""
              />
              <div className="text">
                <div className="user-review">
                  <div className="rating">
                    <Rating />
                  </div>
                  <div style={{ position: "relative", bottom: "30px" }}>
                    <div className="head"> {item.review2}</div>
                    <div className="_reviewUserName" title="rama">
                      by rama on Oct 31, 2021
                    </div>
                    <span className="verifiedname">
                      <i className="filled2"></i>
                      Verified Buyer
                    </span>
                    <p className="filled3">
                      {" "}
                      It is very nice comfortable..I liked it
                    </p>
                    <div className="review">
                      0 People found this review helpful. Was this review
                      helpful?
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <img
                style={{ width: "50px", position: "relative", top: "60px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWBWJ_C2F1wDn97QqFPTOreBip4gYhfQ3MWec_ecaRCuuJ0ghOX2fSmLVRaHmraFaPs8&usqp=CAU"
                alt=""
              />
              <div className="text">
                <div className="user-review">
                  <div className="rating">
                    <Rating />
                  </div>
                  <div style={{ position: "relative", bottom: "30px" }}>
                    <div className="head"> {item.review3}</div>
                    <div className="_reviewUserName" title="rama">
                      by rama on Oct 31, 2021
                    </div>
                    <span className="verifiedname">
                      <i className="filled2"></i>
                      Verified Buyer
                    </span>
                    <p className="filled3">
                      {" "}
                      It is very nice comfortable..I liked it
                    </p>
                    <div className="review">
                      0 People found this review helpful. Was this review
                      helpful?
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <img
                style={{ width: "50px", position: "relative", top: "60px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWBWJ_C2F1wDn97QqFPTOreBip4gYhfQ3MWec_ecaRCuuJ0ghOX2fSmLVRaHmraFaPs8&usqp=CAU"
                alt=""
              />
              <div className="text">
                <div className="user-review">
                  <div className="rating">
                    <Rating />
                  </div>
                  <div style={{ position: "relative", bottom: "30px" }}>
                    <div className="head"> {item.review4}</div>
                    <div className="_reviewUserName" title="rama">
                      by rama on Oct 31, 2021
                    </div>
                    <span className="verifiedname">
                      <i className="filled2"></i>
                      Verified Buyer
                    </span>
                    <p className="filled3">
                      {" "}
                      It is very nice comfortable..I liked it
                    </p>
                    <div className="review">
                      0 People found this review helpful. Was this review
                      helpful?
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <img
                style={{ width: "50px", position: "relative", top: "60px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWBWJ_C2F1wDn97QqFPTOreBip4gYhfQ3MWec_ecaRCuuJ0ghOX2fSmLVRaHmraFaPs8&usqp=CAU"
                alt=""
              />
              <div className="text">
                <div className="user-review">
                  <div className="rating">
                    <Rating />
                  </div>
                  <div style={{ position: "relative", bottom: "30px" }}>
                    <div className="head"> {item.review5}</div>
                    <div className="_reviewUserName" title="rama">
                      by rama on Oct 31, 2021
                    </div>
                    <span className="verifiedname">
                      <i className="filled2"></i>
                      Verified Buyer
                    </span>
                    <p className="filled3">
                      {" "}
                      It is very nice comfortable..I liked it
                    </p>
                    <div className="review">
                      0 People found this review helpful. Was this review
                      helpful?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </ul> */}
            {/* </div> */}
          </>
        );
      })
    ) : (
      <p
        style={{
          padding: "20px",
          marginLeft: "20px",
          fontSize: "20px",
          textAlign: "center",
          overflow: "auto",
        }}
      >
        Nothing to show!
      </p>
    );

    return (
      <>
        {/* <div
          style={{
            padding: "50px",
            position: "relative",
            bottom: "450px",
            height: "1px",
            backgroundColor: "red",
          }}
        > */}

        {addedItems}

        {/* </div> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addNoteQuantity: (id) => {
      dispatch(addProductQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractProductQuantity(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductDetails);
