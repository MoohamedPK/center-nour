"use client"

import { Links } from "@/constants/data"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

gsap.registerPlugin(ScrollTrigger);

const NavContent = () => {
    const navRef = useRef<HTMLElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        gsap.to(navRef.current, {
        position: "sticky",
        top: 10,
        ease: "power3.inOut",
        duration: 0.5,
        scrollTrigger: {
            trigger: navRef.current,
            start: "top top",
            end: "+=200",
        },
        });
    }, { scope: navRef });

    // Animate mobile menu open/close
    useEffect(() => {
        if (isOpen) {
        gsap.fromTo(
            menuRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
        } else {
        gsap.to(menuRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
        });
        }
    }, [isOpen]);

    return (
        <nav
        ref={navRef}
        className="bg-white/50 backdrop-blur-[5px] text-text font-cabinet-bold flex justify-between items-center 
                    p-4 sm:p-6 m-2 sm:m-3 rounded-full z-90 relative"
        >
        {/* Logo */}
        <div className="logo font-cabinet-bold text-lg sm:text-xl">
            <Image
            src={"/media/center-nour-logo 1.png"}
            alt="center nour logo"
            className="h-8 sm:h-10 w-auto"
            width={120}
            height={40}
            />
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:block">
            <ul className="flex items-center space-x-8">
            {Links.map((link) => (
                <Link
                className="transition-transform duration-300 hover:-translate-y-1"
                key={link.name}
                href={link.href}
                >
                <li className="link">{link.name}</li>
                </Link>
            ))}
            </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
            className="sm:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
        >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
            ref={menuRef}
            className={`absolute top-full left-0 w-full bg-white/90 backdrop-blur-md rounded-2xl mt-2 shadow-lg sm:hidden 
                    ${isOpen ? "block" : "hidden"}`}
        >
            <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
            {Links.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // close after click
                className="transition-colors duration-200 hover:text-pink-600"
                >
                <li>{link.name}</li>
                </Link>
            ))}
            </ul>
        </div>
        </nav>
    );
};

export default NavContent;
