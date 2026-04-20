"use client";

import React from "react";

export default function AIProfileSection() {
    return (
        <section className="relative py-20 px-6 text-white">

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    AI Expert Profile
                </h2>

                {/* Intro */}
                <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
                    Data & Applied Scientist at Microsoft, Founder of Thinklytics AI,
                    and trainer of 1M+ professionals in AI, ML & GenAI.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        "1M+ Trained",
                        "50K+ LinkedIn",
                        "20K+ YouTube",
                        "30+ Brands",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-xl text-center border border-white/10"
                        >
                            <p className="text-lg font-semibold">{item}</p>
                        </div>
                    ))}
                </div>

                {/* About */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold mb-4">About</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Divij Bajaj is a Data & Applied Scientist at Microsoft specializing in GenAI solutions.
                        Founder of Thinklytics AI and creator of Edu.AI, he has trained over 1 million learners globally.
                    </p>
                </div>

                {/* Expertise */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold mb-6">Expertise</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Generative AI & LLMs",
                            "AI Automation & Agents",
                            "NLP & Computer Vision",
                            "AI Product Development",
                            "Data Science & Analytics",
                            "AI Strategy & Consulting",
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="p-4 border border-white/10 rounded-lg bg-white/5"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition">
                        Work With Us
                    </button>
                </div>
            </div>
        </section>
    );
}