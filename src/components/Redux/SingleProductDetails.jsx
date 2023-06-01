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
import { Collapse } from "antd";
const { Panel } = Collapse;

export class SingleProductDetails extends Component {
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <>
            {/* <div className={Product_descqq.product_descqq}> */}
            <ul
              style={{ position: "relative", bottom: "400px" }}
              className="collection-item avatar"
              key={item.id}
            >
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel
                  style={{ color: "gray", fontSize: "20px" }}
                  header="Highlights"
                  key="1"
                >
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
                        <span class="h-content">
                          Sleeves Length: Half Sleeves
                        </span>
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
                        <span class="h-content">
                          Pattern or Print Type: Solid
                        </span>
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
                        <span class="h-content">
                          Pattern Coverage: All Over
                        </span>
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
                        <span class="h-content">
                          Number of Pocket: No Pocket
                        </span>
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
                          The product may vary from the images due to various
                          reasons like monitor setting or photographic lighting
                          sources or handiwork &amp; craftmanship.
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
                </Panel>
                <Panel
                  style={{ color: "gray", fontSize: "20px" }}
                  header=" Other Specifications"
                  key="2"
                >
                  <hr></hr>
                  <p className={ProdNotedescd.prodnotedescd}>
                    <div
                      className={Specbodyspecifications.specbodyspecifications}
                    >
                      <div style={{ lineHeight: "20px" }} class="detailssubbox">
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
                                        Country of Origin or Manufacture or
                                        Assembly
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
                                      <td style={{ width: "20%" }}>
                                        Net Contents
                                      </td>
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
                </Panel>
                <Panel
                  style={{ color: "gray", fontSize: "20px" }}
                  header="Description"
                  key="3"
                >
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
                </Panel>
                <Panel
                  style={{ color: "gray", fontSize: "20px" }}
                  header="   Terms & Conditions"
                  key="4"
                >
                  <hr></hr>
                  <p
                    style={{
                      paddingLeft: "52px",
                      padding: "15px 35px 20px 33px",
                    }}
                    className={ProdNotedescd.prodnotedescd}
                  >
                    The images represent actual product though color of the
                    image and product may slightly differ. Snapdeal does not
                    select, edit, modify, alter, add or supplement the
                    information, description and other specifications provided
                    by the Seller.
                  </p>
                </Panel>
              </Collapse>
            </ul>
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
        <div
          style={{
            padding: "50px",
            position: "relative",
            bottom: "40px",
          }}
        >
          {addedItems}
        </div>
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
