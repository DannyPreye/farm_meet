"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Aos from "aos";

import { logoImage } from "../../public/shared/";
import SignupContextProvider from "@/components/contexts/signUpContext";

interface Props {
    children: React.ReactNode;
}

const layout: NextPage<Props> = ({ children }) => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        });
        Aos.refresh();
    }, []);

    return (
        <SignupContextProvider>
            <div className="bg-white pb-8 lg:pb-0">
                <div className="container mx-auto px-5 lg:px-[56px] overflow-x-hidden flex items-center gap-2 justify-center lg:gap-5 lg:flex-row flex-col">
                    <div className="lg:h-full">
                        <Image
                            src={logoImage}
                            className="object-contain h-full w-full"
                            alt="logo image"
                            priority
                            width={500}
                            height={500}
                            data-aos="fade-right"
                        />
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-dalay={100 * 4}
                        className="lg:w-[60%] relative w-[100%] items-center  py-20  rounded-[48px] bg-primary"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </SignupContextProvider>
    );
};

export default layout;
