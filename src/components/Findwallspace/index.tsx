"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '../Common-ui/input';
import { Button } from '../Common-ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../Common-ui/card';

const wallSpaces = [
    { id: 1, location: "City Center", size: "20ft x 30ft", rate: "$100", image: "/assets/water.jpg" },
    { id: 2, location: "Downtown", size: "15ft x 25ft", rate: "$80", image: "/assets/travel.jpg" },
    { id: 3, location: "Suburbs", size: "25ft x 35ft", rate: "$120", image: "/assets/water.jpg" },
    { id: 4, location: "Industrial Area", size: "30ft x 40ft", rate: "$150", image: "/assets/travel.jpg" },
    { id: 5, location: "Uptown", size: "18ft x 28ft", rate: "$90", image: "/assets/water.jpg" },
    { id: 6, location: "Residential Zone", size: "22ft x 32ft", rate: "$110", image: "/assets/travel.jpg" },
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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Find Wall Space</h1>
            <div className="flex gap-4 mb-8">
                <Input
                    className="flex-grow"
                    placeholder="Search by location, size, etc."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button onClick={() => setSearchQuery('')}>Clear</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredWallSpaces.map((wall) => (
                    <Card key={wall.id}>
                        <CardHeader>
                            <CardTitle>Wall Space #{wall.id}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                alt={`Wall Space ${wall.id}`}
                                className="w-full h-48 object-cover mb-4 rounded-md"
                                height="200"
                                src={wall.image}
                                style={{
                                    aspectRatio: "300/200",
                                    objectFit: "cover",
                                }}
                                width="300"
                            />
                            <p className="text-sm text-gray-500 dark:text-gray-400">Location: {wall.location}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Size: {wall.size}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Daily Rate: {wall.rate}</p>
                        </CardContent>
                        <Link href={`/wall/${wall.id}`}>
                            <Button size="sm" className='border m-2'>View Details</Button>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
