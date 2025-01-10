import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description_box">
      <div className="description_nav">
        <div className="description_box_navbox"> Description</div>
        <div className="description_box_navbox fade">Reviews(122)</div>
      </div>
      <div className="description_box_description">
        <p>
        A product description is a short piece of writing that explains what a product is, what it does, and why someone might want to buy it. 
        It's a type of marketing copy that's used to inform potential customers and encourage them to make a purchase. 
        </p>
        <p>
        A product description is a short piece of writing that explains what a product is, what it does, and why someone might want to buy it. 
        It's a type of marketing copy that's used to inform potential customers and encourage them to make a purchase. 
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
