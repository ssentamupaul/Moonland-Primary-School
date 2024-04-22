import React from "react";
import "./Css/Donate.css";
import Flutter from "./Flutter";

const donatePage = () => {
  // Data stored locally within the component

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
              Support our Cause
            </a>
          </h1>
        </div>
      </div>

      {/* Donation section */}
      <Flutter />
    </section>
  );
};

export default donatePage;
