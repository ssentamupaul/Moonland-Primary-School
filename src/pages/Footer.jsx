import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <span> Bombo Kakerenge </span>

                  <span> Call +256 777 781 410</span>
                  <a
                    href="https://wa.me/256751892892"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>WhatsApp +256 751 892 892</span>
                  </a>

                  <span> kasule616@gmail.com </span>

                  {/* <a href="i add some thi">
                    <i className="fa fa-envelope" aria-hidden="true"></i> */}
                  <span></span>
                  {/* </a> */}
                </div>
              </div>
              <div className="info_social">
                <a href="your_facebook_link">
                  <FaFacebook />
                </a>
                <a href="your_twitter_link">
                  <FaTwitter />
                </a>
                <a href="your_youtube_link">
                  <FaYoutube />
                </a>
                <a href="your_instagram_link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Moonland School sponsors children, and we welcome anyone
                  willing to contribute to our charitable initiatives. Your
                  support is greatly appreciated as we strive to make a positive
                  impact on the lives of the children under our care. Join us in
                  making a difference!"
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link
                    style={{ textDecorationLine: "none" }}
                    className=""
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    style={{ textDecorationLine: "none" }}
                    className=""
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    style={{ textDecorationLine: "none" }}
                    className=""
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    style={{ textDecorationLine: "none" }}
                    className=""
                    to="/portifolio"
                  >
                    Portifolia
                  </Link>
                  <Link
                    style={{ textDecorationLine: "none" }}
                    className=""
                    to="/donate"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Donate</h4>
              {/* <form action="#donatePage">
                <a href="/donate#donatePage">
                  <button type="submit">Donate</button>
                </a>
              </form> */}
              <button className="navbar-item donateBtn rounded">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          <p className="text-light">
            &copy; <span id="displayYear">{currentYear}:</span> All Rights
            Reserved By <a href="#Home">Moonland Primary School Kakelenge</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
