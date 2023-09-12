"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Gene",
        avatar: "G",
        title: "Software Engineer",
        description: "I made this, I literally made this."
    },
    {
        name: "Victoria",
        avatar: "V",
        title: "Graphic Designer",
        description: "I love the ImageWizard! It's extremely fun to use and helps me a lot!"
    },
    {
        name: "Harrison",
        avatar: "H",
        title: "Software Engineer",
        description: "Definitely one of the better AI tools I've ever used!"
    },
    {
        name: "Duc-Thanh",
        avatar: "DT",
        title: "Software Sales",
        description: "Multiple AIs on a single platform? This is fantastic!"
    },
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}