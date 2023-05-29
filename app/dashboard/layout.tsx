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
    try {
        const data = await axios.get("/api/user");
        return data.data?.user;
    } catch (error: any) {
        console.log(error.response.status);
    }
};

const userData = getUser();

const layout: NextPage<Props> = ({ children }) => {
    const segment = useSelectedLayoutSegment();
    const user = use(userData);

    return (
        <div className="flex lg:flex-row flex-col  ">
            <Aside />

            <div className="  lg:w-4/5 relative">
                <div className="z-[100] relative shadow-md p-5 hidden lg:flex justify-between items-center">
                    <p className=" capitalize font-semibold font-montserrat text-primary-grey ">
                        {segment ? segment : "Discover"}
                    </p>
                    <Link
                        href={"/dashboard/profile"}
                        className="h-[40px] w-[40px] rounded-full bg-gray-700 border-[1px] relative"
                    >
                        <Image
                            src={user?.profile_image}
                            fill
                            alt={`${user?.first_name} ${user?.last_name}`}
                        />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
};

export default layout;
