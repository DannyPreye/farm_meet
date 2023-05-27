import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelectedLayoutSegment } from "next/navigation";

import MenuContent from "./menu_content";

const Aside = () => {
    const segment = useSelectedLayoutSegment();
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <div
            style={{ boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="lg:w-[22%] z-[1220] bg-white flex lg:flex-col
             items-center lg:items-start px-[36px] justify-between py-[34px] 
              lg:h-screen lg:max-h-full sticky left-0 top-0 shadow-sm lg:shadow-md 
              "
        >
            <div className="w-[80px] h-[40px] relative lg:w-[177.19px] lg:h-[105px]">
                <Image
                    src={"/shared/logo.svg"}
                    className="object-contain"
                    fill
                    alt="farmmeet"
                />
            </div>

            {/* ---------------- menu icon --------------------- */}
            <div
                className="text-primary text-[20px] lg:hidden"
                onClick={() => setShowMenu((prev) => !prev)}
            >
                {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            {/* -------------------- lg-menu-content ----------------- */}
            <MenuContent segment={segment} />

            {/* --------------------- logout ---------------------- */}
            <Link
                href={"/"}
                className=" hidden lg:flex   text-[24px w-[80%] text-primary-grey   justify-start items-center gap-5"
            >
                <FiLogOut />
                <span className=" font-[600] ]">Logout</span>
            </Link>
        </div>
    );
};

export default Aside;
