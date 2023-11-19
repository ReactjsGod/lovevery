"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import HeroButton from "../Buttons/HeroButton";
import Link from "next/link";
import { initialValuesStep1, initialValuesStep2 } from "@InitalVal";
import { validationSchemaStep1, validationSchemaStep2 } from "@Validators";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const [step, setStep] = React.useState<number>(1);
  const [email, setEmail] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordCheck, setPasswordCheck] = React.useState<string>("password");
  const [see, setSee] = React.useState<boolean>(false);

  const handleUseAnotherEmail = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setStep(1);
  };

  const handleContinue = () => {
    setStep(step + 1);
  };
  const userPassCheck = () => {
    setPasswordCheck("text");
    setSee(!see);
  };

  const handleSubmit = async (
    values: { email: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Signup successful!");
        setSubmitting(false);
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setStep(1);
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[550px]  rounded-2xl backdrop-blur-2xl text-black dark:text-white p-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:shadow-[rgba(255,_255,_255,_0.4)_0px_30px_90px]">
        <div className="flex flex-col">
          <Formik
            initialValues={step === 1 ? initialValuesStep1 : initialValuesStep2}
            validationSchema={
              step === 1 ? validationSchemaStep1 : validationSchemaStep2
            }
            onSubmit={(values, { setSubmitting }) => {
              if (step === 1) {
                setEmail(values.email);
                handleContinue();
              } else {
                handleSubmit(values, { setSubmitting });
              }
            }}
          >
            <Form className="flex flex-col justify-center items-center gap-y-5 w-full max-w-[550px]">
              <h1 className="font-bold text-2xl w-full text-black-9 text-h2 leading-[42px] text-center">
                {step === 1
                  ? "Sign in or create account"
                  : "Create your account"}
              </h1>

              {step === 1 ? (
                <>
                  <p className="text-center text-sm md:text-base leading-6 md:leading-8 pt-5 md:pt-8 pb-1 md:pb-0">
                    Enter your email to sign in or create a new account
                  </p>
                  <label className="w-[90%]" htmlFor="email">
                    Email Address
                  </label>
                  <Field
                    className="bg-gray-200 border h-14 w-[90%] px-5 rounded text-black"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                  <HeroButton
                    btnType="submit"
                    className="w-[90%] hover:opacity-80 h-14 font-bold bg-[#536dc4] text-white tracking-wider"
                    text={"Continue"}
                  />
                </>
              ) : (
                <>
                  <p className="text-center text-sm md:text-base leading-6 md:leading-8 pt-5 md:pt-8 pb-1 md:pb-0">
                    Check out faster, manage subscriptions, quickly find
                    tracking information, and more.
                  </p>

                  <div className="w-[90%]">
                    <label className="w-[90%] font-bold" htmlFor="email">
                      {email}
                    </label>
                    <p
                      className="text-[#536dc4] cursor-pointer font-bold w-[90%] underline"
                      onClick={handleUseAnotherEmail}
                    >
                      Use another email address
                    </p>
                  </div>

                  <label className="w-[90%]" htmlFor="firstName">
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="bg-gray-200 border h-14 w-[90%] px-5 rounded text-black"
                    placeholder=" First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                  <label className="w-[90%]" htmlFor="lastName">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bg-gray-200 border h-14 w-[90%] px-5 rounded text-black"
                    placeholder="Last Name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                  <label htmlFor="password">Create Password</label>
                  <div className="relative w-[90%]">
                    <Field
                      type={see ? "text" : "password"}
                      id="password"
                      name="password"
                      className="bg-gray-200 border h-14 w-full px-5 rounded text-black"
                      placeholder="password"
                    />
                    {see ? (
                      <FaEye
                        onClick={userPassCheck}
                        className="absolute right-5 text-2xl top-[20px] cursor-pointer text-[#536dc4]"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={userPassCheck}
                        className="absolute right-5 text-2xl top-[20px] cursor-pointer text-[#536dc4]"
                      />
                    )}
                  </div>

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                  <div className="py-3 w-[90%]">
                    <label className="inline-flex items-start">
                      <input
                        type="checkbox"
                        className="h-5 w-5 min-w-[1.5rem] min-h-[1.5rem] rounded-md accent-[#536dc4]"
                        name="sendPromoMessage"
                        value="true"
                      />
                      <span className="text-[14px] md:text-sm ml-3 font-semibold">
                        Send me stage-based developmental content, new product
                        launches, special promotions, and more.
                      </span>
                    </label>
                  </div>
                  <HeroButton
                    btnType="submit"
                    className="w-[90%] hover:opacity-80 h-14 font-bold bg-[#536dc4] text-white tracking-wider"
                    text={"Create Account"}
                  />
                </>
              )}
            </Form>
          </Formik>
          <div className="flex flex-col justify-center mt-4">
            <p className="text-center">Need more help? Contact us at </p>
            <Link
              href="mailto:heretohelp@lovevery.com"
              className="text-[#536dc4] font-semibold text-center"
            >
              heretohelp@lovevery.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
