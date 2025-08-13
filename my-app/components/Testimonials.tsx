// components/Testimonials.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    message: string;
    image: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "John Doe",
        role: "Traveller",
        message:
            "This service completely changed my workflow! The team is amazing and the support is top-notch.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4.9,
    },
    {
        name: "Jane Smith",
        role: "Product Designer",
        message:
            "I love the simplicity and the impact it has made on my productivity. Highly recommended!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.9,
    },
    {
        name: "Mark Wilson",
        role: "Project Manager",
        message:
            "Fast, reliable, and user-friendly. Exactly what I was looking for! Thank you so much for this!",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        rating: 4.9,
    },
    {
        name: "Sophia Lee",
        role: "Marketing Specialist",
        message:
            "The quality and professionalism are unmatched. This service is a game changer.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 4.9,
    },
    {
        name: "Daniel Kim",
        role: "Entrepreneur",
        message:
            "I’ve been using this for months and it keeps exceeding my expectations. Thank You!",
        image: "https://randomuser.me/api/portraits/men/70.jpg",
        rating: 4.9,
    },
    {
        name: "Olivia Brown",
        role: "Event Planner",
        message:
            "Everything was seamless from start to finish. I couldn’t ask for a better experience.",
        image: "https://randomuser.me/api/portraits/women/80.jpg",
        rating: 4.9,
    },
];

export default function Testimonials() {
    return (
        <section className="py-8 md:py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div className="mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        What Our Customers Say
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mt-4">
                        Real experiences from travelers who booked their rides with us.
                    </p>
                </motion.div>



                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                                {`"${t.message}"`}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-gray-800 dark:text-gray-100 font-semibold">
                                            {t.name}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-4 h-4 fill-yellow-500" />
                                    <span className="text-sm font-semibold">
                                        {t.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
