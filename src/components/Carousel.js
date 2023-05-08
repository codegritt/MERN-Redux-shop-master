import React from "react";
import Slide_items from "./Carousel.module.css";
import Sliderbanner from "./Carousel.module.css";
import Indicators from "./Carousel.module.css";
import Item1 from "./Carousel.module.css";
import Item2 from "./Carousel.module.css";
import Item3 from "./Carousel.module.css";
import Item1image from "./Carousel.module.css";
import Item2image from "./Carousel.module.css";
import Item3image from "./Carousel.module.css";

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
    };
  }
  handleClick = (e) => {
    let value = e.target.getAttribute("data-value");
    if (value !== null) {
      this.setState({
        selected: value,
      });
    }
  };
  render() {
    const { selected } = this.state;
    const style =
      this.state.selected >= 1
        ? { transform: `translateX(-${selected * 1020}px)` }
        : {};
    const renderIndicator = [];
    for (let i = 0; i < 3; i++) {
      renderIndicator.push(
        <li
          data-value={i}
          key={i}
          // eslint-disable-next-line eqeqeq
          className={selected == i ? "active" : ""}
        ></li>
      );
    }
    return (
      <>
        <div className={Sliderbanner.sliderbanner}>
          <div className={Slide_items.slide_items} style={style}>
            <div className={Item1.item1}>
              <img
                className={Item1image.item1image}
                src="https://blog.snapdeal.com/wp-content/uploads/2018/09/IMG-2.jpg"
                alt=""
              />
            </div>

            <div className={Item2.item2}>
              <img
                className={Item2image.item2image}
                src="https://sugermint.com/wp-content/uploads/2020/03/Snapdeal-waives-off-penalty-on-sellers.jpg"
                alt=""
              />
            </div>

            <div className={Item3.item3}>
              <img
                className={Item3image.item3image}
                src="https://entrackr.com/storage/2018/07/snapdeal-1-1200x600.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <ul onClick={this.handleClick} className={Indicators.indicators}>
          {renderIndicator}
        </ul>
      </>
    );
  }
}
