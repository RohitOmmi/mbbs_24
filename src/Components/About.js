import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "./Layout";
import { IoIosCheckmarkCircle } from "react-icons/io";

const About = () => {
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",
    otp: "",
    city: "",
    neet_roll: "",
    neet_rank: "",
    score: "",
    agreement: true,
    file: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pageurl, setpageurl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmCampaignParam = urlParams.get("utm_campaign") || "";
    const utmMediumParam = urlParams.get("utm_medium") || "";
    const utmSourceParam = urlParams.get("utm_source") || "";
    const keywordParam = urlParams.get("keyword") || "";
    const currentUrlparam = window.location.href;

    setUtmCampaign(utmCampaignParam);
    setUtmMedium(utmMediumParam);
    setUtmSource(utmSourceParam);
    setKeyword(keywordParam);
    setpageurl(currentUrlparam);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleChange = async (e) => {
    const { name, value, type, checked, files } = e.target;
    let isValid = true;
    let errorMsg = "";
    // Remove spaces for specific fields
    //const trimmedValue = ["name","email","mobile","otp","neet_roll", "neet_rank", "score", "city"].includes(name) ? value.replace(/\s/g, '') : value;
    const trimmedValue = [
      "name",
      "email",
      "mobile",
      "otp",
      "neet_roll",
      "neet_rank",
      "score",
      "city",
    ].includes(name)
      ? value.trimStart()
      : value;

    if (type === "file") {
      const file = files[0];
      if (
        file &&
        (
          //file.type === "image/jpeg" ||
         // file.type === "image/png" ||
          //file.type === "image/jpg" ||
          file.type === "application/pdf")
      ) {
        setFormData({
          ...formData,
          [name]: file,
        });
        setErrors({
          ...errors,
          file: "",
        });
      } else {
        setErrors({
          ...errors,
          file: "Please upload only pdf format.",
        });
        e.target.value = null;
      }
    } else {
      // Validate the inputs
      if (name === "name") {
        isValid = /^[a-zA-Z ]*$/.test(value);
        errorMsg = isValid ? "" : "Name can only contain letters and spaces.";
      } else if (name === "mobile") {
        isValid = /^[0-9]*$/.test(value) && trimmedValue !== "0000000000";
        errorMsg = isValid ? "" : "Please enter valid mobile number";
      } else if (name === "neet_roll") {
        isValid = /^[0-9]*$/.test(trimmedValue) && trimmedValue.length <= 12 && trimmedValue !== "000000000000";
        errorMsg = isValid ? "" : "Please enter valid neet roll number.";
      } else if (name === "neet_rank") {
        isValid = /^[0-9]*$/.test(trimmedValue) && trimmedValue.length <= 7 && Number(trimmedValue) <= 2400000 && trimmedValue !== "0000000";
        errorMsg = isValid ? "" : "Please enter valid neet rank";
        formData.neet_rank = "";
      } else if (name === "score") {
        
        const scoreValue = parseInt(trimmedValue, 10);
        isValid = /^[0-9]{1,3}$/.test(trimmedValue) && scoreValue >= 0 && scoreValue <= 720 && trimmedValue !== "000";
        errorMsg = isValid ? "" : "Please enter valid neet score.";
        formData.score = "";
      } // else if (name === "email") {
      //   isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      //   errorMsg = isValid ? "" : "Please enter a valid email address.";
      // }
      if (isValid) {
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : trimmedValue,
          //[name]: type === "checkbox" ? checked : value,
        });
        setErrors({
          ...errors,
          [name]: "",
        });
      } else {
        setErrors({
          ...errors,
          [name]: errorMsg,
        });
      }

      if (name === "city" && value.length > 1) {
        // Fetch city suggestions based on input
        try {
          const response = await axios.get(
            `https://programmes.gitam.edu/Admin/api/getCities?query=${value}`
          );
          setCitySuggestions(response.data);
        } catch (error) {
          console.error("Error fetching city suggestions:", error);
        }
      } else {
        setCitySuggestions([]);
      }
    }
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
    } else if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };
  const handlemobileBlur = () => {
    const mobile = formData.mobile; // Get the mobile value from formData
    const mobileRegex = /^\d{10,15}$/;

    if (!mobile) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Mobile number is required.",
      }));
    } else if (mobile.length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Mobile number must be at least 10 digits.",
      }));
    } else if (!mobileRegex.test(mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Invalid mobile number.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "",
      }));
    }
  };
  const handleneetrollBlur = () => {
    const neet_roll = formData.neet_roll; // Get the mobile value from formData
    const neet_rollRegex = /^[0-9]{10,12}$/; 
    if (neet_roll.length !== 10 && neet_roll.length !== 12) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        neet_roll: "NEET roll number must be exactly 10 or 12 digits.",
      }));
      formData.neet_roll = ""
    } else if (!neet_rollRegex.test(neet_roll)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        neet_roll: "Invalid neet roll number.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        neet_roll: "",
      }));
    }
  };
  useEffect(() => {
    const checkFormValidity = () => {
      const {
        name,
        email,
        mobile,
        neet_roll,
        city,
        otp,
        neet_rank,
        score,
        agreement,
        file,
      } = formData;
      setIsFormValid(
        name &&
          email &&
          mobile &&
          neet_roll &&
          city &&
          agreement &&
          otp &&
          neet_rank &&
          score &&
          file
      );
    };

    checkFormValidity();
  }, [formData]);

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Please enter a valid Name!";
    if (!formData.email)
      formErrors.email = "Please enter a valid email address!";
    if (!formData.mobile)
      formErrors.mobile = "Please enter a valid mobile number!";
    if (!formData.otp) formErrors.otp = "Please enter a OTP!";
    if (!formData.city) formErrors.city = "Please select a city!";
    if (!formData.neet_roll)
      formErrors.neet_roll = "Please enter neet roll number!";
    if (!formData.neet_rank) formErrors.neet_rank = "Please enter neet rank !";
    if (!formData.score) formErrors.score = "Please enter neet!";
    if (!formData.file) formErrors.file = "Please upload a file!";
    if (!formData.agreement)
      formErrors.agreement = "Please agree to the terms!";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const resend_otp_timer = () => {
    clearInterval(window.timerInterval); // Clear any existing interval
    const now = new Date();
    now.setMinutes(now.getMinutes() + 1);
    const countDownDate = now.getTime();

    window.timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const timeLeft = `${minutes * 60 + seconds} Sec`;
      if (distance < 0) {
        clearInterval(window.timerInterval);
        document.getElementById("sendOtp").innerHTML = "Resend OTP";
      } else {
        document.getElementById("sendOtp").innerHTML = timeLeft;
      }
    }, 1000);
  };

  const handleOtpSend = async () => {
    if (
      formData.name !== "" &&
      formData.mobile !== "" &&
      formData.email !== ""
    ) {
      try {
        const response = await axios.post(
          "https://programmes.gitam.edu/Admin/api/sendmbbsotp/",
          {
            mobile: formData.mobile,
            name: formData.name,
            email: formData.email,
          }
        );
        //console.log(response.data.status);
        if (response.data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "OTP Sent",
            text: response.data.message,
          });
          setIsOtpSent(true);
          resend_otp_timer();
          document.getElementById("sendOtp").textContent = "59 Sec";
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: response.data.message,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message || "Something went wrong!",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill required fields(Name/Mobile/Email)!",
      });
    }
  };

  const handleOtpVerify = async () => {
    if (
      formData.name !== "" &&
      formData.mobile !== "" &&
      formData.email !== "" &&
      formData.otp !== ""
    ) {
      try {
        const response = await axios.post(
          "https://programmes.gitam.edu/Admin/api/validate-otp2/",
          {
            mobile: formData.mobile,
            name: formData.name,
            email: formData.email,
            otp: formData.otp,
          }
        );
        if (response.data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "OTP Verified",
            text: response.data.message,
          });

          setIsOtpVerified(true);
          var sendOtpButton = document.getElementById("sendOtp");
          if (sendOtpButton) {
            sendOtpButton.style.display = "none";
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: response.data.message,
          });
          setIsOtpVerified(false);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message || "Please enter valid OTP!",
        });
        //document.getElementById('otp').value = '';
        setIsOtpVerified(false);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill required fields!",
      });
    }
  };
  const handleCitySelect = (city) => {
    setFormData({
      ...formData,
      city: city.city + "," + city.state, // Assuming 'name' is the property containing the city name
    });
    setCitySuggestions([]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate() && isOtpVerified) {
      setSubmitting(true);
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }
      form.append("utmCampaign", utmCampaign);
      form.append("utmMedium", utmMedium);
      form.append("utmSource", utmSource);
      form.append("keyword", keyword);
      form.append("pageurl", pageurl);

      try {
        const response = await axios.post(
          "https://programmes.gitam.edu/Admin/api/savembbs/",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: response.data.message,
          });
          setFormData(initialFormData);
          setIsOtpSent(false);
          setIsOtpVerified(false);
          fileInputRef.current.value = null; // Reset the file input
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: response.data.message || "Something went wrong!",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.response.data.message || "Something went wrong!",
        });
      } finally {
        setSubmitting(false); // Reset button text after submission completes
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error!",
        text: "Please fill all the required fields correctly.",
      });
    }
  };

  /* Read More  description */

  useEffect(() => {
    setIsMobileView(window.innerWidth < 768);
    // console.log(window.innerWidth);
  }, [window.innerWidth]);

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="py-8 md:py-24 md:pb-0">
        <Layout>
          <div className="grid lg:grid-cols-2 gap-8 ">
            <div>
              <h2 className="text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              GITAM Institute of Medical Sciences and Research (GIMSR)
              </h2>

              <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-2 md:mt-8 text-justify md:text-left">
                {isMobileView ? (
                  <>
                    <span className="excerpt">
                    Discover GIMSR, your gateway to excellence in medical education! 
                    Established in 2015, we are the first deemed medical college in 
                    Andhra Pradesh, nestled alongside the picturesque GITAM (Deemed to be University) campus in Visakhapatnam.
                    </span>
                    {isExpanded && (
                      <span className="more-text">
                         With 600 undergraduate students and post-graduate programmes
                          in 12 clinical and 2 para-Clinical disciplines, we offer 
                          top-notch medical education, attracting students from all corners
                           of India and beyond. Our serene environment and modern amenities 
                           foster the growth of outstanding medical professionals. Benefit 
                           from strong academic and research linkages within GITAM 
                           Deemed to be University, providing incredible opportunities 
                           or learning and research. Explore our sprawling campus with 
                           state-of-the-art facilities, including museums, libraries, and sports facilities.
                            Begin an exciting journey towards becoming an exceptional medical professional at GIMSR!
                      </span>
                    )}
                    <a href="#" className="read-more" onClick={toggleReadMore}>
                      {isExpanded ? "Read Less" : "Read More"}
                    </a>
                  </>
                ) : (
                  <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-2 md:mt-8 text-justify	md:text-left	">
                   Discover GIMSR, your gateway to excellence in medical education! Established in 2015, we are the first deemed
                    medical college in Andhra Pradesh, nestled alongside the picturesque GITAM (Deemed to be University) campus
                     in Visakhapatnam. With 600 undergraduate students and post-graduate programmes in 12 clinical and 2 para-Clinical disciplines
                     , we offer top-notch medical education, attracting students from all corners of India and beyond. Our serene environment and 
                     modern amenities foster the growth of outstanding medical professionals. Benefit from strong academic and research linkages 
                     within GITAM Deemed to be University, providing incredible opportunities for learning and research. Explore our sprawling campus
                      with state-of-the-art facilities, including museums, libraries, and sports facilities. Begin an exciting journey towards becoming
                       an exceptional medical professional at GIMSR!
                  </p>
                )}
              </p>
            </div>
            <div>
              <div
                id="applynow"
                className="bg-white feshadow p-4 md:p-6 rounded-lg xl:w-8/12 mx-auto relative margin z-10"
              >
                <h3 className="text-[#004740] text-xl font-semibold text-center">
                  Get in touch
                </h3>

                <div className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name*"
                          name="name"
                          maxLength="35"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="off"
                          disabled={isOtpVerified}
                        />
                        {errors.name && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleEmailBlur}
                          autoComplete="off"
                          disabled={isOtpVerified}
                        />
                        {errors.email && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="w-full relative">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number*"
                            maxLength="10"
                            minLength="10"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            autoComplete="off"
                            onBlur={handlemobileBlur}
                            disabled={isOtpVerified}
                          />
                          {/* {formData.mobile!='' && !isOtpVerified && (  */}
                          <button
                            type="button"
                            disabled={!formData.mobile}
                            className="form-control bg-[#007367] text-white absolute top-0 right-0 h-10 px-4"
                            onClick={handleOtpSend}
                            id="sendOtp"
                          >
                            {" "}
                            Send OTP
                          </button>
                          {/* )}  */}

                          {/* {isOtpSent && !isOtpVerified && (
                              <p className="text-sm text-gray-600 mt-2">
                                  Resend OTP in {otpTimer} seconds
                              </p>
                          )}
                    
                          {!isOtpSent || isOtpVerified ? (
                            <button type="button" disabled={!formData.mobile}
                              className="form-control bg-[#007367] text-white absolute top-0 right-0 h-10 px-4"
                              onClick={handleOtpSend} >Send OTP
                            </button>
                          ) : (
                            <button type="button"
                              className="form-control bg-gray-300 text-white absolute top-0 right-0 h-10 px-4 cursor-not-allowed"
                              disabled={true} onClick={handleOtpSend} >Resend OTP
                            </button>
                          )} */}
                        </div>

                        {errors.mobile && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.mobile}
                          </p>
                        )}
                      </div>
                      {isOtpSent && (
                        <div className="form-group">
                          <div className="w-full relative">
                            <input
                              type="text"
                              id="otp"
                              className="form-control"
                              placeholder="Enter OTP *"
                              name="otp"
                              value={formData.otp}
                              onChange={handleChange}
                              disabled={!isOtpSent || isOtpVerified}
                            />
                            <button
                              type="button"
                              className="form-control bg-[#007367] text-white absolute top-0 right-0 h-10 px-4"
                              onClick={handleOtpVerify}
                              disabled={isOtpVerified}
                            >
                              {isOtpVerified ? (
                                <span className="flex items-center gap-2">
                                  Verified OTP <IoIosCheckmarkCircle />
                                </span>
                              ) : (
                                <span>Verified OTP</span>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                      <div className="form-group relative">
                        <input
                          className={`form-control ${
                            errors.city ? "is-invalid" : ""
                          }`}
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City*"
                          maxLength="50"
                          value={formData.city}
                          onChange={handleChange}
                          autoComplete="off"
                          disabled={!isOtpVerified}
                        />
                        {citySuggestions.length > 0 && (
                          <ul className="w-full h-44 overflow-y-scroll bg-white absolute z-10 p-2 shadow-md rounded-md">
                            {citySuggestions.map((city, index) => (
                              <li
                                key={index}
                                onClick={() => handleCitySelect(city)}
                                className="text-sm border-b-2 p-2"
                              >
                                {city.city},{city.state}
                              </li>
                            ))}
                          </ul>
                        )}
                        {errors.city && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.neet_roll ? "is-invalid" : ""
                          }`}
                          placeholder="NEET Roll No*"
                          name="neet_roll"
                          value={formData.neet_roll}
                          onChange={handleChange}
                          disabled={!formData.city}
                          maxLength="12"
                          onBlur={handleneetrollBlur}
                        />
                        {errors.neet_roll && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.neet_roll}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.neet_rank ? "is-invalid" : ""
                          }`}
                          placeholder="NEET 2024 Rank*"
                          name="neet_rank"
                          value={formData.neet_rank}
                          onChange={handleChange}
                          disabled={!formData.neet_roll}
                          maxLength="12"
                          oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        />
                        {errors.neet_rank && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.neet_rank}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.score ? "is-invalid" : ""
                          }`}
                          placeholder="NEET Score*"
                          name="score"
                          value={formData.score}
                          onChange={handleChange}
                          disabled={!formData.neet_rank}
                          maxLength="7"
                          oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        />
                        {errors.score && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.score}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <span className="block text-lg mb-1 ">
                          NEET Score Card
                        </span>
                        <input
                          type="file"
                          className="form-control"
                          name="file"
                          accept="application/pdf"
                          ref={fileInputRef}
                          onChange={handleChange}
                          disabled={!formData.score}
                        />
                        {errors.file && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.file}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                            id="hs-checked-checkbox"
                            name="agreement"
                            value=""
                            checked={formData.agreement}
                            onChange={handleChange}
                            // disabled={!formData.file}
                          />
                          <label
                            for="hs-checked-checkbox"
                            className="ms-2 text-xs font-medium text-gray-900"
                          >
                            By clicking the ‘Submit' button, you consent to
                            receive communication from us such as our
                            newsletters, updates, new programme releases, etc
                            via email, SMS, WhatsApp, and voice call. GITAM
                            (Deemed to be University) is committed to protecting
                            the privacy of the visitor and user's personal
                            information. The information you provide will not be
                            sold, rented, given away or traded to any third
                            party not engaged by GITAM to perform authorized
                            services. You may opt-out at any time.
                          </label>
                        </div>
                        {errors.agreement && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.agreement}
                          </p>
                        )}
                      </div>
                      <div className="text-center mt-8 sabtn">
                        <button
                          type="submit"
                          className="bg-[#004740] py-3 px-6 text-xl text-white font-semibold"
                          disabled={
                            submitting || !isFormValid || !isOtpVerified
                          }
                        >
                          {submitting ? "Processing, please wait..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default About;
