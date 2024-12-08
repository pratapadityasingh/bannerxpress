'use client'

import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import { Textarea } from "@/components/Common-ui/textarea";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    location: Yup.string().required('Location is required'),
    width: Yup.number().positive('Width must be positive').required('Width is required'),
    height: Yup.number().positive('Height must be positive').required('Height is required'),
    rate: Yup.number().positive('Rate must be positive').required('Rate is required'),
    availability: Yup.date().required('Availability date is required'),
    minBooking: Yup.number().positive('Minimum booking must be positive').required('Minimum booking is required'),
    description: Yup.string().required('Description is required'),
    images: Yup.mixed().required('Images are required')
});

export default function PostWallPage() {
    const initialValues = {
        location: '',
        width: '',
        height: '',
        rate: '',
        availability: '',
        minBooking: '',
        description: '',
        images: null
    };

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        console.log(values);

        setSubmitting(false);
    };

    return (
        <section className="md:py-[50px]  py-[30px] md:px-0 px-5">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-5 text-center text-[#000]">List Your Wall</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="space-y-2 max-w-xl mx-auto">
                            <div className="space-y-2">
                                <Label htmlFor="location" className="text-base text-[#000]">Location</Label>
                                <Field as={Input} id="location" name="location" placeholder="Enter the wall's location" className="border-[#03A9AC]" />
                                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="size" className="text-base text-[#000]" >Size (in feet)</Label>
                                <div className="flex md:flex-row flex-col gap-4">
                                    <div className="flex-1">
                                        <Field as={Input} id="width" name="width" placeholder="Width" type="number" className="border-[#03A9AC]" />
                                        <ErrorMessage name="width" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="flex-1">
                                        <Field as={Input} id="height" name="height" placeholder="Height" type="number" className="border-[#03A9AC]" />
                                        <ErrorMessage name="height" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 ">
                                <div className="flex md:flex-row flex-col  gap-4">
                                    <div className="flex-1">
                                        <Label htmlFor="rate" className="text-base text-[#000]">Daily Rate ($)</Label>
                                        <Field as={Input} id="rate" name="rate" placeholder="Enter daily rate" type="number" className="border-[#03A9AC]" />
                                        <ErrorMessage name="rate" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="flex-1">
                                        <Label htmlFor="availability" className="text-base text-[#000]">Available From</Label>
                                        <Field as={Input} id="availability" name="availability" type="date" className="border-[#03A9AC]" />
                                        <ErrorMessage name="availability" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                              
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="minBooking" className="text-base text-[#000]">Minimum Booking (days)</Label>
                                <Field as={Input} id="minBooking" name="minBooking" placeholder="Enter minimum booking period" type="number" className="border-[#03A9AC]" />
                                <ErrorMessage name="minBooking" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-base text-[#000]">Description</Label>
                                <Field as={Textarea} id="description" name="description" placeholder="Describe your wall space" className="border-[#03A9AC]" />
                                <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="images" className="text-base text-[#000]">Upload Images</Label>
                                <Input
                                    id="images"
                                    name="images"
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(event) => {
                                        setFieldValue("images", event.currentTarget.files);
                                    }}
                                    className="w-full border border-[#03A9AC] rounded-lg p-2"
                                />
                                <ErrorMessage name="images" component="div" className="text-red-500 text-sm" />
                            </div>
                            <Button
                                className="w-full border rounded-lg py-[10px] bg-[#03A9AC] text-[#fff] "
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit Listing
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

