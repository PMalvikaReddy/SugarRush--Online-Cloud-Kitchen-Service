import React from "react";

import { SubHeading, MenuItem } from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your Palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex_center">
        <p className="app__specailmenu_menu_heading">Desserts</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex_center">
        <p className="app__specailmenu_menu_heading">Our Must Try</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
