import AOS from "aos";
import { closePaymentModal, FlutterWaveButton } from "flutterwave-react-v3";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../pages/img/logo.png";

import CardImage1 from "./img/childa.JPG";
import CardImage2 from "./img/childb.JPG";
import CardImage3 from "./img/childc.JPG";

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
        "We want to make sure that all our children are happy & their embrace what the lord has given. ",
    },
    {
      imgSrc: CardImage3,
      title: "Make sure we feed children",
      description: "Some children cannot acquire quality food.",
    },
  ];

  const tableDatabase = [
    { id: 1, title: "School Name", description: "Moonland Primary School" },
    { id: 2, title: "Phase OF Education", description: "Primary" },
    { id: 3, title: "Gender Of Entry", description: "Mixed" },
    {
      id: 4,
      title: "Religious Character",
      description: "Christian(Born again",
    },
    { id: 5, title: "Number Of Pupils", description: "210" },
    {
      id: 6,
      title:
        "Percentage Of Children Who Are Not Able To Pay School Fees And Lunch",
      description: "95%",
    },
  ];

  const config = {
    public_key: "FLWPUBK_TEST-a1c29d8087408fa62510daf166e3ae8e-X",
    tx_ref: Date.now(),
    amount: 50,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "kasule616@gmail.com ",
      phone_number: "256 751 892 892",
      name: "Moonland Primary School",
    },
    customizations: {
      title: "Donate To Educate The Young Generetion",
      description: "Moonland Primary School ",
      logo: Logo,
    },
  };

  const fwConfig = {
    ...config,
    text: "Donate Now!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <section id="Home">
      <div className="Landingpage">
        <div className="justify-content-center align-items-center text-center">
          <h1 className="hometxt text-light">
            Welcome To Moonland Nursery And Primary School
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
                  <div className="box">
                    <div className="img-box">
                      <img className="w-100 rounded" src={item.imgSrc} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Small info to contact us sesction */}
      <section className="container p-4 mb-3">
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
            <div>
              <h4>For more information </h4>
              <p>Visit us or Contact us</p>
            </div>
            <button
              style={{ background: "#00bbf0", borderColor: "#00bbf0" }}
              className="btn "
            >
              <Link
                style={{ textDecorationLine: "none", color: "#fff" }}
                to="/contact"
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Donate section */}
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
          <FlutterWaveButton
            {...fwConfig}
            text="Donate Now"
            className="btn donatebtn text-light"
          />

          {/* <button className="btn donatebtn text-light ">Donate Now</button> */}
          <p className="account-number">
            To help young children acquire quality education
          </p>
        </div>
      </section>

      {/* Table section */}
      <section id="tableSection">
        <div style={{ background: "#362a96" }} className="py-1 text-center">
          <div className="d-flex justify-content-center">
            <h1 className="text-white">More About Moonland Primary School</h1>
          </div>
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
    </section>
  );
};

export default Home;
