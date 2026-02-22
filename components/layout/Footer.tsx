import Link from "next/link"
import { portfolioData } from "@/data/portfolio"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <Link
                            href={portfolioData.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Muhammad Amerul
                        </Link>
                        . Designed for modern web applications.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap justify-center">
                    <Link href="#about" className="hover:underline underline-offset-4">About</Link>
                    <Link href="#projects" className="hover:underline underline-offset-4">Projects</Link>
                    <Link href="#contact" className="hover:underline underline-offset-4">Contact</Link>
                </div>
            </div>
        </footer>
    )
}
