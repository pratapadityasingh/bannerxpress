"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '../Common-ui/input';
import { Button } from '../Common-ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../Common-ui/card';
import { Badge } from '../Common-ui/badge';
import { BookCheck, LandPlot, PencilRuler, Ratio } from 'lucide-react';

const wallSpaces = [
    {
        id: 1,
        location: "City Center,Rajwada Indore",
        size: "20ft x 30ft",
        rate: "$100",
        image: "/assets/water.jpg",
        availability: "Available",
        type: "Billboard",
        traffic: "High",
        restrictions: "No alcohol ads",
        position: "Top"
    },
    {
        id: 2,
        location: "Downtown, Plasia ,Indore",
        size: "15ft x 25ft",
        rate: "$80",
        image: "/assets/travel.jpg",
        availability: "Booked until 05/15",
        type: "Wall Mural",
        traffic: "Medium",
        restrictions: "Family-friendly content only",
        position: "Top"
    },
    {
        id: 3,
        location: "Suburbs  Vijay Nagar ,Indore",
        size: "25ft x 35ft",
        rate: "$120",
        image: "/assets/water.jpg",
        availability: "Available",
        type: "Digital Billboard",
        traffic: "Low",
        restrictions: "None",
        position: "Top"
    },
    {
        id: 4,
        location: "Industrial Area Pithampur,Indore",
        size: "30ft x 40ft",
        rate: "$150",
        image: "/assets/travel.jpg",
        availability: "Available",
        type: "Painted Wall",
        traffic: "Medium",
        restrictions: "No political ads",
        position:"Top"
    },
    {
        id: 5,
        location: "Uptown Tower Square,Indore",
        size: "18ft x 28ft",
        rate: "$90",
        image: "/assets/water.jpg",
        availability: "Booked until 04/30",
        type: "LED Screen",
        traffic: "High",
        restrictions: "No flashing lights after 10 PM",
        position: "Top"
    },
    {
        id: 6,
        location: "Residential Zone Anupurna, Indore",
        size: "22ft x 32ft",
        rate: "$110",
        image: "/assets/travel.jpg",
        availability: "Available",
        type: "Rooftop Billboard",
        traffic: "Low",
        restrictions: "Noise restrictions apply",
        position: "Top"
    },
];



export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredWallSpaces = wallSpaces.filter((wall) => {
        const query = searchQuery.toLowerCase();
        return (
            wall.location.toLowerCase().includes(query) ||
            wall.size.toLowerCase().includes(query) ||
            wall.rate.toLowerCase().includes(query)
        );
    });

    return (
        <div className="container mx-auto px-3 py-8">
            <h1 className="text-[30px] font-black mb-8">Find Wall Space</h1>
            <div className="flex gap-4 mb-8">
                <Input
                    className="flex-grow border-[#a3ebec]"
                    placeholder="Search by location, size, etc."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button onClick={() => setSearchQuery('')} className='bg-[#03A9AC] p-2 text-sm font-semibold'>Clear</Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredWallSpaces.map((wall) => (
                    
                    <Card key={wall.id} className='relative'>
                        <div className='absolute top-[20px]'>

                            <Badge variant={wall.availability.toLowerCase().includes('available') ? 'default' : 'secondary'} className=" text-base text-[#fff]  bg-[#01796F] rounded-l-[0]">
                                {wall.availability}
                            </Badge>
                        </div>
                        <Image
                            alt={`Wall Space ${wall.id}`}
                            className="w-full  h-60 object-cover mb-4 rounded-t-[10px]"
                            height="200"
                            src={wall.image}
                            style={{
                                aspectRatio: "300/200",
                                objectFit: "cover",
                            }}
                            width="300"
                        />

                        <CardContent>
                            <CardHeader className='border-b-[1px] border-[#a3ebec] mb-2 pb-2'>
                                <CardTitle className='text-[24px] text-[#03A9AC]   font-black'>{wall.type}</CardTitle>
                                <p className="text-base text-[#000] font-medium p-0"> {wall.location}</p>
                            </CardHeader>
                           
                            
                            <div className='flex gap-4'>
                                <p className="text-base font-medium flex gap-[4px] "> <span className='text-[#03A9AC] text-[5px] '><Ratio /></span>{wall.size}</p>
                                <p className="text-base font-medium  flex gap-[4px] "><span className='text-[#03A9AC] text-[5px] '><BookCheck /></span> {wall.position}</p>
                            </div>
                          
                            <p className="text-base mt-2 font-medium "><span>Rate:</span> {wall.rate}</p>
                            <p className="text-base mt-1 font-medium "><span className="">Crowded:</span> {wall.traffic}</p>
                            <p className="text-base mt-1 font-medium flex"><span className="">Restrictions:</span> {wall.restrictions}</p>
                        </CardContent>
                        <div className='pb-2 px-3'>
                            <Link href={`/wall/${wall.id}`}>
                                <Button size="sm" className='border m-2 border-[#a3ebec] text-sm font-medium'>View Details</Button>
                            </Link></div>




                    </Card>
                ))}
            </div>
        </div>
    );
}
