import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "./Layout";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Aboutbackup = () => {
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",
    otp: "",
    city: "",
    program: "",
    neet_roll: "",
    neet_rank: "",
    score: "",
    agreement: false,
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
    if (type === "file") {
      const file = files[0];
      if (
        file &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/jpg" ||
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
          file: "Please upload a file in jpg, png, jpeg, or pdf format.",
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });

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
  useEffect(() => {
    const checkFormValidity = () => {
      const {
        name,
        email,
        mobile,
        neet_roll,
        city,
        program,
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
          program &&
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
    if (!formData.otp) formErrors.otp = "Please select a program!";
    if (!formData.city) formErrors.city = "Please select a city!";
    if (!formData.neet_roll)
      formErrors.neet_roll = "Please enter neet roll number!";
    if (!formData.neet_rank) formErrors.neet_rank = "Please enter neet rank !";
    if (!formData.score) formErrors.score = "Please enter neet!";
    if (!formData.program) formErrors.program = "Please select a program!";
    if (!formData.file) formErrors.file = "Please upload a file!";
    if (!formData.agreement)
      formErrors.agreement = "Please agree to the terms!";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
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
        text: "Please fill required dields!",
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
          "https://programmes.gitam.edu/Admin/api/validate-otp/",
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
        text: "Please fille required fields!",
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

  return (
    <>
      <div className="py-8 md:py-24 md:pb-0">
        <Layout>
          <div className="grid lg:grid-cols-2 gap-8 ">
            <div>
              <h2 className="text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                GITAM Institute of Medical Sciences and Research (GIMSR)
              </h2>
              <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-2 md:mt-8 text-justify	md:text-left	">
                Discover GIMSR, your gateway to excellence in medical education!
                Established in 2015, we are the first deemed medical college in
                Andhra Pradesh, nestled alongside the picturesque GITAM (Deemed
                to be University) campus in Visakhapatnam. With 600
                undergraduate students and post-graduate programmes in 12
                clinical and 2 para-Clinical disciplines, we offer top-notch
                medical education, attracting students from all corners of India
                and beyond. Our serene environment and modern amenities foster
                the growth of outstanding medical professionals. Benefit from
                strong academic and research linkages within GITAM Deemed to be
                University, providing incredible opportunities for learning and
                research. Explore our sprawling campus with state-of-the-art
                facilities, including museums, libraries, and sports facilities.
                Begin an exciting journey towards becoming an exceptional
                medical professional at GIMSR!
              </p>
            </div>
            <div>
              <div className="bg-white feshadow p-4 md:p-6 rounded-lg xl:w-8/12 mx-auto relative margin z-10">
                <h3 className="text-[#004740] text-xl font-semibold text-center">
                  Download Brochure
                </h3>
                <div className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name *"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
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
                          type="text"
                          className="form-control"
                          placeholder="Enter Email Address *"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
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
                            placeholder="Enter Mobile Number *"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            disabled={isOtpVerified}
                          />
                          {!isOtpSent && (
                            <button
                              type="button"
                              disabled={!formData.mobile}
                              className="form-control bg-[#007367] text-white absolute top-0 right-0 h-10 px-4"
                              onClick={handleOtpSend}
                            >
                              Send OTP
                            </button>
                          )}
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
                          className="form-control"
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
                          className="form-control"
                          placeholder="NEET Roll no*"
                          name="neet_roll"
                          value={formData.neet_roll}
                          onChange={handleChange}
                          disabled={!formData.city}
                          maxLength="100"
                          oninput="this.value=this.value.replace(/[^0-9]/g,'');"
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
                          className="form-control"
                          placeholder="NEET 2024 Rank*"
                          name="neet_rank"
                          value={formData.neet_rank}
                          onChange={handleChange}
                          disabled={!formData.neet_roll}
                          maxLength="100"
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
                          className="form-control"
                          placeholder="NEET Score*"
                          name="score"
                          value={formData.score}
                          onChange={handleChange}
                          disabled={!formData.neet_rank}
                          maxLength="100"
                          oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        />
                        {errors.score && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.score}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          disabled={!formData.score}
                        >
                          <option value="" selected>
                            Select Program *
                          </option>
                          <option value="MPP">
                            Master's Program in Public Policy (MPP)
                          </option>
                          <option value="Ph.D.">Ph.D.</option>
                        </select>
                        {errors.program && (
                          <p className="text-sm text-yellow-600 mt-1">
                            {errors.program}
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
                          onChange={handleChange}
                          disabled={!formData.program}
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
                            checked={formData.agreement}
                            onChange={handleChange}
                            disabled={!formData.program}
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
                      <div className="text-center mt-8">
                        <button
                          type="submit"
                          className="bg-[#004740] py-3 px-6 text-xl text-white font-semibold "
                          disabled={!isFormValid || submitting}
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

export default Aboutbackup;
