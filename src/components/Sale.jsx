import saleImg from "../images/banner-01.png";
import trendingImg from "../images/banner-02.png";

export default function Sale() {
  return (
    <>
      <div className="sales-banner" id="shop">
        <div className="sale-section">
          <div className="container">
            <div className="text">
              <span className="title">WINTER SALE</span>
              <h2>
                <span>30%</span>SALE OF Sneakers
              </h2>
              <p>
                Discount 30% for all shoes & sneakers. Limited time offer,
                dont’s miss out!
              </p>
              <button>
                <a href="#">SHOP NOW</a>
              </button>
            </div>
            <div className="image">
              <img src={saleImg} alt="" />
            </div>
          </div>
        </div>
        <div className="trending-section">
          <div className="container">
            <div className="text">
              <span className="title">TRENDING</span>
              <h2>Braided Bracelet</h2>
              <p>The trending item necessary for stylish guys</p>
              <button>
                <a href="#">SHOP NOW</a>
              </button>
            </div>
            <div className="image">
              <img src={trendingImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
