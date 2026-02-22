"use client"

import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, CalendarClock } from "lucide-react"

export function Contact() {
    const { contact } = portfolioData

    const waysToConnect = [
        {
            title: "Email",
            description: contact.email,
            icon: <Mail className="w-5 h-5 text-primary" />,
            link: `mailto:${contact.email}`
        },
        {
            title: "GitHub",
            description: "github.com/amerul95",
            icon: <Github className="w-5 h-5 text-primary" />,
            link: contact.github
        },
        {
            title: "LinkedIn",
            description: "Connect professionally",
            icon: <Linkedin className="w-5 h-5 text-primary" />,
            link: contact.linkedin
        }
    ]

    return (
        <Section id="contact" className="bg-muted/30">
            <SectionHeading
                title="Get in Touch"
                subtitle="Available for full-time roles, consulting, or discussions about modern web architecture."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    {waysToConnect.map((way, idx) => (
                        <a key={idx} href={way.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="hover:border-primary/50 transition-colors bg-card group-hover:bg-primary/5">
                                <CardHeader className="flex flex-row items-center gap-4 py-4">
                                    <div className="w-10 h-10 rounded-full bg-background border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                        {way.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-base">{way.title}</CardTitle>
                                        <CardDescription className="text-sm">{way.description}</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        </a>
                    ))}
                </motion.div>
{/* 
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="h-full flex flex-col justify-center items-center text-center p-8 bg-card border shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <CalendarClock className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl mb-2">Book a Call</CardTitle>
                        <CardDescription className="text-base max-w-[300px] mx-auto mb-8">
                            Want to skip the emails? Schedule a quick chat directly.
                        </CardDescription>
                        <a
                            href="https://calendly.com/placeholder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full md:w-auto shadow-sm"
                        >
                            Schedule Meeting
                        </a>
                    </Card>
                </motion.div> */}
            </div>
        </Section>
    )
}
