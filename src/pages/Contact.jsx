import React from "react";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import contact from "./img/staffa.png";
const Contact = () => {
  return (
    <div className="body">
      <div style={{ background: "#00bbf0" }} className="py-5 text-center">
        <div className="d-flex justify-content-center">
          <h1 className="p-3 text-white">Reach our support</h1>
        </div>
      </div>

      <div className="hero-section pb-5">
        <div className="mx-5 mb-5">
          <div
            style={{ marginTop: "-4%" }}
            className="row align-items-center justify-content-center gap-5 text-center w-100"
          >
            <div className="col-lg-3 col-md-3 col-sm-10">
              <div
                style={{ background: "#362a96", color: "#fff" }}
                className="card p-5"
              >
                <div>
                  <FaLocationDot
                    style={{ fontSize: "40px" }}
                    className="contactIcons mb-3"
                  />
                </div>
                <div>Our Address</div>
                <div>Bombo Kakerenge</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-10">
              <div
                style={{ background: "#362a96", color: "#fff" }}
                className="card p-5"
              >
                <div>
                  <FaPhone
                    style={{ fontSize: "30px" }}
                    className="contactIcons mb-3"
                  />
                </div>
                <div>Contact Us</div>
                <div>+256 777 781 410</div>
                <a
                  href="https://wa.me/256751892892"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span>WhatsApp +256 751 892 892</span>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-10">
              <div
                style={{ background: "#362a96", color: "#fff" }}
                className="card p-5"
              >
                <div>
                  <MdEmail
                    style={{ fontSize: "40px" }}
                    className="contactIcons mb-3"
                  />
                </div>
                <div>kasule616@gmail.com</div>
                <div>moonlandnps@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-4 justify-content-center align-items-center d-flex">
          <div className="col-md-4 col-sm-8">
            <div>
              <h4>No worries</h4>
              <p>
                Our dedicated team is here to assist you every step of the way.
                Whether you have questions about our admissions process, want to
                schedule a campus tour, or simply wish to learn more about what
                makes our school unique, we're here to help. You can reach us by
                phone, email, and messages. Our knowledgeable staff members are
                ready to provide your child with the information and support
                they need about their educational journey.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-8">
            <div>
              <img src={contact} className="w-100 rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
