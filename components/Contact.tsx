"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Link from "next/link"
import { useRef } from 'react'
import TextSplitAnimation from '@/commonAnimations/TextSplitAnimation'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const ContactRefSec = useRef<HTMLElement | null>(null)

    useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ContactRefSec.current,
        start: "top bottom",
        end: "bottom bottom"
      }
    })

    tl.add(TextSplitAnimation(".section-title"))
    tl.add(TextSplitAnimation(".section-paragraph"), "<=0.3")

    tl.from([".contact-card", ".contact-btn"], {
      opacity: 0,
      xPercent: -20,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.07
    })

}, {scope: ContactRefSec})

  return (
    <section ref={ContactRefSec} className="py-16 bg-white/50 md:rounded-[20px]" id="contact">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
        {/* Title */}
        <div>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-pink-700">
            Contact & Localisation
          </h2>
          <p className="section-paragraph text-gray-600 mt-2">
            Prenez rendez-vous dès aujourd’hui et découvrez notre centre dédié
            au bien-être et à la santé.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-700">
          <div className='contact-card'>
            <p className="font-semibold">📍 Adresse</p>
            <p>Centre Ennour, Beni Mellal</p>
          </div>

          <div className='contact-card'>
            <p className="font-semibold">📞 Téléphone</p>
            <a
              href="tel:+212600000000"
              className="text-pink-600 hover:underline"
            >
              +212 6 00 00 00 00
            </a>
          </div>

          <div className='contact-card'>
            <p className="font-semibold">💬 WhatsApp</p>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              className="text-pink-600 hover:underline"
            >
              +212 6 00 00 00 00
            </a>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="contact-btn">
          <Link
            href={"#booking"}
            target="self"
            className="inline-block px-8 py-3 btn-hover rounded-full bg-pink-600 text-white font-semibold shadow-md"
          >
            Prendre rendez-vous
          </Link>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385.18869342595167!2d-6.3602001427364385!3d32.33269235692287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3865608812379%3A0x2063403a716133f4!2sCentre%20Enour%20de%20R%C3%A9%C3%A9ducation%20et%20d&#39;amincissement!5e1!3m2!1sfr!2sma!4v1759480104788!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact