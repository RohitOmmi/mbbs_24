import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import KeyHighlights from "../Components/KeyHighlights";
import About from "../Components/About";
import Admissions from "../Components/Admissions";
import Reporting from "../Components/Reporting";
import Eligibility from "../Components/Eligibility";
import Fee from "../Components/Fee";
import Scholarship from "../Components/Scholarship";
import WhyChoose from "../Components/WhyChoose";
import Academic from "../Components/Academic";
import Fearless from "../Components/Fearless";
import Experiences from "../Components/Experiences";
import CampusLife from "../Components/CampusLife";
import Footer from "../Components/Footer";
import SideLinks from "../Components/SideLinks";
import img from "../Assets/academic_1.png"
import CustomSlider from "../Components/customSlider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GIMSR MBBS Admissions 2024: Premier Medical College | Apply Now</title>
        <meta name="description" content="Join GIMSR for a standout MBBS education with advanced facilities, experienced faculty, and up to 100% merit scholarships. Choose GIMSR as your 1st choice in MBBS NEET counselling" />
        <meta name="keywords" content="MBBS, MBBS College, MBBS Admission 2024, Merit Scholarship, Medical College, Medical Training, GIMSR, Visakhapatnam, Neet Counseling, Healthcare Education" />

         {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="GIMSR MBBS Admissions 2024: Premier Medical College | Apply Now" />
        <meta property="og:description" content="Join GIMSR for a standout MBBS education with advanced facilities, experienced faculty, and up to 100% merit scholarships. Choose GIMSR as your 1st choice in MBBS NEET counselling" />
        <meta property="og:image" content={img} />
        <meta property="og:url" content="https://programmes.gitam.edu/" />
        <meta property="og:type" content="website" />
        
         {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GIMSR MBBS Admissions 2024: Premier Medical College | Apply Now" />
        <meta name="twitter:description" content="Join GIMSR for a standout MBBS education with advanced facilities, experienced faculty, and up to 100% merit scholarships. Choose GIMSR as your 1st choice in MBBS NEET counselling" />
        <meta name="twitter:image" content={img} />
      </Helmet>
      <div id="wrapper">
        <Header />
        <SideLinks />
        <Slider />
        <About />
        <KeyHighlights />
        <Admissions />
        <Eligibility />
        <Reporting />
        {/* <CustomSlider /> */}
        <Fee />
        <Scholarship />
        <WhyChoose />
        <Academic />
        <Experiences />
        <Fearless />
        <CampusLife />
        <Footer />
      </div>
    </>
  );
};

export default Home;
