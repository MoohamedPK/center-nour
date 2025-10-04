"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextSplitAnimation from "@/commonAnimations/TextSplitAnimation"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef } from "react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const Description = () => {

    const descriptionContainerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: descriptionContainerRef.current,
                start: "top bottom",
                end: "bottom bottom",
            }
        })

        tl.add(TextSplitAnimation(".section-title"))
        tl.add(TextSplitAnimation(".about-text"), "<=0.3")
        tl.fromTo(".about-btn", {
            y: 40,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.inOut",
        }, "<=0.6")
        

    }, {scope: descriptionContainerRef})

return (
    <div ref={descriptionContainerRef} className="py-16 rounded-[20px] bg-white/50" id="about">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-6">

            <h2 className="section-title text-3xl md:text-4xl font-cabinet-bold text-pink-700">
                À propos du Centre Ennour
            </h2>

            <p className="about-text text-lg text-gray-700 leading-relaxed font-cabinet-Medium">
                Le Centre Ennour est un espace dédié au bien-être, à la beauté et à la santé.
                Fondé par <span className="font-cabinet-bold">Ikram Yassine</span>, le centre propose
                des soins personnalisés qui allient expertise, détente et attention,
                afin d’offrir à chaque cliente une expérience unique de sérénité et de confiance.
            </p>

            <Link href={"#services"}>
                <button className="about-btn cursor-pointer transition duration-300 px-6 py-3 font-cabinet-bold rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 ">
                    Découvrir nos services
                </button>
            </Link>
        </div>
    </div>
)
}

export default Description