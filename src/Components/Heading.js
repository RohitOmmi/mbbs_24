import React from "react";

const Heading = ({ title, usertitle = "false" }) => {
  return (
    <h2
      className={
        usertitle === "true"
          ? "w-full text-white text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center"
          : "w-full text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center"
      }
    >
      {title}
    </h2>
  );
};

export default Heading;
