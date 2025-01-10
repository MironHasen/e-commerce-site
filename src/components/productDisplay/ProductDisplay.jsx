import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  
  return (
    <div className="product_display">
      <div className="product_display_left">
        <div className="product_display_imglist">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_display_img">
          <img
            className="product_display_main_img"
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className="product_display_right">
        <h1>{product.name}</h1>
        <div className="product_display_right_stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product_display_right_prices">
          <div className="product_display_right_price_old">
            ${product.old_price}
          </div>
          <div className="product_display_right_price_new">
            ${product.new_price}
          </div>
        </div>
        <div className="product_display_right_description">
          This is the best product that you can buy from us without any hesitation! So hurry up dude!
        </div>
        <div className="product_display_right_size">
          <h1>Select Size</h1>
          <div className="product_display_right_sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        <button onClick={() => {addToCart(product.id)}}>Add to cart</button>

        </div>
        <p className="product_display_right_category">
          <span> Category: </span> Women, T-shirt, Crop Top
        </p>
        <p className="product_display_right_category">
          <span> Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
