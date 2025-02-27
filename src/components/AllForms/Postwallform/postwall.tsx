'use client'

import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import { Textarea } from "@/components/Common-ui/textarea";
import axios, { AxiosError } from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from "react-toastify";
import * as Yup from 'yup';




interface FormValues {
    name: string;
    address: string;
    width: string;
    height: string;
    rate: string;
    availability: string;
    minBooking: string;
    description: string;
    images: FileList | null;
    crowded: string;
    restrictions: string;
    position: string;
    period: string;
    qualityOfWall: string; 
}

// Define interface for potential API error response
interface ErrorResponse {
    message?: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    width: Yup.number().positive('Width must be positive').required('Width is required'),
    height: Yup.number().positive('Height must be positive').required('Height is required'),
    rate: Yup.number().positive('Rate must be positive').required('Rate is required'),
    availability: Yup.date().required('Availability date is required'),
    minBooking: Yup.number().positive('Minimum booking must be positive').required('Minimum booking is required'),
    description: Yup.string().required('Description is required'),
    images: Yup.mixed().required('Images are required'),
    crowded: Yup.string().required('Crowded level is required'),
    restrictions: Yup.string().required('Restrictions are required'),
    position: Yup.string().required('Position is required'),
    period: Yup.string().required('Period is required'),
    qualityOfWall: Yup.string().required('Wall quality is required') // Added validation for qualityOfWall
});

export default function PostWallPage() {
    const initialValues: FormValues = {
        name: '',
        address: '',
        width: '',
        height: '',
        rate: '',
        availability: '',
        minBooking: '',
        description: '',
        images: null,
        crowded: '',
        restrictions: '',
        position: '',
        period: '',
        qualityOfWall: ''
    };

    const handleSubmit = async (
        values: FormValues, 
        { setSubmitting, setErrors }: { setSubmitting: (isSubmitting: boolean) => void; setErrors: (errors: any) => void }
    ) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('address', values.address);
            formData.append('dimension', `${values.width}x${values.height}`);
            formData.append('rate', values.rate);
            formData.append('availability', values.availability);
            formData.append('minBooking', values.minBooking);
            formData.append('description', values.description);
            formData.append('crowded', values.crowded);
            formData.append('restrictions', values.restrictions);
            formData.append('position', values.position);
            formData.append('period', values.period);
            formData.append('qualityOfWall', values.qualityOfWall); // Fixed extra space and comma
            
            if (values.images) {
                for (let i = 0; i < values.images.length; i++) {
                    formData.append('images', values.images[i]);
                }
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/product/product`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("List submit successful:", response.data);
            toast.success("List submit successful");
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;
            console.error("Listing failed:", axiosError);
            const errorMessage = axiosError.response?.data?.message || "An error occurred";
            setErrors({ general: errorMessage });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="md:py-[50px] py-[30px] md:px-0 px-5">
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
                                <Label htmlFor="name" className="text-base text-[#000]">Name</Label>
                                <Field as={Input} id="name" name="name" placeholder="Enter your name" className="border-[#03A9AC]" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address" className="text-base text-[#000]">Address</Label>
                                <Field as={Textarea} id="address" name="address" placeholder="Enter your address" className="border-[#03A9AC]" />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-base text-[#000]">Dimension (in feet)</Label>
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
                            <div className="space-y-2">
                                <div className="flex md:flex-row flex-col gap-4">
                                    <div className="flex-1">
                                        <Label htmlFor="rate" className="text-base text-[#000]">Rate</Label>
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
                                <Field as={Textarea} id="description" name="description" placeholder="Enter description" className="border-[#03A9AC]" />
                                <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="crowded" className="text-base text-[#000]">Crowded Level</Label>
                                <Field as={Input} id="crowded" name="crowded" placeholder="Enter crowded level" className="border-[#03A9AC]" />
                                <ErrorMessage name="crowded" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="restrictions" className="text-base text-[#000]">Restrictions</Label>
                                <Field as={Input} id="restrictions" name="restrictions" placeholder="Enter any restrictions" className="border-[#03A9AC]" />
                                <ErrorMessage name="restrictions" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="position" className="text-base text-[#000]">Position</Label>
                                <Field as={Input} id="position" name="position" placeholder="Enter wall position" className="border-[#03A9AC]" />
                                <ErrorMessage name="position" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="qualityOfWall" className="text-base text-[#000]">Quality of Wall</Label> {/* Fixed label text */}
                                <Field as={Input} id="qualityOfWall" name="qualityOfWall" placeholder="Enter your wall quality" className="border-[#03A9AC]" />
                                <ErrorMessage name="qualityOfWall" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="period" className="text-base text-[#000]">Period</Label>
                                <Field as={Input} id="period" name="period" placeholder="Enter period" className="border-[#03A9AC]" />
                                <ErrorMessage name="period" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="images" className="text-base text-[#000]">Upload Images</Label>
                                <Input
                                    id="images"
                                    name="images"
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFieldValue("images", event.currentTarget.files);
                                    }}
                                    className="w-full border border-[#03A9AC] rounded-lg p-2"
                                />
                                <ErrorMessage name="images" component="div" className="text-red-500 text-sm" />
                            </div>
                            <Button
                                className="w-full border rounded-lg py-[10px] bg-[#03A9AC] text-[#fff]"
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