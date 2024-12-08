'use client'

import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import { Textarea } from "@/components/Common-ui/textarea";
import Image from "next/image";
import contactImg from "../../../../public/assets/contact.webp";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

export default function ContactPage() {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    // Handle form submission here
    setSubmitting(false);
  };

  return (
    <section className="py-[50px] md:px-0 px-5">
      <div className="container mx-auto min-h-screen">
        <h1 className="text-3xl font-black mb-5 text-center text-[#000] underline">Contact Us</h1>
        <div className="grid  gap-6 md:grid-cols-2">
          <div>
          
            <div className="w-full h-[300px] relative">
              <Image
                src={contactImg}
                alt="Contact us"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold mt-2 text-[#000]">Get in Touch</p>
            <p className="my-1 text-[#000] text-base font-semibold">
              Have questions or need assistance? We're here to help!
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex">
                <strong>Email:</strong> <p className="text-[#000] ">support@bannerxpress.com</p>
              </div>
              <div className="flex">
                <strong>Phone:</strong> <p className="text-[#000]">+1 (555) 123-4567</p>
              </div>
              <div className="flex">
                <strong>Address:</strong> <p className="text-[#000]">123 Ad Street</p>
              </div>
            </div>
           
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#000] text-base  ">Name</Label>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="border-[#03A9AC]"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#000] text-base ">Email</Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    placeholder="Your email"
                    type="email"
                    className="border-[#03A9AC]"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#000] text-base  ">Subject</Label>
                  <Field
                    as={Input}
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    className="border-[#03A9AC]"
                  />
                  <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#000] text-base ">Message</Label>
                  <Field
                    as={Textarea}
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className="border-[#03A9AC]"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                </div>
                <Button
                  type="submit"
                  className=" text-[#fff] font-semibold p-2 w-full border border-[#03A9AC] bg-[#03A9AC] transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  Send Message
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

