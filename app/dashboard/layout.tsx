"use client";
import React from "react";
import Image from "next/image";
import { Aside } from "@/components";
import { NextPage } from "next";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import axios from "axios";

interface Props {
    children: React.ReactNode;
}

const getUser = async () => {
    const data = await axios.get("/api/user");

    return data;
};
const layout: NextPage<Props> = ({ children }) => {
    const segment = useSelectedLayoutSegment();
    const user = use(getUser());

    console.log(user);

    return (
        <div className="flex lg:flex-row flex-col  ">
            <Aside />

            <div className="  lg:w-4/5 relative">
                <div className="shadow-md p-5 flex justify-between items-center">
                    <p className=" capitalize font-semibold font-montserrat text-primary-grey ">
                        {segment ? segment : "Discover"}
                    </p>
                    <Link
                        href={"/dashboard/profile"}
                        className="h-[40px] w-[40px] rounded-full border-[1px]"
                    ></Link>
                </div>
                {children}
            </div>
        </div>
    );
};

export default layout;
