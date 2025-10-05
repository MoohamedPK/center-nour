"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextSplitAnimation from "@/commonAnimations/TextSplitAnimation"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

interface ServicesProps {
    id: number,
    title: string,
    icon: string,
    description: string
}

const ServicesContent = ({services}: {services: ServicesProps[]} ) => {

    const servicesSectionRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: servicesSectionRef.current,
                start: "top center",
                end: "bottom bottom"
            }
        })
        
        tl.add(TextSplitAnimation(".section-title"))
        tl.fromTo(".card", {
                opacity: 0,
                x: -50,
                skewY: -4
            }, {
                skewY:0,
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.inOut",
                stagger: 0.06
            }, "<0.3")

            tl.from(".card-icon", {
                opacity: 0,
                x: -20
            })
            tl.add(TextSplitAnimation(".card-title"), "<0.4")
            tl.add(TextSplitAnimation(".card-description"), "<0.2")


    }, {scope: servicesSectionRef})

return (
    <div ref={servicesSectionRef} className="py-16 bg-white/50 md:rounded-[20px]" id="services">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
        <h2 className="section-title text-3xl md:text-4xl font-cabinet-bold text-pink-700">
            Nos Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
            {services.map(service => (
            <div key={service.id} className="card p-6 rounded-2xl shadow-lg bg-sec hover:shadow-xl transition">
                <span className="card-icon text-4xl text-pink-600">{service.icon}</span>
                <h3 className="card-title text-xl font-cabinet-Medium mt-4">{service.title}</h3>
                <p className="card-description text-gray-600 mt-2 text-[15px] font-cabinet-Medium">{service.description}</p>
            </div>
            ))}
        </div>
    </div>
</div>
)
}

export default ServicesContent