import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { getSortedData } from "./getSortedData";
import { getFilteredData } from "./getFilteredData";
import { obj } from "./Object";
import Gridlist from "./ProductsPageList.module.css";
import Gridlistcard from "./ProductsPageList.module.css";
import Gridlistcardtitle from "./ProductsPageList.module.css";
import Gridlistcardimg from "./ProductsPageList.module.css";
import Gridheader from "./ProductsPageList.module.css";
import Rating from "./Rating";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import Dropstyle from "./ProductsPageList.module.css";

const ProductsPageList = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p
          onClick={() =>
            dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
          }
          checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          className={Dropstyle.dropstyle}
        >
          Price Low to High
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <p
          onClick={() =>
            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
          }
          checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          className={Dropstyle.dropstyle}
        >
          Price High to Low
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <p
          onClick={() =>
            dispatch({ type: "SORT", payload: "RATING_HIGH_TO_LOW" })
          }
          checked={sortBy && sortBy === "RATING_HIGH_TO_LOW"}
          className={Dropstyle.dropstyle}
        >
          Rating High to Low
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <p
          onClick={() =>
            dispatch({ type: "FILTER", payload: "showFastDeliveryOnly" })
          }
          checked={showFastDeliveryOnly}
          className={Dropstyle.dropstyle}
        >
          Include Out of stock
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <p
          onClick={() =>
            dispatch({ type: "FILTER", payload: "showEntireInventory" })
          }
          checked={showEntireInventory}
          className={Dropstyle.dropstyle}
          style={{ color: "gray", height: "5px" }}
        >
          Show all items
        </p>
      ),
    },
  ];

  const [{ sortBy, showEntireInventory, showFastDeliveryOnly }, dispatch] =
    useReducer(reducer, {
      sortBy: "none",
      showEntireInventory: false,
      showFastDeliveryOnly: false,
    });

  const sortedData = getSortedData([...obj.arr], sortBy);
  const filteredData = getFilteredData(
    sortedData,
    showEntireInventory,
    showFastDeliveryOnly
  );
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p className={Gridheader.gridheader}>
          {" "}
          Sports shoes for men (4978 Items) |
        </p>
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
              width: "200px",
              borderRadius: "3px",
            }}
            className="form-control"
            placeholder="Search within category"
          />
        </div>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <Button>
                Sort by{" "}
                <DownOutlined style={{ position: "relative", bottom: "3px" }} />
              </Button>
            </Dropdown>
          </Space>
        </Space>
      </div>
      <hr></hr>
      <div className={Gridlist.gridlist}>
        {filteredData.map(({ id, price, img, title }) => (
          <div className={Gridlistcard.gridlistcard}>
            <li
              style={{
                listStyle: "none",
              }}
              key={id}
            >
              <img
                src={img}
                alt={img}
                className={Gridlistcardimg.gridlistcardimg}
              />
              <div className={Gridlistcardtitle.gridlistcardtitle}>{title}</div>
              <div className={Gridlistcardtitle.gridlistcardtitle}>
                Price: {price}$
                <p>
                  <Rating />
                </p>
              </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPageList;
