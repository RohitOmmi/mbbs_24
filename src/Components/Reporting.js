import React from 'react'
import Layout from "./Layout";
 import img from "../Assets/Reporting-Procedure.png"
const Reporting = () => {
    return (
        <div className="py-10 lg:py-32">
            <Layout>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                            Reporting Procedure
                        </h2>
                        <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-2 md:mt-8 text-justify	md:text-left	">
                            Candidates allotted a seat in MD/MS through MCC PG Medical Counselling 2024 must complete the physical reporting
                            formalities at GIMSR, Visakhapatnam, as per the schedule displayed by MCC.
                        </p>
                        <ul>
                            <li>
                                <b>Documents:</b>
                                &nbsp;Candidates should report with original certificates/documents and a demand draft/online
                                transfer for the payment of tuition fees.
                            </li>
                            <li>
                                <b>Admission Process:</b>
                                &nbsp;GIMSR will upload the reporting details of the candidate to the MCC web portal. The provisional
                                admission letter, signed by the Principal, will be generated from MCC and issued to the candidate.
                             </li>
                        </ul>
                    </div>
                    <div>
                        <img src={img} alt="Reporting procedure" className="w-full" />
                       
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Reporting;