// 'use client'

// import { Button } from "@/components/Common-ui/button";
// import { Input } from "@/components/Common-ui/input";
// import { Label } from "@/components/Common-ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Common-ui/select";
// import { Textarea } from "@/components/Common-ui/textarea";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//     campaignName: Yup.string().required('Campaign name is required'),
//     startDate: Yup.date().required('Start date is required'),
//     endDate: Yup.date().min(
//         Yup.ref('startDate'),
//         "End date can't be before start date"
//     ).required('End date is required'),
//     budget: Yup.number().positive('Budget must be positive').required('Budget is required'),
//     targetAudience: Yup.string().required('Target audience is required'),
//     campaignGoals: Yup.string().required('Campaign goals are required'),
//     adDesign: Yup.mixed().required('Ad design is required')
// });

// export default function CreateCampaignPage() {
//     const initialValues = {
//         campaignName: '',
//         startDate: '',
//         endDate: '',
//         budget: '',
//         targetAudience: '',
//         campaignGoals: '',
//         adDesign: null
//     };

//     const handleSubmit = (values: any, { setSubmitting }: any) => {
//         console.log(values);
//         // Handle form submission here
//         setSubmitting(false);
//     };

//     return (
//         <section className="py-[50px] md:px-0 px-5">
//             <div className="container mx-auto">
//                 <h1 className="text-3xl font-bold mb-8 text-center text-[#000]">Create Ad Campaign</h1>
//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ isSubmitting, setFieldValue }) => (
//                         <Form className="space-y-6 max-w-2xl mx-auto">
//                             <div className="space-y-2">
//                                 <Label htmlFor="campaignName" className="text-[#000] text-base">Campaign Name</Label>
//                                 <Field
//                                     as={Input}
//                                     id="campaignName"
//                                     name="campaignName"
//                                     placeholder="Enter campaign name"
//                                     className="border-[#03A9AC]"
//                                 />
//                                 <ErrorMessage name="campaignName" component="div" className="text-red-500 text-sm" />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="startDate" className="text-[#000] text-base">Start Date</Label>
//                                 <Field
//                                     as={Input}
//                                     id="startDate"
//                                     name="startDate"
//                                     type="date"
//                                     className="border-[#03A9AC]"
//                                 />
//                                 <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm" />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="endDate" className="text-[#000] text-base">End Date</Label>
//                                 <Field
//                                     as={Input}
//                                     id="endDate"
//                                     name="endDate"
//                                     type="date"
//                                     className="border-[#03A9AC]"
//                                 />
//                                 <ErrorMessage name="endDate" component="div" className="text-red-500 text-sm" />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="budget" className="text-[#000] text-base">Budget ($)</Label>
//                                 <Field
//                                     as={Input}
//                                     id="budget"
//                                     name="budget"
//                                     placeholder="Enter campaign budget"
//                                     type="number"
//                                     className="border-[#03A9AC]"
//                                 />
//                                 <ErrorMessage name="budget" component="div" className="text-red-500 text-sm" />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="targetAudience" className="text-[#000] text-base">Target Audience</Label>
//                                 <Field name="targetAudience">
//                                     {({ field }:any) => (
//                                         <Select onValueChange={(value) => field.onChange({ target: { name: 'targetAudience', value } })}>
//                                             <SelectTrigger id="targetAudience" className="border-[#03A9AC]">
//                                                 <SelectValue placeholder="Select target audience" />
//                                             </SelectTrigger>
//                                             <SelectContent position="popper" className="bg-white text-[#000]">
//                                                 <SelectItem value="young-adults">Young Adults (18-35)</SelectItem>
//                                                 <SelectItem value="families">Families</SelectItem>
//                                                 <SelectItem value="professionals">Professionals</SelectItem>
//                                                 <SelectItem value="seniors">Seniors</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     )}
//                                 </Field>
//                                 <ErrorMessage name="targetAudience" component="div" className="text-red-500 text-sm" />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="campaignGoals" className="text-[#000] text-base">Campaign Goals</Label>
//                                 <Field
//                                     as={Textarea}
//                                     id="campaignGoals"
//                                     name="campaignGoals"
//                                     placeholder="Describe your campaign goals"
//                                     className="border-[#03A9AC]"
//                                 />
//                                 <ErrorMessage name="campaignGoals" component="div" className="text-red-500 text-sm" />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="adDesign" className="text-[#000] text-base">Upload Ad Design</Label>
//                                 <Input
//                                     id="adDesign"
//                                     name="adDesign"
//                                     type="file"
//                                     accept="image/*"
                                  
//                                     className="w-full border border-[#03A9AC] rounded-md p-2"
//                                 />
//                                 <ErrorMessage name="adDesign" component="div" className="text-red-500 text-sm" />
//                             </div>
//                             <Button
//                                 type="submit"
//                                 className="w-full bg-[#03A9AC] text-[#fff] hover:bg-[#028a8d] transition-colors duration-300"
//                                 size="lg"
//                                 disabled={isSubmitting}
//                             >
//                                 Create Campaign
//                             </Button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </section>
//     )
// }

