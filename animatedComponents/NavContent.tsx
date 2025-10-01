"use client"

import { Links } from "@/constants/data"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const NavContent = () => {

    const navRef = useRef<HTMLElement | null>(null);

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
        })
    }, {scope: navRef})

return (
    <nav ref={navRef} className=" bg-white/50 backdrop-blur-[5px] text-text font-cabinet-bold flex justify-between items-center p-6 m-3 rounded-full z-90">
        <div className="logo font-cabinet-bold text-xl">
            <h1>Center Nour</h1>
        </div>

        <div className="links ">
            <ul className="flex items-center space-x-8">
                {Links.map((link) => (
                    <Link className="transition-transform duration-300 hover:-translate-y-1" key={link.name} href={''}>
                        <li className="link">{link.name}</li>
                    </Link>
                ))}
                
            </ul>
        </div>

        <div className="contact-link">
            <Link href={""} className="">
                <p className="transition-transform duration-300 hover:-translate-y-1">Contact Me</p>
            </Link>
        </div>
    </nav>
)
}

export default NavContent