"use client";

import Image from "next/image";
import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function DriveWithUs() {
    return (
        <motion.section
            className="mx-6 md:mx-40 px-8 md:px-16 py-8 md:py-0 bg-[#166086] rounded-xl flex flex-col md:flex-row items-center justify-between text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Left Content */}
            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Let&apos;s Drive With Rental Today!
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-md">
                    Make your car rental experience even more convenient by downloading
                    the T Ranz app. Available on both iOS and Android platforms, our app
                    brings a range of features to your fingertips.
                </p>

                {/* Store Buttons */}
                <motion.div
                    className="flex gap-2 md:gap-4 mt-6 flex-row flex-nowrap md:flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                >
                    {/* Google Play */}
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-black text-white rounded-xl px-3 py-2 md:px-5 md:py-3 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all"
                    >
                        <div className="bg-white p-1 rounded-md">
                            <Play className="w-4 h-4 md:w-5 md:h-5 text-black fill-black" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[8px] md:text-[10px] uppercase tracking-wide">
                                Get it on
                            </span>
                            <span className="text-sm md:text-base font-semibold">
                                Google Play
                            </span>
                        </div>
                    </a>

                    {/* App Store */}
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-black text-white rounded-xl px-3 py-2 md:px-5 md:py-3 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all"
                    >
                        <div className="bg-white p-1 rounded-md">
                            <Apple className="w-4 h-4 md:w-5 md:h-5 text-black" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[8px] md:text-[10px]">Download on the</span>
                            <span className="text-sm md:text-base font-semibold">
                                App Store
                            </span>
                        </div>
                    </a>
                </motion.div>
            </motion.div>

            {/* Right Cars Image */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                <Image
                    src="/images/DriveWithUs.png"
                    alt="Cars"
                    width={500}
                    height={250}
                    className="object-contain"
                />
            </motion.div>
        </motion.section>
    );
}
