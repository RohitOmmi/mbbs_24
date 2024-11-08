import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Layout from "./Layout";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function CustomSlider() {
    // State to manage visibility of the Hslider component
    const [showSlider, setShowSlider] = useState(false);
    const [showSlider2, setShowSlider2] = useState(false)
    // Function to handle "Know more" button click
    const handleKnowMoreClick = () => {
        setShowSlider(!showSlider); // Toggle the visibility of the slider
        setShowSlider2(false);
    };

    const handleKnowMoreClick2 = () => {
        setShowSlider2(!showSlider2);
        setShowSlider(false);

    };

    return (
        <div className="py-10 lg:py-32 bg-[#004740]">
            <Layout>
                <div>
                    <h2 className="w-full text-[#F4E4C9] text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center">
                        Courses Offered By GIMSR
                    </h2>

                    <div className=" grid grid-cols-2  mt-6 md:mt-12 ">
                        <div className=" grid grid-rows-2 flex-col p-20">
                            { showSlider || showSlider2 ? "" : 
                            <>
                            <h1 className="text-[#F4E4C9] text-xl md:text-2xl font-bold">
                                M.D. (Doctor of Medicine)
                            </h1> 
                            <button
                                className="text-right underline decoration-1 text-[#F4E4C9]"
                                onClick={handleKnowMoreClick}
                            >
                                {showSlider ? "" : "Know more"}
                            </button>
                            </>
}
                        </div>
                        <div className=" grid grid-rows-2 flex-col p-20">
                        { showSlider || showSlider2 ? "" : 
                        <>
                            <h1 className="text-[#F4E4C9] text-xl md:text-2xl font-bold">
                                M.S. (Master of Surgery)
                            </h1>

                            <button
                                className="text-right underline decoration-1 text-[#F4E4C9]"
                                onClick={handleKnowMoreClick2}
                            >
                                {showSlider2 ? "" : "Know more"}
                            </button>
                            </>
}
                        </div>
                        

                    </div>

                    {/* Conditionally render the slider based on state */}
                    {showSlider &&
                        <div className={`slider-container ${showSlider ? "show" : "hide"} text-left p-5 bg-[#004740] text-[#F4E4C9] text-xl`}>
                            <Hslider />


                            <div className="text-right">
                                <button
                                    className=" underline decoration-1 text-[#F4E4C9]"
                                    onClick={handleKnowMoreClick}
                                >
                                    {showSlider ? "Go Back" : "Know more"}
                                </button>
                            </div>
                        </div>
                    }
                    {showSlider2 && <div className={`slider-container ${showSlider2 ? "show" : "hide"}  text-left p-5 bg-[#004740] text-[#F4E4C9] text-xl`}>
                        <Hslider2 />

                        <div className="text-right">
                                <button
                                    className=" underline decoration-1 text-[#F4E4C9]"
                                    onClick={handleKnowMoreClick}
                                >
                                    {showSlider2 ? "Go Back" : "Know more"}
                                </button>
                            </div>
                    </div>}
                </div>
            </Layout>
        </div>
    );
}

function Hslider() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "transparent !important",
                    zIndex: 1,

                    position: "absolute",
                    left: "0%",
                    bottom: "-30px",
                    top: "120%",
                    transform: "translateX(-50%) rotate(90deg)",

                }}
                onClick={onClick}
            />

        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "transparent !important",
                    zIndex: 1,

                    position: "absolute",
                    left: "0%",
                    bottom: "-30px",
                    top: "-30%",
                    transform: "translateX(-50%) rotate(90deg)",

                }}
                onClick={onClick}
            />

        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />, // Custom next arrow
        prevArrow: <SamplePrevArrow />, // Custom previous arrow
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        },
    };

    return (
        <Slider {...settings}>
            <div className="p-2 ">
                <h3>1. M.D.(Anaesthesiology)</h3>
            </div>
            <div className="p-2">
                <h3>2. M.D.(Community Medicine)</h3>
            </div>
            <div className="p-2">
                <h3>3. M.D.(Dermatology, Venereology and Leprosy)</h3>
            </div>
            <div className="p-2">
                <h3>4. M.D.(General Medicine)</h3>
            </div>
            <div className="p-2">
                <h3>5. M.D.(Paediatrics)</h3>
            </div>
            <div className="p-2">
                <h3>6. M.D.(Pathology)</h3>
            </div>
            <div className="p-2">
                <h3>7. M.D.(Psychiatry)</h3>
            </div>
            <div className="p-2">
                <h3>8. M.D.(Radio-diagnosis)</h3>
            </div>
            <div className="p-2">
                <h3>9. M.D.(Respiratory Medicine)</h3>
            </div>
        </Slider>
    );
}

