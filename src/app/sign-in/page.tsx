'use client'

import { Button } from "@/components/Common-ui/button"
import { Input } from "@/components/Common-ui/input"
import { Label } from "@/components/Common-ui/label"
import Link from "next/link"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios"
import { toast } from "react-toastify"



const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
})

export default function SignInPage() {
    const initialValues = {
        email: '',
        password: '',
    }

    const handleSubmit = async (values: any, { setSubmitting, setErrors }: any) => {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
            email: values.email,
            password: values.password
          });
    
          console.log("Signup successful:", response.data);
          toast.success("Login successful");
        } catch (error: any) {
          console.error("Signup failed:", error);
    
          const errorMessage = error.response?.data?.message || "An error occurred";
    
            if (errorMessage.includes("Email already exists")) {
            setErrors({ email: errorMessage });
          } else {
            setErrors({ general: errorMessage });
          }
        } finally {
          setSubmitting(false);
        }
      };

      const handleLogin = () => {
        window.location.href = '/';
      }

    return (
        <div className="container mx-auto px-4 py-8 h-screen">
            <div className="max-w-md mx-auto md:shadow-xl md:p-5 rounded-lg lg:mt-[100px]">
                <h1 className="text-2xl font-black mb-6 text-[#000] text-center">Sign In</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="text-[#000] text-base">Email</Label>
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
                                <Label htmlFor="password" className="text-[#000] text-base">Password</Label>
                                <Field
                                    as={Input}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="border-[#03A9AC] w-full"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <Button
                                onClick={handleLogin}
                                type="submit"
                                className="bg-[#03A9AC] text-[#fff] font-semibold w-full p-3 rounded-md hover:bg-[#038f91] transition-colors duration-300"
                                disabled={isSubmitting}
                            >
                                Sign In
                            </Button>
                        </Form>
                    )}
                </Formik>
                <p className="mt-4 text-center text-sm">
                    Don't have an account? <Link href="/sign-up" className="text-[#03A9AC] hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

