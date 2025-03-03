import Image from "next/image";
import { Building2, Users, Award, ArrowRight, Globe, Zap } from "lucide-react";
import PictureImg from "../../../public/assets/Userimg.png"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 -skew-y-6 transform origin-top-left z-0"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              About <span className="text-blue-600 relative">
                BannerXpress
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200/50 -z-10 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing outdoor advertising through direct connections between businesses and wall owners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                  Our Story
                </h2>
                <p className="text-gray-600">
                  Founded in 2024, BannerXpress emerged from a simple observation: outdoor advertising was needlessly complex and expensive due to multiple intermediaries. We built a platform that connects advertisers directly with property owners, creating a more efficient marketplace for everyone.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-blue-600 mr-2" />
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  We're on a mission to democratize outdoor advertising by eliminating intermediaries and enabling direct communication between advertisers and wall owners. This ensures faster negotiations, transparent processes, and fair pricing for both parties.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="text-center">
                      <p className="text-4xl font-bold">500+</p>
                      <p className="text-sm opacity-80">Wall Spaces</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold">300+</p>
                      <p className="text-sm opacity-80">Businesses</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold">50+</p>
                      <p className="text-sm opacity-80">Cities</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold">98%</p>
                      <p className="text-sm opacity-80">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at BannerXpress
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in outdoor advertising technology."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Community",
                description: "We build meaningful connections between advertisers and property owners."
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Excellence",
                description: "We strive for the highest quality in every aspect of our service."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 p-4 rounded-full inline-block mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
    
<section className="py-20 bg-gradient-to-b from-white to-blue-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        The visionaries behind BannerXpress
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-4">
      {[
        {
          role: "CEO & Founder",
          name: "Sarah Johnson",
          bio: "Former marketing executive with 15+ years of experience in outdoor advertising.",
          image: PictureImg,
        },
        {
          role: "CTO",
          name: "Michael Chen",
          bio: "Tech innovator with a background in marketplace platforms and geospatial technologies.",
          image: PictureImg,
        },
        {
          role: "COO",
          name: "Priya Patel",
          bio: "Operations expert who previously scaled three successful startups in the advertising space.",
          image: PictureImg,
        },
        {
            role: "COO",
            name: "Priya Patel",
            bio: "Operations expert who previously scaled three successful startups in the advertising space.",
            image: PictureImg,
          },
          {
            role: "COO",
            name: "Priya Patel",
            bio: "Operations expert who previously scaled three successful startups in the advertising space.",
            image: PictureImg,
          }
      ].map((member, index) => (
        <div key={index} className="group">
          <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
            <div className="aspect-[4/4] bg-gradient-to-br from-blue-100 to-blue-200 relative">
              <Image 
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                fill
                className=""
               
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
        Join our growing team
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform outdoor advertising?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Whether you're looking to advertise or monetize your wall space, BannerXpress makes it simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full shadow-lg hover:bg-blue-50 transition-colors">
              I'm an Advertiser
            </a>
            <a href="#" className="px-8 py-3 bg-blue-700 text-white font-medium rounded-full shadow-lg hover:bg-blue-800 transition-colors">
              I Own Wall Space
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}