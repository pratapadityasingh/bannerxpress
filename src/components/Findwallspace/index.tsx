"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { Input } from '../Common-ui/input';
import { Button } from '../Common-ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../Common-ui/card';
import { Badge } from '../Common-ui/badge';
import { BookCheck, Ratio } from 'lucide-react';

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
}

const SkeletonCard = () => (
  <Card className="animate-pulse">
    <div className="w-full h-60 bg-gray-200 rounded-t-[10px]"></div>
    <CardContent className="pt-4">
      <CardHeader className="border-b-[1px] border-[#a3ebec] mb-2 pb-2">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
      </CardHeader>
      <div className="flex gap-4">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
      <div className="h-8 bg-gray-200 rounded w-1/4 mt-4"></div>
    </CardContent>
  </Card>
);

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [wallSpaces, setWallSpaces] = useState<WallSpace[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWallSpaces = async () => {
      try {
        const response = await axios.get<WallSpace[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/product/products`
        );
        console.log('API Response:', response.data);
        setWallSpaces(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch wall spaces');
        setLoading(false);
        console.error('Fetch error:', err);
      }
    };

    fetchWallSpaces();
  }, []);

  const filteredWallSpaces = wallSpaces.filter((wall) => {
    const query = searchQuery.toLowerCase();
    return (
      (wall.address?.toLowerCase() || '').includes(query) ||
      (wall.dimension?.toLowerCase() || '').includes(query) ||
      (wall.rate?.toString().toLowerCase() || '').includes(query)
    );
  });

  if (error) {
    return <div className="container mx-auto px-3 py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-3 py-8">
      <h1 className="text-[30px] font-black mb-8">Find Wall Space</h1>
      <div className="flex gap-4 mb-8">
        <Input
          className="flex-grow border-[#a3ebec]"
          placeholder="Search by address, dimension, etc."
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={() => setSearchQuery('')} className='bg-[#03A9AC] p-2 text-[#fff] text-sm font-semibold'>
          Clear
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array(6).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          filteredWallSpaces.map((wall) => (
            <Card key={wall._id} className='relative'>
              <div className='absolute top-[20px]'>
                <Badge 
                  variant={(wall.period?.toLowerCase() || '').includes('available') ? 'default' : 'secondary'} 
                  className="text-base text-[#fff] bg-[#01796F] rounded-l-[0]"
                >
                  {wall.period || 'N/A'}
                </Badge>
              </div>
              <Image
                alt={`Wall Space ${wall._id}`}
                className="w-full h-60 object-cover mb-4 rounded-t-[10px]"
                height={200}
                src={wall.url && wall.url.length > 0 ? wall.url[0] : "/assets/default.jpg"}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
                priority
              />
              <CardContent>
                <CardHeader className='border-b-[1px] border-[#a3ebec] mb-2 pb-2'>
                  <CardTitle className='text-[24px] text-[#03A9AC] font-black'>{wall.name || 'Unknown Type'}</CardTitle>
                  <p className="text-base text-[#000] font-medium p-0">{wall.address || 'Unknown Address'}</p>
                </CardHeader>
                <div className='flex gap-4'>
                  <p className="text-base font-medium flex gap-[4px]">
                    <span className='text-[#03A9AC] text-[5px]'><Ratio /></span>{wall.dimension || 'N/A'}
                  </p>
                  <p className="text-base font-medium flex gap-[4px]">
                    <span className='text-[#03A9AC] text-[5px]'><BookCheck /></span>{wall.position || 'N/A'}
                  </p>
                </div>
                <p className="text-base mt-2 font-medium"><span>Rate:</span> ₹{''}{wall.rate || 'N/A'}</p>
                <p className="text-base mt-1 font-medium"><span className="">Crowded:</span> {wall.crowded || 'N/A'}</p>
                <p className="text-base mt-1 font-medium flex">
                  <span className="">Restrictions:</span> {wall.restrictions?.join(', ') || 'None'}
                </p>
              </CardContent>
              <div className='pb-2 px-3'>
                <Link href={`/wall/${wall._id}`}>
                  <Button size="sm" className='border m-2 border-[#a3ebec] text-sm font-medium'>
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}