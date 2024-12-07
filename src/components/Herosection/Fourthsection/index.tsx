"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/Common-ui/button';

interface Template {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

interface TemplateSectionProps {
    templates: Template[];
}

const templates: Template[] = [
    {
        id: 1,
        title: "Modern Billboard",
        description: "A sleek and attention-grabbing design for urban environments.",
        imageUrl: "/assets/water.jpg" // Use the relative path as a string
    },
    {
        id: 2,
        title: "Vintage Poster",
        description: "A classic look that brings nostalgia and charm to your advertisement.",
        imageUrl: "/assets/dow1.avif" // Use the relative path as a string
    },
    {
        id: 3,
        title: "Digital Display",
        description: "Perfect for dynamic content and interactive advertisements.",
        imageUrl: "/assets/travel.jpg" // Use the relative path as a string
    }
];

const TemplateCard: React.FC<Template> = ({ title, description, imageUrl }) => (
    <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <Image
            src={imageUrl}
            alt={title}
            className="w-full h-60 object-cover"
            width={500} // Set appropriate width
            height={350} // Set appropriate height
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <Button className=' bg-[#18181b] text-[#fff] p-2 font-semibold'>Use Template</Button>
        </div>
    </motion.div>
);

const TemplateSection: React.FC = () => {
    return (
        <section className="pb-[100px] md:px-0 px-5">
            <div className="container mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-8">Choose a Template</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template) => (
                        <TemplateCard key={template.id} {...template} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TemplateSection;
