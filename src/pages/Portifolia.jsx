import React, { useEffect, useState } from "react";

import BabyClassImage1 from "./img/babya.png";
import BabyClassImage2 from "./img/babyb.png";
import BabyClassImage3 from "./img/babyc.png";
import BuildingsImage1 from "./img/buildinga.png";
import BuildingsImage2 from "./img/buildingb.JPG";
import BuildingsImage3 from "./img/buildingc.JPG";
import pOneClassImage1 from "./img/p1a.png";
import pOneClassImage2 from "./img/p1b.png";
import pOneClassImage3 from "./img/p1c.png";
import sportsImage1 from "./img/sportsa.png";
import sportsImage2 from "./img/sportsb.png";
import sportsImage3 from "./img/sportsc.png";
import staffImage1 from "./img/staffa.png";
import staffImage2 from "./img/staffb.png";
import staffImage3 from "./img/staffc.png";
import TopClassImage1 from "./img/topa.png";
import TopClassImage2 from "./img/topb.png";
import TopClassImage3 from "./img/topc.png";

const Portifolia = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(null);

  const photos = [
    { img: BabyClassImage1, category: "Baby Class" },
    { img: BabyClassImage2, category: "Baby Class" },
    { img: BabyClassImage3, category: "Baby Class" },
    { img: BuildingsImage1, category: "Buildings" },
    { img: BuildingsImage2, category: "Buildings" },
    { img: BuildingsImage3, category: "Buildings" },
    { img: pOneClassImage1, category: "P.1 & P.2" },
    { img: pOneClassImage2, category: "P.1 & P.2" },
    { img: pOneClassImage3, category: "P.1 & P.2" },
    { img: sportsImage1, category: "Sports" },
    { img: sportsImage2, category: "Sports" },
    { img: sportsImage3, category: "Sports" },
    { img: staffImage1, category: "Staff photos" },
    { img: staffImage2, category: "Staff photos" },
    { img: staffImage3, category: "Staff photos" },
    { img: TopClassImage1, category: "Top Class" },
    { img: TopClassImage2, category: "Top Class" },
    { img: TopClassImage3, category: "Top Class" },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePhotoClick = (photo, categoryTitle) => {
    setSelectedPhoto(photo);
    setSelectedCategoryTitle(categoryTitle);
  };

  const [typedText, setTypedText] = useState("");
  const targetText = "  Images";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setTypedText(targetText.slice(0, index));
      index += 1;

      if (index > targetText.length) {
        index = 0;
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" border-bottom border-white">
      <div className="container myGaley">
        <div className="">
          <h1 className="text-center mb-5 pt-5 ">Our Gallery</h1>
          <p className="text-center ">
            Click on these buttons to view{" "}
            <span className="Us">{typedText}</span>
          </p>
          <div className="my-4 d-flex align-items-center justify-content-center">
            <ul className="scroll-container  filtersBtns">
              <li
                className={`lists  ${
                  selectedCategory === null ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(null)}
              >
                <b>All Categories</b>
              </li>
              <li
                className={`mx-4 lists ${
                  selectedCategory === "Baby Class" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Baby Class")}
              >
                <b>Baby Class</b>
              </li>
              <li
                className={`lists ${
                  selectedCategory === "Buildings" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Buildings")}
              >
                <b>Buildings</b>
              </li>
              <li
                className={`mx-4 lists ${
                  selectedCategory === "P.1 & P.2" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("P.1 & P.2")}
              >
                <b>P.1 & P.2</b>
              </li>
              <li
                className={`lists ${
                  selectedCategory === "Sports" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Sports")}
              >
                <b>Sports</b>
              </li>
              <li
                className={`lists mx-4 ${
                  selectedCategory === "Staff photos" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Staff photos")}
              >
                <b>Staff photos</b>
              </li>
              <li
                className={`lists ${
                  selectedCategory === "Top Class" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Top Class")}
              >
                <b>Top Class</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          {selectedCategory === null
            ? photos.map((photo, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                  onClick={() => handlePhotoClick(photo.img, photo.category)}
                >
                  <div className="img-box">
                    <img src={photo.img} className="w-100 rounded" alt="" />
                  </div>
                </div>
              ))
            : photos
                .filter((photo) => photo.category === selectedCategory)
                .map((photo, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
                    onClick={() => handlePhotoClick(photo.img, photo.category)}
                  >
                    <div className="img-box">
                      <img src={photo.img} className="w-100 rounded" alt="" />
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Portifolia;
