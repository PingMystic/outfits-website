import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "../context";

export default function Cart({ cart, removeProd, cartTotal, toggleQuantity }) {
  const { setCartActive, cartActive } = useGlobalContext();
  return (
    <div className={cartActive ? "shopping-cart active" : "shopping-cart"}>
      <div className="cart-container">
        <div className="title">
          <h2>Your Cart</h2>
          <TfiClose onClick={() => setCartActive(false)} />
        </div>
        <div className="products-container">
          {cart.map((product) => {
            const { img, name, price, id, quantity } = product;
            console.log(quantity);
            return (
              <div className="product" key={id}>
                <img src={img} alt={name} />
                <div className="info">
                  <span className="product-name">{name}</span>
                  <span className="product-price">${price}</span>
                </div>
                <div className="quantity">
                  <button
                    className="minus"
                    onClick={() => toggleQuantity(id, "dec")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="plus"
                    onClick={() => toggleQuantity(id, "inc")}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <TfiClose onClick={() => removeProd(id)} />
              </div>
            );
          })}
        </div>
        <div className="cart-details">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <span className="total-price">${cartTotal}</span>
          </div>
          <button className="check-out-btn">
            <a href="#">CHECKOUT</a>
          </button>
        </div>
      </div>
    </div>
  );
}
