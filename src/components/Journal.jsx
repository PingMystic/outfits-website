import { AiOutlineRight } from "react-icons/ai";
import journalPost1 from "../images/journal-post-4.jpg";
import journalPost2 from "../images/journal-post-2.jpg";
import journalPost3 from "../images/journal-post-3.jpg";

export default function Journal() {
  return (
    <div className="journal" id="blog">
      <div className="container">
        <div className="title">
          <h2>Our Journal</h2>
          <button>
            <a href="#">
              ALL ARTICLES <AiOutlineRight />
            </a>
          </button>
        </div>
        <div className="posts">
          <div className="image">
            <img src={journalPost1} alt="" />
            <div className="info">
              <span className="date">JUNE 07, 2022</span>
              <h3>Minimalist fashion style with basic items</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dignissim tortor vitae mattis tempor surt ert loper loper ade
                lipo pusre etet...
              </p>
              <button>
                <a href="#">CONTINUE</a>
              </button>
            </div>
          </div>
          <div className="image">
            <img src={journalPost2} alt="" />
            <div className="info">
              <span className="date">JUNE 07, 2022</span>
              <h3>Minimalist fashion style with basic items</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dignissim tortor vitae mattis tempor surt ert loper loper ade
                lipo pusre etet...
              </p>
              <button>
                <a href="#">CONTINUE</a>
              </button>
            </div>
          </div>
          <div className="image">
            <img src={journalPost3} alt="" />
            <div className="info">
              <span className="date">JUNE 07, 2022</span>
              <h3>Minimalist fashion style with basic items</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dignissim tortor vitae mattis tempor surt ert loper loper ade
                lipo pusre etet...
              </p>
              <button>
                <a href="#">CONTINUE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
