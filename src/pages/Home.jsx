import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flutter from "./Flutter";

import Map from "./Map";
import Sample from "./img/sample.png";
import Sample2 from "./img/sample2.png";

import CardImage1 from "./img/childa.png";
import CardImage2 from "./img/childb.png";
import CardImage3 from "./img/childc.png";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = " Godliness";

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations
      once: true, // Animate elements only once
    });

    let index = 0;

    const intervalId = setInterval(() => {
      setTypedText(targetText.slice(0, index));
      index += 1;

      if (index > targetText.length) {
        index = 0; // Reset the index to start typing again
      }
    }, 300); // Adjust the typing speed as needed

    return () => clearInterval(intervalId);
  }, []);

  const HomeCarData = [
    {
      imgSrc: CardImage1,
      title: "Helping young",
      description:
        "Fact that is some children cannot access education due to uncertainities in life & so we aim at making sure that most of Ugandan children accquire education.",
    },
    {
      imgSrc: CardImage2,
      title: "Putting a smile on childrens face",
      description:
        "We want to make sure that all our children are happy & their embrace what the lord has given. Due to satsfaction from our services at moonland primary school. ",
    },
    {
      imgSrc: CardImage3,
      title: "Make sure we feed children",
      description:
        "Some children cannot acquire quality food during school time, and so as moonland we mind so much for the wellbeing of our children by providing to them food.",
    },
  ];

  const data = [
    {
      title: "Nutrition",
      description:
        "Your contribution will go towards providing nutritious meals, ensuring that a child doesn't go hungry during the school term. It will support initiatives that aim to deliver balanced and healthy meals, vital for their physical and cognitive development.",
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
    <section id="Home">
      <div className="Landingpage">
        <div className="justify-content-center align-items-center text-center">
          <h1 className="hometxt text-light">
            Welcome To Moonland Primary School
          </h1>
          <h1 className="text-light">
            <h1 className="text-light hometxt2">
              Excellency With <span className="Us">{typedText}</span>
            </h1>
          </h1>
        </div>
        <div className="button">
          <a href="#tableSection">
            {" "}
            <button type="submit" className="submit fs-5 py-2 px-4">
              Read More
            </button>
          </a>

          {/* <Link className="nav-link" to="/">
            <button type="submit" className="submit fs-5 py-2 px-4">
              Read More
            </button>
          </Link> */}
        </div>
      </div>
      {/* Our services cards section */}
      <section className="service_section layout_padding curved-top">
        <div className="service_container">
          <div className="container mb-5">
            <div className="heading_container heading_center text-center mt-5">
              <h2>
                Our <span className="Us">Services</span>
              </h2>
              <p className="py-3">
                Helping young children who cannot access education due to
                uncertainities like parents being poor or death of
                parents,abandoned children.Stand with us
              </p>
            </div>

            <div className="row">
              {HomeCarData.map((item, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <div className="box mt-3">
                    <div className="img-box">
                      <img className="w-100 rounded" src={item.imgSrc} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5 className="hidden">{item.title}</h5>
                      <p className="hidden">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Small info to contact us sesction */}
      <section className="container p-4 mb-3" id="tableSection">
        <div className="row py-5 bg-light rounded justify-content-center align-items-center d-flex">
          <div
            style={{ background: "#00bbf0" }}
            className="py-4 px-5 text-light rounded col-md-7 col-sm-none"
          >
            <h4>Moonland Primary School Genesis</h4>
            <p>
              The school, founded by Mr. Kasule Yoweri in 2018, aimed to
              establish a solid academic foundation for underprivileged children
              within the community. It is a Christian-founded institution that
              commenced its journey with 22 children and 3 teachers. Over time,
              owing to our commitment to excellence, the school has experienced
              significant growth, now catering to 180 children and employing 12
              teachers.
            </p>
          </div>
          <div
            style={{
              background: "#180f4f",
              borderColor: "#ffff",
              color: "#fff",
              zIndex: "4",
              marginLeft: "-40px",
            }}
            className="col-md-4 col-sm-none p-4 rounded"
          >
            <div className="align-items-center justify-content-center">
              <h4>For more information </h4>
              <p>Read more or Contact us</p>
            </div>
            <div className="d-flex gap-3">
              <button
                style={{ background: "#00bbf0", borderColor: "#00bbf0" }}
                className="btn "
              >
                <Link
                  style={{ textDecorationLine: "none", color: "#fff" }}
                  to="/about"
                >
                  Read More
                </Link>
              </button>

              <button
                style={{ background: "#00bbf0", borderColor: "#00bbf0" }}
                className="btn "
              >
                <Link
                  style={{ textDecorationLine: "none", color: "#fff" }}
                  to="/contact"
                >
                  Contact us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample section */}
      <section className="container ">
        <div className="row Samplesection mb-5 d-flex justify-content-center align-items-center">
          <div className="col-lg-6 SampleImage">
            <img className="w-100 " src={Sample2} alt="" />{" "}
          </div>
          <div className="col-lg-6 Sampletext  px-5  ">
            <h2> Empowering Potential:</h2>
            <p>
              Moonland Primary School stands as a beacon of hope in the heart of
              Africa, where the bright minds of countless children are nurtured
              and empowered to reach their full potential. Despite facing the
              harsh reality of limited access to education due to financial
              constraints, many African children possess remarkable talents and
              intelligence waiting to be unleashed. <br /> Tragically, some of
              these promising young minds find themselves on the streets,
              deprived of the opportunity to learn and excel. Moonland Primary
              School recognizes this injustice and has made it their mission to
              intervene, offering education and support to those who need it
              most.
            </p>
          </div>
        </div>

        <div className="row Samplesection mb-5 d-flex justify-content-center align-items-center">
          <div className="col-lg-6 Sampletext  px-5 ">
            <h2>Join Us in Empowering Every Child at Moonland:</h2>
            <p>
              At Moonland, every child is welcomed with open arms, regardless of
              their background or circumstances. The school's dedicated teachers
              and staff work tirelessly to provide a safe and nurturing
              environment where children can thrive academically, emotionally,
              and socially. However, Moonland cannot fulfill its mission alone.{" "}
              <br />
              The school extends a heartfelt invitation to anyone willing to
              stand with them in this noble journey of empowerment. Together, we
              can break down the barriers that hold back these bright young
              minds and pave the way for a brighter future for all.
            </p>
          </div>
          <div className="col-lg-6 SampleImage">
            <img className="w-100 " src={Sample} alt="" />{" "}
          </div>
        </div>
      </section>

      {/* text cards Sectio */}
      <div id="service" className="card-section">
        <div className="container heading_container heading_center text-center pt-5 ">
          {" "}
          <h2>
            The Following are our Department that still Require your Support
          </h2>
        </div>
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
      <Flutter />
      {/* Maplocation */}
      <Map />
    </section>
  );
};

export default Home;
