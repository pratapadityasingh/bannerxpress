import Image from "next/image"
import peoopeimg from "../../../public/assets/Userimg.png"
export default function AboutPage() {
    return (
        <>
        <section className="pt-[50px]">
        <div className="container mx-auto min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center">About BannerXpress</h1>
            <div className="space-y-6 max-w-3xl mx-auto">
                <p>
                    BannerXpress is an innovative web platform designed to revolutionize wall advertisement placements. We act as a seamless marketplace, connecting businesses seeking ad space with wall owners offering their properties for advertisements.
                </p>
                <p>
                    Our mission is to simplify the process of outdoor advertising by eliminating intermediaries and enabling direct communication between advertisers and wall owners. This approach ensures faster negotiations, transparent processes, and fair pricing for both parties.
                </p>
                <p>
                    Founded in 2024, BannerXpress has quickly become the go-to platform for businesses looking to maximize their advertising reach and for property owners seeking to monetize their wall spaces. We're committed to driving innovation in the outdoor advertising industry and creating value for all our users.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {['CEO', 'CTO', 'COO'].map((role) => (
                        <div key={role} className="flex flex-col items-center">
                            <Image
                                alt={`${role} portrait`}
                                className="w-20 h-20 rounded mb-4"
                                height="128"
                                src={peoopeimg}
                                style={{
                                    aspectRatio: "128/128",
                                    objectFit: "cover",
                                }}
                                width="128"
                            />
                            <h3 className="text-lg font-semibold">{role}</h3>
                            <p className="text-sm text-gray-500">John Doe</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
        </>
     
    )
}

