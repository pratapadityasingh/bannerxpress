"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

import {
  BookCheck,
  Ratio,
  MapPin,
  Users,
  Ban,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Common-ui/button";
import { Badge } from "@/components/Common-ui/badge";
import { Card, CardContent } from "@/components/Common-ui/card";

interface WallSpace {
  _id: string;
  name?: string;
  url?: string[];
  address?: string;
  dimension?: string;
  rate?: number;
  crowded?: string;
  restrictions?: string[];
  position?: string;
  period?: string;
  description?: string;
}

export default function WallDetailsPage() {
  const { id } = useParams();
  const [wallSpace, setWallSpace] = useState<WallSpace | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchWallSpace = useCallback(async () => {
    try {
      const response = await axios.get<WallSpace>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/product/${id}`
      );
      console.log("API Response:", response.data);
      setWallSpace(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to fetch wall space details"
      );
      setLoading(false);
      console.error("Fetch error:", err);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchWallSpace();
    }
  }, [id, fetchWallSpace]);

  const handleNextImage = () => {
    if (Array.isArray(wallSpace?.url) && wallSpace.url.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === wallSpace.url!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (Array.isArray(wallSpace?.url) && wallSpace.url.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? wallSpace.url!.length - 1 : prevIndex - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (error || !wallSpace) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            {error || "Wall space not found"}
          </h1>
          <Link href="/search">
            <Button className="bg-[#03A9AC]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Search
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <Link href="/find-wall-space">
        <Button className="mb-6 p-3 border-[1px] border-[#03A9AC] text-[#03A9AC]">
          <ArrowLeft className="mr-2 h-4 w-4 text-[#03A9AC] " /> Back to Search
        </Button>
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative">
          <div className="absolute top-4 left-0 z-10">
            <Badge
              variant={
                (wallSpace.period?.toLowerCase() || "").includes("available")
                  ? "default"
                  : "secondary"
              }
              className="text-base text-[#fff] bg-[#01796F] rounded-l-[0]"
            >
              {wallSpace.period || "N/A"}
            </Badge>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {Array.isArray(wallSpace?.url) && wallSpace.url.length > 0 ? (
              <>
                <Image
                  alt={`Wall Space ${wallSpace._id}`}
                  className="w-full h-full object-cover"
                  src={wallSpace.url[currentImageIndex]}
                  fill
                  priority
                />

                {wallSpace.url.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/80 rounded-full"
                      onClick={handlePrevImage}
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/80 rounded-full"
                      onClick={handleNextImage}
                    >
                      <ArrowLeft className="h-4 w-4 transform rotate-180" />
                    </Button>
                  </div>
                )}

                {wallSpace.url.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {wallSpace.url.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex
                            ? "bg-[#03A9AC]"
                            : "bg-white/60"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
          </div>
        </div>

        <CardContent className="p-6 shadow-xl rounded-lg">
          <h1 className="text-3xl text-[#03A9AC] font-black mb-2">
            {wallSpace.name || "Unknown Type"}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-[#03A9AC] h-5 w-5" />
            <p className="text-lg">{wallSpace.address || "Unknown Address"}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Ratio className="text-[#03A9AC] h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Dimensions</p>
                <p className="font-medium">{wallSpace.dimension || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BookCheck className="text-[#03A9AC] h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Position</p>
                <p className="font-medium">{wallSpace.position || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="text-[#03A9AC] h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Crowded</p>
                <p className="font-medium">{wallSpace.crowded || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="text-[#03A9AC] h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Rate</p>
                <p className="font-medium">₹{wallSpace.rate || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start gap-2 mb-2">
              <Ban className="text-[#03A9AC] h-5 w-5 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Restrictions</p>
                <p className="font-medium">
                  {wallSpace.restrictions?.join(", ") || "None"}
                </p>
              </div>
            </div>
          </div>

          <Button className=" bg-[#03A9AC] text-white p-3 w-[200px] hover:bg-[#028E8F] transition-all">
            Book This Wall Space
          </Button>
        </CardContent>
      </div>

      <div className="my-5">
        <Card className="p-3 bg-[#fff] shadow-xl">
          {wallSpace.description && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="text-gray-700">{wallSpace.description}</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
