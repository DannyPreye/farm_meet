"use client";
import { NextPage } from "next";
import React from "react";

interface Props {
    children: React.ReactNode;
}
const Providers: NextPage<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default Providers;
