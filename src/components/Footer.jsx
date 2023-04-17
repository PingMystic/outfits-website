import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import paymentImg from "../images/payment.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="title logo">DUROTAN</h3>
            <span className="location">
              268 Elizaberth Ave Str, Brooklyn, CA, 90025
            </span>
            <span className="number">+0082 561 43 34</span>
            <span className="email">support@durotan.com</span>
            <div className="socials">
              <AiOutlineInstagram />
              <AiOutlineGithub />
              <AiOutlineTwitter />
            </div>
          </div>
          <div className="col">
            <h3 className="title">FAQS</h3>
            <ul>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Gift Card</a>
              </li>
              <li>
                <a href="#">Guest purchase</a>
              </li>
              <li>
                <a href="#">Electronic receipt</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="title">COMPANY</h3>
            <ul>
              <li>
                <a href="#">About Durotan</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Journals</a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h3 className="title">NEWSLETTER</h3>
            <p>
              Be the first to get the latest news about trends, promotions and
              much more!
            </p>
            <input type="email" placeholder="Enter you email address" />
            <span>
              By subscribing, you accept the <span>Privacy Policy</span>
            </span>
            <button>
              <a href="#">SUBSCRIBE</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
