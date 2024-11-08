import React, { useState } from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import img1 from "../Assets/GITAM-Lp-June-2024-1.png";
import img2 from "../Assets/GITAM-Lp-June-2024-2.png";
import img3 from "../Assets/GITAM-Lp-June-2024-3.png";
import img4 from "../Assets/GITAM-Lp-June-2024-4.png";
import mobileimg1 from "../Assets/GITAM-Lp-Mobile-June-2024-1.png";
import mobileimg2 from "../Assets/GITAM-Lp-Mobile-June-2024-2.png";
import mobileimg3 from "../Assets/GITAM-Lp-Mobile-June-2024-3.png";
import mobileimg4 from "../Assets/GITAM-Lp-Mobile-June-2024-4.png";

const CampusLife = () => {
  const [currentImage, setCurrentImage] = useState(img1);
  const [mobileCurrentImage, setMobileCurrentImage] = useState(mobileimg1);

  const images = {
    "Vibrant Festivities": img1,
    "Comfortable Hostels": img2,
    "Diverse Student Clubs": img3,
    "Sports Excellence": img4,
  };

  const mobileImages = {
    "Vibrant Festivities": mobileimg1,
    "Comfortable Hostels": mobileimg2,
    "Diverse Student Clubs": mobileimg3,
    "Sports Excellence": mobileimg4,
  };

  const handleImageChange = (heading) => {
    setCurrentImage(images[heading]);
    setMobileCurrentImage(mobileImages[heading]);
  };

  return (
    <div className="py-8 md:py-24">
      <Layout>
        <Heading title={"Life on Campus"} />
        <p className="w-full md:w-8/12 mx-auto text-center">
          GITAM fosters a vibrant culture that keeps the student body engaged
          with a calendar packed with cultural events, conferences, exhibitions,
          sports and a lot more
        </p>
        <div className="mx-auto w-11/12 sm:w-full mt-4 md:mt-12 rounded-xl sm:rounded-3xl overflow-hidden relative">
          <picture>
            <source media="(max-width: 640px)" srcSet={mobileCurrentImage} />
            <source media="(min-width: 641px)" srcSet={currentImage} />
            <img src={currentImage} className="w-full " alt="Campus images" />
          </picture>
          <div className="w-full absolute bottom-10 sm:top-6 lg:top-1/4 left-0 sm:left-10 lg:left-1/4 text-white font-semibold text-xl sm:text-lg lg:text-2xl grid grid-cols-1 gap-y-4 sm:gap-y-1 lg:gap-y-6">
            {Object.keys(images).map((heading) => (
              <h5
                key={heading}
                onClick={() => handleImageChange(heading)}
                className="cursor-pointer w-full text-center sm:text-left"
              >
                {heading}
              </h5>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CampusLife;