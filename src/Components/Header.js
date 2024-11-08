import React, { useState, useEffect } from "react";
import Layout from "./Layout";
// import logo from "../Assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100; // Adjust the scroll threshold as needed
      if (isTop !== isScrolled) {
        setIsScrolled(isTop);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    // <div className="bg-white w-full py-3 shadow-lg relative z-10">
    <div
      className={
        isScrolled
          ? "relative bg-white w-full py-3 shadow-lg  z-10"
          : "fixed bg-white w-full py-3 shadow-lg z-50"
      }
    >
      <Layout>
        <div className="flex items-center justify-between">
          <div className="md:w-52 w-32">
            {/* <img src={logo} alt="gitam logo" className="w-full" /> */}
            <img
              src="https://cdn.gitam.edu/images/logo/gitam-new-logo.png"
              alt="gitam logo"
              // className="w-full"
            />
          </div>
          <div>
            <a
              href="#applynow"
              className="bg-[#007367] text-white py-1 px-2 md:py-2 md:px-3 uppercase text-base md:text-lg font-semibold"
            >
              Apply Now
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Header;
