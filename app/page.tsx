"use client";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";

import { logoImage } from "@/public/shared";

export default function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1500,
        });
        Aos.refresh();

        setTimeout(() => {
            window.location.href = "/auth/signin";
        }, 2000);
    }, []);

    return (
        <main className="grid place-items-center h-screen bg-white">
            <Image
                data-aos="flip-up"
                data-aos-easing="ease-in-sine"
                src={logoImage}
                alt="Farmmeet"
                width={500}
                height={500}
                className=" object-contain"
            />
        </main>
    );
}
