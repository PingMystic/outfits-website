import { AiOutlineRight } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { GrPowerCycle } from "react-icons/gr";
import { useGlobalContext } from "../context";
import products from "../products";

export default function Products({ addProd, handleProductClick }) {
  const { setCartActive } = useGlobalContext();
  return (
    <div className="products-section" id="product">
      <div className="container">
        <div className="product-tabs">
          <ul>
            <li>
              <a href="#" className="active">
                Editor's Pick
              </a>
            </li>
            <li>
              <a href="#">New In</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
          </ul>
          <button>
            <a href="#">
              SEE ALL PRODUCTS <AiOutlineRight />
            </a>
          </button>
        </div>
        <div className="products-container">
          {products.map((product) => {
            const { img, name, price, id } = product;
            return (
              <div className="product" key={id}>
                <div className="product-image">
                  <img src={img} alt={name} />
                  <div className="img-info">
                    <button
                      className="add-cart-btn"
                      onClick={() => {
                        addProd(product);
                        setCartActive(true);
                      }}
                    >
                      ADD TO CART
                    </button>
                    <div className="icons">
                      <IoMdHeartEmpty />
                      <GrPowerCycle />
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h3 className="product-name">{name}</h3>
                  <span className="product-price">${price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
