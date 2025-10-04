"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  // GSAP animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%", // when footer enters viewport
      },
    });

    tl.from(".footer-col", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 text-white py-8 mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + tagline */}
        <div className="footer-col space-y-4">
          <h2 className="text-2xl font-cabinet-ExtraBold">Nour Center</h2>
          <p className="text-sm font-cabinet-Medium text-pink-100">
            Prenez soin de vous avec nos soins esthétiques et relaxants.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col space-y-3">
          <h3 className="text-lg font-cabinet-bold">Navigation</h3>
          <ul className="space-y-2 text-pink-100 font-cabinet-Medium">
            <li><Link href="#hero" className="hover:text-white">Accueil</Link></li>
            <li><Link href="#about" className="hover:text-white">À propos</Link></li>
            <li><Link href="#services" className="hover:text-white">Services</Link></li>
            <li><Link href="#booking" className="hover:text-white">Réservation</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + social */}
        <div className="footer-col space-y-3 font-cabinet-Medium">
          <h3 className="text-lg font-cabinet-bold">Contact</h3>
          <p className="text-pink-100 text-sm ">
            Rue Exemple, Casablanca, Maroc
          </p>
          <p className="text-pink-100 text-sm">+212 05 23 48 84 34</p>
          <p className="text-pink-100 text-sm">contact@nourcenter.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <Link href="https://www.facebook.com/centreennourbm" target="_blank">
              <Facebook className="w-5 h-5 hover:text-white" />
            </Link>
            <Link href="https://www.instagram.com/centre_ennour" target="_blank">
              <Instagram className="w-5 h-5 hover:text-white" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-pink-400 pt-6 text-center text-sm text-pink-100">
        © {new Date().getFullYear()} Nour Center. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
