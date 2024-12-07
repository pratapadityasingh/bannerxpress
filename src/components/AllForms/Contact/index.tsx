import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import { Textarea } from "@/components/Common-ui/textarea";
import Image from "next/image";
import contactImg from "../../../../public/assets/contact.jpg";

export default function ContactPage() {
  return (
    <>
      <section className="py-[50px] md:px-0 px-5">
        <div className="container mx-auto h-screen">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4">
                Have questions or need assistance? We're here to help!
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> support@bannerxpress.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> 123 Ad Street, Billboard City, BN
                  12345
                </p>
              </div>
              {/* <div className="w-[600px] h-[200px]">
                <Image
                  src={contactImg}
                  alt="imag"
                  className="w-full  object-cover"
                 
                />
              </div> */}
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Your email"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Subject of your message"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="bg-[#18181b] text-[#fff] font-semibold p-2">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
