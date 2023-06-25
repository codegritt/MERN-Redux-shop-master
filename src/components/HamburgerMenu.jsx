/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HamburgerMenu.css";
import sideheader1 from "./DropdownEg.module.css";
import Dropdown_section from "./DropdownEg.module.css";
import Dropdown_section1h4 from "./DropdownEg.module.css";
import Dropdown_section1 from "./DropdownEg.module.css";
import Dropdown_section2 from "./DropdownEg.module.css";
import Dropdown_section3 from "./DropdownEg.module.css";
import Dropdown_section4 from "./DropdownEg.module.css";
import Dropdown_sectionList from "./DropdownEg.module.css";
import Dropdown_sectionTwo from "./DropdownEg.module.css";
import SidebarData from "../constants/SidebarData";
import sidebarp from "./Sidebar.module.css";
import sidebartop from "./Sidebar.module.css";
import sideheader from "./Sidebar.module.css";
import Dropdown3 from "./DropdownEg.module.css";
import Dropdown4 from "./DropdownEg.module.css";
import Dropdown5 from "./DropdownEg.module.css";
import SidebarData2 from "../constants/SidebarData2";
import Dropdown1Ham from "./HamburgerMenu.module.css";
import Dropbtn1Ham from "./HamburgerMenu.module.css";
import Dropdown_content1Ham from "./HamburgerMenu.module.css";
import SidebarpanelHam from "./HamburgerMenu.module.css";
import Dropbtn11 from "./HamburgerMenu.module.css";
import Dropdown1 from "./DropdownEg.module.css";
import Dropdown_content1Ham1 from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  return (
    <div className={Dropdown1Ham.dropdown1Ham} id="menuToggle">
      <div className={Dropbtn1Ham.dropbtn1Ham}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={Dropdown_content1Ham.dropdown_content1Ham}>
        <div className={SidebarpanelHam.sidebarHam}>
          <h4 className={sideheader.sidebarHeader}>TOP CATEGORIES</h4>
          <div className={Dropdown1.dropdown1}>
            <button className={Dropbtn11.dropbtn11}>Men's fashion</button>

            <div className={Dropdown_content1Ham1.dropdown_content1Ham1}>
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>

              {SidebarData.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <div className={Dropdown_section.dropdown_section}>
                <div className={Dropdown_section1.dropdown_section1}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    FOOTWEAR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Sports Shoes Casual Shoes Slippers & Flip Flops Sandals &
                    Floaters Formal Shoes Loafers Sneakers Ethnic Footwear Shoe
                    Accessories
                  </p>
                </div>

                <div className={Dropdown_section2.dropdown_section2}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    BAGS & LUGGAGE
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Backpacks Laptop Bags Hiking Bags Luggage & Suitcases Travel
                    Accessories Office Bags
                  </p>
                </div>

                <div className={Dropdown_section3.dropdown_section3}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    CLOTHING
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    T-Shirts & Polos Shirts Jeans Trousers & Chinos Innerwear &
                    Sleepwear
                  </p>
                </div>

                <div className={Dropdown_section4.dropdown_section4}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    WINTERWEAR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Jackets Sweatshirts Sweaters Thermals
                  </p>
                </div>
              </div>

              {/* <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>

            {SidebarData2.map((data) => (
              <div className={sidebartop.sidebar__top}>
                <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
              </div>
            ))} */}

              <div className={Dropdown_section.dropdown_section}>
                <div className={Dropdown_section1.dropdown_section1}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    STATIONERY
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Pens & Markers Pencil Boxes Files & Folders Calculators
                    Diaries & Planners Printing Papers Notebooks & Writing Pads
                    Art & Craft Supplies Photo Papers Tapes Card Holders
                    Staplers
                  </p>
                </div>

                <div className={Dropdown_section2.dropdown_section2}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    BABY CLOTHING
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Top & Bottom Sets Frocks, Dresses & Skirts Rompers & Body
                    Suits Shirts, T-Shirts & Tops Bottom Wear Innerwear &
                    Nightwear
                  </p>
                </div>

                <div className={Dropdown_section3.dropdown_section3}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    BABYCARE
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Baby Mosquito Nets Baby Blankets Baby Carriers Baby
                    Strollers Walkers Feeding & Nursing
                  </p>
                </div>

                <div className={Dropdown_section4.dropdown_section4}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    MONITOR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    BP Monitors Diabetic Care Weighing Scales Body Fat Analysers
                    Respiratory & Heart Care Thermometers
                  </p>
                </div>
              </div>

              <div className={Dropdown_sectionTwo.dropdown_sectionTwo}>
                <div className={Dropdown_section1.dropdown_section1}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    ACCESSORIES
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Wallets Belts Hats & Caps Gift Sets Neckties & Cravats Card
                    Holders Keychains Suspenders
                  </p>
                </div>

                <div className={Dropdown_section2.dropdown_section2}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    WESTERNWEAR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Dresses Tops & Tunics T-Shirts Shirts Denims & Trousers
                    Pants & Palazzos Innerwear Nightwear Sportswear
                  </p>
                </div>

                <div className={Dropdown_section3.dropdown_section3}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    HANDBAGS
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Handbags Wallets Clutches Utility bags
                  </p>
                </div>

                <div className={Dropdown_section4.dropdown_section4}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    JEWELLERY
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Necklaces & Sets Earrings Bangles & Bracelets Pendants &
                    Sets
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={Dropdown1Ham.dropdown1Ham}> */}
          {/* <button className={Dropbtn11.dropbtn11}>Men's fashion</button> */}
          {/* <div className={Dropdown_content1Ham.dropdown_content1Ham}>
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>

              {SidebarData.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <div className={Dropdown_section.dropdown_section}>
                <div className={Dropdown_section1.dropdown_section1}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    FOOTWEAR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Sports Shoes Casual Shoes Slippers & Flip Flops Sandals &
                    Floaters Formal Shoes Loafers Sneakers Ethnic Footwear Shoe
                    Accessories
                  </p>
                </div>

                <div className={Dropdown_section2.dropdown_section2}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    BAGS & LUGGAGE
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Backpacks Laptop Bags Hiking Bags Luggage & Suitcases Travel
                    Accessories Office Bags
                  </p>
                </div>

                <div className={Dropdown_section3.dropdown_section3}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    CLOTHING
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    T-Shirts & Polos Shirts Jeans Trousers & Chinos Innerwear &
                    Sleepwear
                  </p>
                </div>

                <div className={Dropdown_section4.dropdown_section4}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    WINTERWEAR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Jackets Sweatshirts Sweaters Thermals
                  </p>
                </div>
              </div>

              <div className={Dropdown_section.dropdown_section}>
                <div className={Dropdown_section1.dropdown_section1}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    STATIONERY
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Pens & Markers Pencil Boxes Files & Folders Calculators
                    Diaries & Planners Printing Papers Notebooks & Writing Pads
                    Art & Craft Supplies Photo Papers Tapes Card Holders
                    Staplers
                  </p>
                </div>

                <div className={Dropdown_section2.dropdown_section2}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    BABY CLOTHING
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Top & Bottom Sets Frocks, Dresses & Skirts Rompers & Body
                    Suits Shirts, T-Shirts & Tops Bottom Wear Innerwear &
                    Nightwear
                  </p>
                </div>

                <div className={Dropdown_section3.dropdown_section3}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    BABYCARE
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Baby Mosquito Nets Baby Blankets Baby Carriers Baby
                    Strollers Walkers Feeding & Nursing
                  </p>
                </div>

                <div className={Dropdown_section4.dropdown_section4}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    MONITOR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    BP Monitors Diabetic Care Weighing Scales Body Fat Analysers
                    Respiratory & Heart Care Thermometers
                  </p>
                </div>
              </div>

              <div className={Dropdown_sectionTwo.dropdown_sectionTwo}>
                <div className={Dropdown_section1.dropdown_section1}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    ACCESSORIES
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Wallets Belts Hats & Caps Gift Sets Neckties & Cravats Card
                    Holders Keychains Suspenders
                  </p>
                </div>

                <div className={Dropdown_section2.dropdown_section2}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    WESTERNWEAR
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Dresses Tops & Tunics T-Shirts Shirts Denims & Trousers
                    Pants & Palazzos Innerwear Nightwear Sportswear
                  </p>
                </div>

                <div className={Dropdown_section3.dropdown_section3}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    HANDBAGS
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Handbags Wallets Clutches Utility bags
                  </p>
                </div>

                <div className={Dropdown_section4.dropdown_section4}>
                  <h4 className={Dropdown_section1h4.dropdown_section1h4}>
                    JEWELLERY
                  </h4>
                  <p className={Dropdown_sectionList.dropdown_sectionList}>
                    Necklaces & Sets Earrings Bangles & Bracelets Pendants &
                    Sets
                  </p>
                </div>
              </div>
            </div> */}
          {/* </div> */}

          {/* <div className={Dropdown2.dropdown2}> */}
          {/* <button className={Dropbtn2.dropbtn2}>Women's fashion</button> */}
          {/* <div className={Dropdown_content2.dropdown_content2}>
              <h4 className={sideheader.sidebarHeader}>MORE CATEGORIES</h4>

              {SidebarData.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
            </div> */}
          {/* </div> */}

          <div className={Dropdown3.dropdown3}>
            {/* <button className={Dropbtn3.dropbtn3}>Home & Kitchen</button> */}
            {/* <div className={Dropdown_content3.dropdown_content3}>
              <h4 className={sideheader.sidebarHeader}>MORE CATEGORIES</h4>

              {SidebarData.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className={Dropdown4.dropdown4}>
            {/* <button className={Dropbtn4.dropbtn4}>Toy's, Kids' Fashion</button> */}
            {/* <div className={Dropdown_content4.dropdown_content4}>
              <h4 className={sideheader.sidebarHeader}>MORE CATEGORIES</h4>

              {SidebarData.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className={Dropdown5.dropdown5}>
            {/* <button className={Dropbtn5.dropbtn5}>
              Beauty, Health & daily
            </button> */}
            {/* <div className={Dropdown_content5.dropdown_content5}>
              <h4 className={sideheader.sidebarHeader}>MORE CATEGORIES</h4>

              {SidebarData.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
              <h4 className={sideheader1.sidebarHeader1}>MORE CATEGORIES</h4>
              {SidebarData2.map((data) => (
                <div className={sidebartop.sidebar__top}>
                  <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
                </div>
              ))}
            </div> */}
          </div>

          <h4 className={sideheader.sidebarHeader}>MORE CATEGORIES</h4>

          {SidebarData.map((data) => (
            <div className={sidebartop.sidebar__top}>
              <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
            </div>
          ))}
          <h4 className={sideheader.sidebarHeader}>MORE CATEGORIES</h4>
          {SidebarData2.map((data) => (
            <div className={sidebartop.sidebar__top}>
              <p className={sidebarp.sidebar__leftlist}>{data.text}</p>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
