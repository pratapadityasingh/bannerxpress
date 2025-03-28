"use client";

import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; 

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  phone: Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required"),
});

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values: any, { setSubmitting, setErrors }: any) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, values);

      toast.success("Signup successful! Redirecting...");
      setTimeout(() => {
        router.push("/sign-in");
      }, 1500);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      setErrors({ email: errorMessage.includes("Email already exists") ? errorMessage : undefined });
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <div className="max-w-md mx-auto md:shadow-xl md:p-5 rounded-lg lg:mt-[60px]">
        <h1 className="text-2xl font-black mb-6 text-[#000] text-center">Sign Up</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Label htmlFor="username">Full Name</Label>
                <Field as={Input} id="username" name="username" type="text" placeholder="Enter your full name" />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Field as={Input} id="email" name="email" type="email" placeholder="Enter your email" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Password Field with Toggle */}
              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Confirm Password Field with Toggle */}
              <div className="relative">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Field
                    as={Input}
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Field as={Input} id="phone" name="phone" type="text" placeholder="Enter your phone number" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <Button type="submit" className="w-full bg-[#03A9AC] text-white p-3 rounded-md hover:bg-[#038f91]" disabled={isSubmitting}>
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
