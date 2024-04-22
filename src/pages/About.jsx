import React from "react";
import Map from "./Map";
import AboutUsImage from "./img/buildinga.png";
import image from "./img/joel.png";
import image1 from "./img/joel1.png";
import image2 from "./img/joel2.png";
import image3 from "./img/joel4.png";
import teacher from "./img/staffa.png";
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
      image: image1,
      name: "Kemirembe Prossy",
      position: "Head Teacher",
    },

    {
      id: 3,
      image: image2,
      name: "Mirembe Aminah",
      position: "Burser",
    },

    {
      id: 3,
      image: image3,
      name: "Night Rebecca",
      position: "Secretary",
    },
  ];

  const tableDatabase = [
    { id: 1, title: "School Name", description: "Moonland Primary School" },
    { id: 2, title: "Phase OF Education", description: "Primary" },
    { id: 3, title: "Gender Of Entry", description: "Mixed" },
    {
      id: 4,
      title: "Religious Character",
      description: "Christian",
    },
    { id: 5, title: "Number Of Pupils", description: "180" },
    {
      id: 6,
      title:
        "Percentage Of Children Who Are Not Able To Pay School Fees And Lunch",
      description: "95%",
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
            <div className=" text-dark">
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
              <a href="#more">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Table section  */}
      <section id="tableSection">
        <div className="d-flex justify-content-center">
          <h1 className="text-dark">More About Moonland Primary School</h1>
        </div>
        <div className="container py-5">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {tableDatabase.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

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

        <section id="more">
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
                child is unique and possesses their own strengths and
                challenges. As such, they employ diverse teaching methodologies
                and approaches to cater to the individual needs of each student.
              </p>
              <p>
                Beyond academics, our teachers serve as mentors, guiding
                students not only in their studies but also in their personal
                growth and development. They foster a supportive and inclusive
                classroom atmosphere where students feel empowered to express
                themselves, ask questions, and explore their interests.
              </p>
            </div>
            <div className="col-md-5 col-sm-10">
              <img src={teacher} alt="" className="w-100 rounded" />
            </div>
          </div>
        </section>
      </div>

      {/* Map <section></section> */}
      <Map />
    </section>
  );
};

export default AboutUsPage;
