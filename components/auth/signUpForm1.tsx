import React, { useContext, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Aos from "aos";

import { Input, Select } from "@/components/auth";
import { signupContext } from "../contexts/signUpContext";

const signUpForm1 = ({
    setActiveForm,
    setSignUpFormData,
}: {
    setActiveForm: React.Dispatch<React.SetStateAction<number>>;
    setSignUpFormData: React.Dispatch<
        React.SetStateAction<Record<string, unknown>>
    >;
}) => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        });
    }, []);

    const { signup1Params, setSignUp1Params } = useContext(signupContext);

    const validationSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        phone: Yup.string().required("Phone number is required"),
        gender: Yup.string().required("Please select a gender"),
    });

    const handleSubmit = (values: {
        first_name: string;
        password: "";
        confirm_password: "";
        last_name: string;
        gender: string;
        phone: string;
    }) => {
        setSignUp1Params({ ...values });
        console.log(values);
        setActiveForm((prev) => prev + 1);
        setSignUpFormData((prev) => ({ ...prev, ...values }));
    };

    return (
        <div className="w-full mx-auto">
            <Formik
                initialValues={signup1Params}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <div data-aos="fade-right">
                            <Input
                                type="text"
                                value={values.first_name}
                                placeholder="First Name"
                                name="first_name"
                                onblur={handleBlur}
                                onChange={handleChange}
                                error={
                                    (errors.first_name &&
                                        touched.first_name) as boolean
                                }
                            />
                        </div>
                        <div data-aos="fade-left" data-aos-delay={1000}>
                            <Input
                                type="text"
                                value={values.last_name}
                                placeholder="Last Name"
                                name="last_name"
                                onChange={handleChange}
                                onblur={handleBlur}
                                error={
                                    (errors.last_name &&
                                        touched.last_name) as boolean
                                }
                            />
                        </div>
                        <div data-aos="fade-right" data-aos-delay={2000}>
                            <Select
                                defaultValue="Gender"
                                options={["Male", "Female"]}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.gender}
                                name="gender"
                                error={
                                    (errors.gender && touched.gender) as boolean
                                }
                            />
                        </div>
                        <div data-aos="fade-left" data-aos-delay={3000}>
                            <Input
                                type="text"
                                value={values.phone}
                                placeholder="Phone Number"
                                name="phone"
                                onChange={handleChange}
                                onblur={handleBlur}
                                error={
                                    (errors.phone && touched.phone) as boolean
                                }
                            />
                        </div>

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
                            Next
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default signUpForm1;
