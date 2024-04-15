import React from "react";

import { Link } from "react-router-dom";
import teacher from "./img/childc.JPG";
import image from "./img/joel.png";
import AboutUsImage from "./img/topc.JPG";
const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      image: image,
      name: "Kasule Yoweri",
      position: "Director",
    },

    {
      id: 2,
      image: image,
      name: "Kasule Yeweri",
      position: "Head Teacher",
    },

    {
      id: 3,
      image: image,
      name: "Blessing",
      position: "Burser",
    },

    {
      id: 4,
      image: image,
      name: "Paul clean Heart",
      position: "Secretary",
    },
  ];
  return (
    <section className="about_section border-bottom">
      <div className="container">
        <div className="heading_container heading_center text-center">
          <h3>
            About <span className="Us">Us</span>
          </h3>
          <p>
            Moonland Primary School Bombo Kakerenge Excellency With Godliness
          </p>
        </div>
        <div className="row ">
          <div className="col-md-6 col-sm-12 mb-5">
            <div className="img-box">
              <img className="rounded" src={AboutUsImage} alt={AboutUsImage} />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-5">
            <div className="detail-box">
              <h3>We Are Moonland Primary School</h3>
              <p>
                Moonland primary school was established in 2018, with an aim of
                Helping young children who can not access education due to
                uncertainities like parents being poor, death of parents, and
                abandoned children. Though we have heart and willing to help the
                young generation, we are limited due to lack of funds. Therefore
                we call upon any good samaritan all over the world who can stand
                with us. Your small contribution to our school will help us
                provide quality education to the needy children.
              </p>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" py-5 text-center">
          <h2>
            Our <span className="Us"> Administrative Staff</span>
          </h2>
        </div>

        <div className="team_container pb-5">
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img
                      src={member.image}
                      className="img1 rounded"
                      alt={member.name}
                    />
                  </div>
                  <div className="detail-box text-center">
                    <div>
                      <h5>{member.name}</h5>
                    </div>
                    <div style={{ marginTop: "-10px" }}>{member.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" py-5 row justify-content-center align-items-center d-flex ">
          <div className="col-md-5 col-sm-10">
            {" "}
            <h2>
              Our <span className="Us"> Teaching Staff</span>
            </h2>
            <p>
              Our team of dedicated teachers brings a wealth of experience and
              expertise to our educational institution. Each member of our
              faculty is carefully selected not only for their academic
              qualifications but also for their passion for teaching and
              nurturing young minds.
            </p>
            <p>
              With years of experience in the field of education, our teachers
              have honed their skills to create engaging and dynamic learning
              environments where students thrive. They understand that every
              child is unique and possesses their own strengths and challenges.
              As such, they employ diverse teaching methodologies and approaches
              to cater to the individual needs of each student.
            </p>
            <p>
              Beyond academics, our teachers serve as mentors, guiding students
              not only in their studies but also in their personal growth and
              development. They foster a supportive and inclusive classroom
              atmosphere where students feel empowered to express themselves,
              ask questions, and explore their interests.
            </p>
          </div>
          <div className="col-md-5 col-sm-10">
            <img src={teacher} alt="" className="w-100 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
