"use client";
import React, { useState, useEffect, useCallback, useContext } from "react";
import Link from "next/link";

import { signupContext } from "@/components/contexts/signUpContext";
import {
    PrimaryButton,
    SignUpForm1,
    SignUpForm2,
    SignUpForm3,
    SignUpForm4,
    Pagination,
} from "@/components/auth";

const page = () => {
    const { signUpFormData, setSignUpFormData } = useContext(signupContext);

    const [activeForm, setActiveForm] = useState(0);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState<{
        name: string;
        code: string;
    } | null>();
    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState<{} | null>(null);

    return (
        <div className="grid ">
            <div className="flex gap-3 top-[-5%]  items-center w-[80%] absolute  mx-auto left-0 right-0 z-30">
                {[0, 1, 2, 3].map((_, index) => (
                    <Pagination
                        setActiveForm={setActiveForm}
                        index={index}
                        activeForm={activeForm}
                    />
                ))}
            </div>
            {/*------------- FORMS -------------- */}
            {activeForm == 0 && (
                <SignUpForm1
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                />
            )}
            {activeForm == 1 && (
                <SignUpForm2
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                />
            )}
            {/* {activeForm == 2 && (
                <SignUpForm3
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                    setSelectedCountry={setSelectedCountry}
                    selectedCountry={selectedCountry}
                    countries={countries}
                />
            )} */}
            {activeForm == 3 && (
                <SignUpForm4
                    signUpFormData={signUpFormData}
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                />
            )}

            <div className="grid items-center mt-[20px]">
                {/* <PrimaryButton
                    title="Next"
                    onClick={() => {
                        activeForm < 3 ? setActiveForm(activeForm + 1) : null;
                    }}
                /> */}
                <p className=" text-center mt-[20px] font-semibold text-primary-white w-fit mx-auto">
                    Already have an account?{" "}
                    <Link className="font-bold" href={"/auth/signin"}>
                        Sign in!
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
