"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../Common-ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingIcon from "../Common-ui/loader";

interface Template {
  _id: string;
  campaignName: string;
  campaignGoals: string;
  imageUrl: string;
  budget: number;
  startDate: string;
  endDate: string;
}

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString));
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(amount);
};

// Skeleton Card Component
const SkeletonCard = () => (
  <div className="bg-white rounded-lg overflow-hidden border shadow-xl animate-pulse">
    <div className="w-full h-60 bg-gray-200"></div>
    <div className="border-b border-[#03A9AC] p-4">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    </div>
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  </div>
);

const TemplateCard: React.FC<Template> = ({
  campaignName,
  campaignGoals,
  imageUrl,
  budget,
  startDate,
  endDate,
}) => (
  <motion.div
    className="bg-white text-black rounded-lg overflow-hidden border shadow-xl"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Image
      src={imageUrl}
      alt={campaignName}
      className="w-full h-60 object-cover"
      width={500}
      height={350}
      priority
    />
    <div className="border-b border-[#03A9AC] p-4">
      <h3 className="text-xl font-bold">{campaignName}</h3>
    </div>
    <div className="p-4">
      <p className="text-sm mb-2">{campaignGoals}</p>
      <p className="text-sm font-medium">Budget: {formatCurrency(budget)}</p>
      <p className="text-sm font-medium">
        {formatDate(startDate)} - {formatDate(endDate)}
      </p>
    </div>
  </motion.div>
);

export default function AdCampaignPage() {
  const [campaigns, setCampaigns] = useState<Template[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/banners/getall`
        );
        const data = await response.json();

        if (data.success) {
          setCampaigns(data.data);
        } else {
          setError("No campaigns found");
        }
      } catch (error) {
        setError("Failed to fetch campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.campaignName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="pb-20 md:px-0 px-5">
        <div className="container mx-auto">
          <div>
            <h2 className="text-3xl font-black my-8">
              Advertise Your Brand On Our Platform
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded-lg w-full md:w-1/3 bg-white text-black border-[#03A9AC] focus:outline-none focus:ring-2 focus:ring-black h-[40px]"
            />
            <Link href={"/create-camp"}>
              <Button
                className="bg-[#03A9AC] text-white px-4 py-2 h-[40px] rounded-lg border border-[#03A9AC] hover:bg-white hover:text-black transition-colors"
              >
                Add New Campaign
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredCampaigns.length === 0 ? (
            <p className="text-center">No campaigns found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns.map((template) => (
                <TemplateCard key={template._id} {...template} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}