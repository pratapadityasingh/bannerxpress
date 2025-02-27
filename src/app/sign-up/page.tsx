"use client";

import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';



const validationSchema = Yup.object().shape({
    username: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

export default function SignUpPage() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values: any, { setSubmitting, setErrors }: any) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
        username: values.username,
        email: values.email,
        password: values.password,
        phone: values.phone,
        confirmPassword: values.confirmPassword,
      });

      console.log("Signup successful:", response.data);
      toast.success("Signup successful");
    } catch (error: any) {
      console.error("Signup failed:", error);

      const errorMessage = error.response?.data?.message || "An error occurred";

      if (errorMessage.includes("Passwords do not match")) {
        setErrors({ confirmPassword: errorMessage });
      } else if (errorMessage.includes("Email already exists")) {
        setErrors({ email: errorMessage });
      } else {
        setErrors({ general: errorMessage });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogin = () => {
    window.location.href = '/sign-in'; 
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <div className="max-w-md mx-auto md:shadow-xl md:p-5 rounded-lg lg:mt-[60px]">
        <h1 className="text-2xl font-black mb-6 text-[#000] text-center">Sign Up</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-[#000] text-base">
                  Full Name
                </Label>
                <Field
                  as={Input}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your full name"
                  className="border-[#03A9AC] w-full"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#000] text-base">
                  Email
                </Label>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-[#03A9AC] w-full"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Label htmlFor="password" className="text-[#000] text-base">
                  Password
                </Label>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="border-[#03A9AC] w-full"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-[#000] text-base">
                  Confirm Password
                </Label>
                <Field
                  as={Input}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="border-[#03A9AC] w-full"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-[#000] text-base">
                  Phone Number
                </Label>
                <Field
                  as={Input}
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  className="border-[#03A9AC] w-full"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <Button
              onClick={handleLogin}
                type="submit"
                className="bg-[#03A9AC] text-[#fff] font-semibold w-full p-3 rounded-md hover:bg-[#038f91] transition-colors duration-300"
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-[#03A9AC] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
