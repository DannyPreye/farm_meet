import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";

import { dashboardMenus } from "@/lib/utils";

const MenuContent = ({ segment }: { segment: string | null }) => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        });
        Aos.refresh();
    }, []);

    return (
        <div className="hidden lg:flex flex-col  w-[80%] items-start gap-5 cursor-pointer">
            {dashboardMenus.map((menu, index) => (
                <Link
                    data-aos="fade-up"
                    data-aos-delay={1000 * (index + 1)}
                    href={menu.link}
                    key={`menu_${menu.name}`}
                    className="flex items-center justify-between gap-[18px]"
                >
                    <>
                        {segment === menu.link.split("/")[2] ? (
                            <Image src={menu.activeIcon} alt={menu.name} />
                        ) : (
                            <Image src={menu.inactiveIcon} alt={menu.name} />
                        )}
                    </>
                    <span
                        className={`${
                            segment === menu.link.split("/")[2]
                                ? "text-primary font-[800]"
                                : "text-primary-grey font-[600] "
                        } text-[24px]"`}
                    >
                        {menu.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default MenuContent;
