import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Banner from "./Banner";
import Menu from "./Menu";
import Cart from "./Cart";
import { useGlobalContext } from "../context";

export default function Header({
  cart,
  cartTotal,
  removeProd,
  qty,
  setQty,
  toggleQuantity,
}) {
  const [sticky, setSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { setCartActive, cartActive } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  });

  function handleWindowScroll() {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  return (
    <>
      <div className={sticky ? "header sticky" : "header"}>
        <div className="container">
          <span className="title">
            <a href="#home">DUROTAN</a>
          </span>
          <div className="icons">
            <AiOutlineSearch />
            <BsPerson />
            <div className="cart">
              <FiShoppingCart onClick={() => setCartActive(!cartActive)} />
              <span>$0.00</span>
            </div>
            <button
              className="bar-icon"
              onClick={() => setMenuActive(!menuActive)}
            >
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </button>
          </div>
        </div>
        <Menu menuActive={menuActive} onMenuActive={setMenuActive} />
        <Cart
          cart={cart}
          cartTotal={cartTotal}
          removeProd={removeProd}
          qty={qty}
          setQty={setQty}
          toggleQuantity={toggleQuantity}
        />
      </div>
      <Banner />
    </>
  );
}
