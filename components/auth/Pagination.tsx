import React from 'react'

const Pagination = ({
    activeForm,
    index,
    setActiveForm,
}: {
    activeForm: Number;
    index: number;
    setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <span
            onClick={() => setActiveForm(index)}
            className={`w-[30%] cursor-pointer h-[5px] transition-colors duration-500 ${
                activeForm == index ? "bg-primary" : "bg-[#E3E7E4]"
            } rounded-full block "`}
        ></span>
    );
};

export default Pagination