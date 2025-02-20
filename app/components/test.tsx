"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Apple, CrossIcon, Earth, Github, NavigationOffIcon } from "lucide-react";
import Image from "next/image";

export default function AnimatedList() {
    const logos = [
        {
            icon: '/ss.png',

            alt: "عميل رقم 1",
            description: "Seamless payment processing for modern businesses",
        },
        {
            icon: '/ss.png',
            alt: "عميل",
            description: "Where the world builds software",
        },
        {
            icon: '/ss.png',
            alt: "عميل رقم 1",
            description: "A utility-first CSS framework",
        },
        {
            icon: '/ss.png',
            alt: "عميل",
            description: "A JavaScript library for building user interfaces",
        },
        {
            icon: '/ss.png',
            alt: "7 عميل",
            description: "The React framework for production",
        },
        {
            icon: '/ss.png',
            alt: "عميل 7",
            description: "The world's leading search engine",
        },
        {
            icon: '/ss.png',
            alt: "عميل 6",
            description: "What's happening now",
        },
    ];

    // Add hover state management
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="relative w-full py-20 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center px-4">
                <div className="mb-16">
                    <div
                        className="relative flex gap-8 overflow-hidden"
                        style={{
                            maskImage:
                                "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
                        }}
                    >
                        <motion.div
                            className="flex gap-8"
                            animate={{
                                x: [0, -1920],
                            }}
                            transition={{
                                x: {
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "loop",
                                    duration: 10,
                                    ease: "easeInOut",
                                },
                            }}
                            // Add pause on hover
                            whileHover={{ animationPlayState: "paused" }}
                        >
                            {/* First set of cards */}
                            {logos.map((Logo, index) => (
                                <motion.div
                                    key={`original-${index}`}
                                    className="shrink-0 w-[300px] bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4"
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                >
                                    <Image
                                        src={Logo.icon || '/placeholder.svg'}
                                        alt={Logo.alt}
                                        width={160}
                                        height={80}
                                        className="max-h-12 object-contain"
                                    />
                                    <h3 className="text-lg font-semibold">
                                        {Logo.alt}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {Logo.description}
                                    </p>
                                </motion.div>
                            ))}
                            {/* Duplicate set */}
                            {logos.map((Logo, index) => (
                                <motion.div
                                    key={`duplicate-${index}`}
                                    className="shrink-0 w-[300px] bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4"
                                    onHoverStart={() =>
                                        setHoveredIndex(index + logos.length)
                                    }
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                >
                                    <Image
                                        src={Logo.icon || '/placeholder.svg'}
                                        alt={Logo.alt}
                                        width={160}
                                        height={80}
                                        className="max-h-12 object-contain"
                                    />                                    <h3 className="text-lg font-semibold">
                                        {Logo.alt}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {Logo.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