function Hslider2() {
    const [activeSlide, setActiveSlide] = useState(0);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "transparent !important",
                    zIndex: 1,

                    position: "absolute",
                    left: "0%",
                    bottom: "-30px",
                    top: "120%",
                    transform: "translateX(-50%) rotate(90deg)",

                }}
                onClick={onClick}
            />

        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "transparent !important",
                    zIndex: 1,

                    position: "absolute",
                    left: "0%",
                    bottom: "-30px",
                    top: "-30%",
                    transform: "translateX(-50%) rotate(90deg)",

                }}
                onClick={onClick}
            />

        );
    }


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // beforeChange: function (currentSlide, nextSlide) {
        //     setActiveSlide(nextSlide);
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function (currentSlide) {
        //     setActiveSlide(currentSlide-1);
        //     console.log("after change", currentSlide);
        // },
    };

    return (





        <Slider {...settings}>
            {['M.S. (General Surgery)', 'M.S. (Obstetrics and Gynaecology)', 'M.S. (Ophthalmology)', 'M.S. (Orthopaedics)', 'M.S. (Otorhinolaryngology)'].map((item, index) => (
                <div key={index} className="p-2">
                    <h3
                    // style={{
                    //     fontSize: activeSlide === index ? '24px' : '16px', // Larger font for active slide
                    //     transition: 'font-size 0.3s ease', // Smooth transition
                    // }}
                    >
                        {index + 1}. {item}
                    </h3>
                </div>
            ))}
        </Slider>


    )
}

// function Hslider2() {
//     const [activeSlide, setActiveSlide] = useState(0);

//     function SampleNextArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={className}
//                 style={{ ...style, display: "block", background: "red", zIndex: 1 }}
//                 onClick={onClick}
//             >
//                 <IoIosArrowUp />
//             </div>
//         );
//     }

//     function SamplePrevArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={className}
//                 style={{ ...style, display: "block", background: "green", zIndex: 1 }}
//                 onClick={onClick}
//             >
//                 <IoIosArrowDown />
//             </div>
//         );
//     }

//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         vertical: true,
//         verticalSwiping: true,
//         swipeToSlide: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         beforeChange: function (currentSlide, nextSlide) {
//             console.log("before change", currentSlide, nextSlide);
//         },
//         afterChange: function (currentSlide) {
//             setActiveSlide(currentSlide);  // Update active slide
//             console.log("after change", currentSlide);
//         },
//     };

//     return (
//         <Slider {...settings}>
//             {['M.S. (General Surgery)', 'M.S. (Obstetrics and Gynaecology)', 'M.S. (Ophthalmology)', 'M.S. (Orthopaedics)', 'M.S. (Otorhinolaryngology)'].map((item, index) => (
//                 <div key={index}>
//                     <h3
//                         style={{
//                             fontSize: activeSlide === index ? '24px' : '16px', // Larger font for active slide
//                             transition: 'font-size 0.3s ease', // Smooth transition
//                         }}
//                     >
//                         {index + 1}. {item}
//                     </h3>
//                 </div>
//             ))}
//         </Slider>
//     );
// }

// export default Hslider2;

export default CustomSlider;
