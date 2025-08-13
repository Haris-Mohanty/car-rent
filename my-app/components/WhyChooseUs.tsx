'use client';

import { Phone, Tag, MapPin, Users } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Choose Us
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We go beyond just car rentals — delivering comfort, safety, and unbeatable value to make every ride special.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* Car Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/WhyChooseUs.png" 
                            alt="Luxury Car"
                            width={600}
                            height={350}
                            className="object-contain"
                        />
                    </div>

                    {/* Features */}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <Phone className="w-8 h-8 text-blue-600" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Customer Support</h3>
                                <p className="text-gray-600">We provide 24/7 support for all your booking needs.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Tag className="w-8 h-8 text-blue-600" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Best Price Guaranteed</h3>
                                <p className="text-gray-600">Enjoy competitive rates with no hidden fees.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <MapPin className="w-8 h-8 text-blue-600" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Many Locations</h3>
                                <p className="text-gray-600">Access our wide range of pick-up and drop-off points.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Users className="w-8 h-8 text-blue-600" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Experienced Drivers</h3>
                                <p className="text-gray-600">Travel with our professional and skilled drivers.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;