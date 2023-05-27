"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Formik, FormikErrors } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import Aos from "aos";

import { Input, IconButton } from "@/components/auth";

const page = async () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        });
        Aos.refresh();
    }, []);

    const router = useRouter();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    // :::::::::::::::::: HANDLE SUBMIT ::::::::::::::::::::::
    const handleSubmit = async (
        values: any,
        errors: FormikErrors<{
            email: string;
            password: string;
        }>
    ) => {
        const { email, password } = values;
        try {
            const response = await toast.promise(
                axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/auth/signin`,
                    {
                        email,
                        password,
                    }
                ),
                {
                    pending: "Logging in...",
                    success: "Logged in successfully",
                    error: "Error logging in",
                }
            );
            if (response.data.success) {
                toast.success(response.data.message);

                console.log("token", response.data.token);

                await axios.post(`/api/auth/signin`, {
                    token: response.data.token,
                });

                router.push("/dashboard");
            } else {
                toast.error(response.data.message);
            }
        } catch (error: any) {
            console.log(error);
            const errMessage =
                error.response.data.message || error.response.data.errors;

            if (Array.isArray(errMessage)) {
                errMessage.forEach((message) => toast.error(message.msg));
            } else {
                toast.error(errMessage);
            }
        }
    };

    return (
        <div className="w-full font-nunito ">
            <div className="grid gap-4">
                <Formik
                    onSubmit={(values) => {
                        handleSubmit(
                            values,
                            validationSchema.validateSync(values)
                        );
                    }}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({
                        values,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                    }) => (
                        <form
                            className="w-full mx-auto grid gap-2"
                            onSubmit={handleSubmit}
                        >
                            <div
                                data-aos="fade-right"
                                data-aos-delay={1000 * 1}
                            >
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onblur={handleBlur}
                                    error={errors.email && touched.email}
                                />
                            </div>
                            <p className="w-fit  text-red-700 mx-auto text-center">
                                {errors.email && touched.email && errors.email}
                            </p>
                            <div data-aos="fade-left" data-aos-delay={1000 * 2}>
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onblur={handleBlur}
                                />
                            </div>
                            <p className="w-fit  text-red-700 mx-auto text-center">
                                {errors.password &&
                                    touched.password &&
                                    errors.password}
                            </p>
                            <button
                                disabled={Object.keys(errors).length > 0}
                                type="submit"
                                className={`w-[80%]  duration-500 text-primary-white
         bg-secondary-green max-w-[461px] h-[55px] mx-auto
         rounded-[17px] font-bold mt-4 ${
             Object.keys(errors).length > 0
                 ? "opacity-50 cursor-not-allowed"
                 : "hover:scale-[.9]"
         }}`}
                            >
                                Signin
                            </button>
                        </form>
                    )}
                </Formik>
                <Link
                    data-aos="fade-left"
                    data-aos-delay={1000 * 4}
                    href={"/auth/forgot-password"}
                    className="font-semi w-fit mx-auto text-primary-white"
                >
                    Forgotten Password
                </Link>
                <div className="mx-auto mt-3 w-[80%] max-w-[461px] flex items-center gap-3">
                    <span className="w-[60%] h-[1px] bg-primary-white block" />
                    <span className="font-bold text-primary-white">Or</span>
                    <span className="w-[60%]  h-[1px] bg-primary-white block" />
                </div>

                <div data-aos="flip-up" data-aos-delay={1000 * 5}>
                    <IconButton
                        Icon={<FcGoogle className="text-[39px] " />}
                        title="Signin Using Google"
                        onClick={() => {}}
                        className="mt-4"
                    />
                </div>
                <p className=" text-primary-white w-fit mx-auto">
                    <span>Don&apos;t have an account? </span>
                    <Link href={"/auth/signup"} className="font-bold">
                        Sign Up
                    </Link>
                </p>
            </div>

            <ToastContainer />
        </div>
    );
};
export default page;