"use client";

import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Common-ui/select";
import { Textarea } from "@/components/Common-ui/textarea";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  campaignName: Yup.string().required("Campaign name is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date can't be before start date")
    .required("End date is required"),
  budget: Yup.number()
    .positive("Budget must be positive")
    .required("Budget is required"),
  targetAudience: Yup.string().required("Target audience is required"),
  campaignGoals: Yup.string().required("Campaign goals are required"),
  adDesign: Yup.mixed().required("Ad design is required"),
});

// API base URL from environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL ;

export default function CreateCampaignPage() {
  const initialValues = {
    campaignName: "",
    startDate: "",
    endDate: "",
    budget: "",
    targetAudience: "",
    campaignGoals: "",
    adDesign: null,
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm, setStatus }: any
  ) => {
    try {
     
      const formData = new FormData();
      formData.append("campaignName", values.campaignName);
      formData.append("startDate", values.startDate);
      formData.append("endDate", values.endDate);
      formData.append("budget", values.budget);
      formData.append("targetAudience", values.targetAudience);
      formData.append("campaignGoals", values.campaignGoals);
      formData.append("images", values.adDesign); // Match backend field name "images"

      // Make API call
      const response = await fetch(`${API_URL}/api/banners/create`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create campaign");
      }

      // Success handling
      setStatus({ success: "Campaign created successfully!" });
      resetForm(); // Reset form on success
    } catch (error: any) {
      setStatus({ error: error.message || "An error occurred" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-[50px] md:px-0 px-5">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#000]">
          Create Ad Campaign
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, status }) => (
            <Form className="space-y-6 max-w-2xl mx-auto">
              {/* Display success/error messages */}
              {status?.success && (
                <div className="text-green-500 text-sm">{status.success}</div>
              )}
              {status?.error && (
                <div className="text-red-500 text-sm">{status.error}</div>
              )}

              <div className="space-y-2">
                <Label htmlFor="campaignName" className="text-[#000] text-base">
                  Campaign Name
                </Label>
                <Field
                  as={Input}
                  id="campaignName"
                  name="campaignName"
                  placeholder="Enter campaign name"
                  className="border-[#03A9AC]"
                />
                <ErrorMessage
                  name="campaignName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate" className="text-[#000] text-base">
                  Start Date
                </Label>
                <Field
                  as={Input}
                  id="startDate"
                  name="startDate"
                  type="date"
                  className="border-[#03A9AC]"
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate" className="text-[#000] text-base">
                  End Date
                </Label>
                <Field
                  as={Input}
                  id="endDate"
                  name="endDate"
                  type="date"
                  className="border-[#03A9AC]"
                />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-[#000] text-base">
                  Budget ($)
                </Label>
                <Field
                  as={Input}
                  id="budget"
                  name="budget"
                  placeholder="Enter campaign budget"
                  type="number"
                  className="border-[#03A9AC]"
                />
                <ErrorMessage
                  name="budget"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience" className="text-[#000] text-base">
                  Target Audience
                </Label>
                <Field name="targetAudience">
                  {({ field }: any) => (
                    <Select
                      onValueChange={(value) =>
                        field.onChange({ target: { name: "targetAudience", value } })
                      }
                    >
                      <SelectTrigger id="targetAudience" className="border-[#03A9AC]">
                        <SelectValue placeholder="Select target audience" />
                      </SelectTrigger>
                      <SelectContent position="popper" className="bg-white text-[#000]">
                        <SelectItem value="young-adults">Young Adults (18-35)</SelectItem>
                        <SelectItem value="families">Families</SelectItem>
                        <SelectItem value="professionals">Professionals</SelectItem>
                        <SelectItem value="seniors">Seniors</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
                <ErrorMessage
                  name="targetAudience"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaignGoals" className="text-[#000] text-base">
                  Campaign Goals
                </Label>
                <Field
                  as={Textarea}
                  id="campaignGoals"
                  name="campaignGoals"
                  placeholder="Describe your campaign goals"
                  className="border-[#03A9AC]"
                />
                <ErrorMessage
                  name="campaignGoals"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adDesign" className="text-[#000] text-base">
                  Upload Ad Design
                </Label>
                <Input
                  id="adDesign"
                  name="adDesign"
                  type="file"
                  accept="image/*"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = event.currentTarget.files?.[0];
                    setFieldValue("adDesign", file || null); // Set file in Formik
                  }}
                  className="w-full border border-[#03A9AC] rounded-md p-2"
                />
                <ErrorMessage
                  name="adDesign"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#03A9AC] text-[#fff] hover:bg-[#028a8d] transition-colors duration-300"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create Campaign"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}