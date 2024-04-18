import React from "react";
import "./Css/Donate.css";
import Flutter from "./Flutter";

const donatePage = () => {
  // Data stored locally within the component
  const data = [
    {
      title: "Nutrition",
      description:
        "Our contribution will go towards providing nutritious meals, ensuring that a child doesn't go hungry during the school term. It will support initiatives that aim to deliver balanced and healthy meals, vital for their physical and cognitive development.",
    },
    {
      title: "Education",
      description:
        " By contributing $100, you're providing crucial support for educational initiatives that aim to break barriers and bridge gaps in learning. Your donation will help in providing essential resources such as textbooks, school supplies, and technological tools .",
    },
    {
      title: "Expansion of the school",
      description:
        "  Your support will enable us to construct additional classrooms, libraries, laboratories, and recreational spaces, ensuring that every child has access to a well-rounded education.",
    },
  ];

  return (
    <section
      className="why_section layout_padding text-center pb-5"
      id="donatePage"
    >
      <div style={{ background: "#362a96" }} className="py-5 text-center">
        <div className="d-flex justify-content-center">
          <h1 className="p-3">
            <a
              href="#Donate"
              style={{ textDecoration: "none", color: "white" }}
            >
              Donate
            </a>
          </h1>
        </div>
      </div>

      <div id="service" className="card-section">
        <div className="card-container">
          {data.map((item, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h5 className="align-items-center justify-content-center d-flex px-4 font-weight-bold text-center">
                    {item.title}
                  </h5>
                </div>
                <div className="flip-card-back">
                  <p className="  text-white px-3 ">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation section */}
      <Flutter />
    </section>
  );
};

export default donatePage;
