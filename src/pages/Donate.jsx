import React from "react";
import Supportimge1 from "../pages/img/support 1.png";
import "./Css/Donate.css";
import Supportimge2 from "./img/support2.png";
import Supportimge3 from "./img/support3.png";

const donatePage = () => {
  // Data stored locally within the component
  const data = [
    {
      image: Supportimge1,
      title: "Nutrition",
      description:
        "With your generous donation of $100, you can make a significant impact on the life of a child by ensuring they receive essential necessities, quality education, and healthcare our contribution will go towards providing nutritious meals, ensuring that a child doesn't go hungry during the school term. It will support initiatives that aim to deliver balanced and healthy meals, vital for their physical and cognitive development.",
    },
    {
      image: Supportimge2,
      title: "Education",
      description:
        "Your donation of $100 can be a lifeline for a child's education, opening doors to a world of knowledge, opportunity, and empowerment. By contributing $100, you're providing crucial support for educational initiatives that aim to break barriers and bridge gaps in learning. Your donation will help in providing essential resources such as textbooks, school supplies, and technological tools necessary for effective learning.",
    },
    {
      image: Supportimge3,
      title: "Expansion of the school",
      description:
        " With your generous contribution, we can embark on a journey to expand our school facilities, accommodating more students and providing enhanced learning environments. Your support will enable us to construct additional classrooms, libraries, laboratories, and recreational spaces, ensuring that every child has access to a well-rounded education.",
    },
  ];

  return (
    <section
      className="why_section layout_padding text-center pb-5"
      id="donatePage"
    >
      <section className="donate-section">
        <div className="donate-content text-center">
          <h2>
            {" "}
            Support Our <span className="Us">Cause </span>
          </h2>
          <p>
            Your contribution can make a difference in the lives of many. Donate
            now to support our mission.
          </p>
          <button className="btn donatebtn text-light ">Donate Now</button>
          <p className="account-number">Account Number: 1325-5041-80239</p>
        </div>
      </section>

      <div className="container">
        <div className="heading_container heading_center text-center">
          <h1>Through the following departments you can support</h1>
        </div>
        <div className="why_container pt-3 pb-3 ">
          {data.map((item, index) => (
            <div className="box row justify-content-center " key={index}>
              <div className="img-box  col-6 ">
                <img src={item.image} alt="" />
              </div>
              <div className="detail-box  pb-5 ">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default donatePage;
