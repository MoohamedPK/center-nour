"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {SplitText} from "gsap/SplitText"
import Image from "next/image"
import TextSplitAnimation from "@/commonAnimations/TextSplitAnimation"

gsap.registerPlugin(SplitText)

const HeroContent = () => {

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.add(TextSplitAnimation(".heroText"))
        tl.add(TextSplitAnimation(".heroPara"), "-=0.5")

        tl.fromTo(".heroBtn", {
            x: -20,
            opacity: 0
        }, {
            x: 0,
            ease: "power3.inOut",
            duration: 0.5,
            opacity: 1,
            stagger: 0.05
        })

        tl.fromTo(".hero-img", {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            // skewY: 10
            scale: 0.4
        }, {
            // skewY:0,
            scale: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            ease: "power3.inOut",
        }, "-=0.5")

    })

return (
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
    {/* Left side - Text */}
    <div className="flex-1 text-center md:text-left space-y-6 font-cabinet-Medium">
        <h1 className="heroText text-4xl md:text-6xl font-extrabold text-text leading-tight upper">
        Ikram Yassine <br />
        <span className=" text-pink-600">Fondatrice & Directrice</span> <br />
        du Centre Ennour de <br />
        <span className=" text-pink-600">Bien-être & Santé</span>
        </h1>

        <p className="heroPara text-lg text-text max-w-xl mx-auto md:mx-0">
            Découvrez un espace dédié à votre bien-être, sérénité et santé avec des soins personnalisés.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <button className="heroBtn px-6 py-3 rounded-full bg-pink-600 text-sec font-semibold hover:bg-pink-700  btn-hover cursor-pointer">
            Découvrir nos services
        </button>
        <button className="heroBtn px-6 py-3 rounded-full border border-pink-600 text-pink-600 font-semibold hover:bg-pink-50  btn-hover cursor-pointer">
            Prendre rendez-vous
        </button>
        </div>
    </div>

    {/* Right side - Image */}
    <div className="flex-1 lg:flex justify-center hidden">
        <div className="hero-img relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
        <Image 
            src="/media/ikram-image.jpg" 
            alt="Ikram Yassine" 
            fill
            className=" object-cover"
            priority
        />
        </div>
    </div>
    </div>
)
}

export default HeroContent