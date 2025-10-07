"use client";

import { bookingServices } from "@/constants/data";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm, SubmitHandler } from "react-hook-form";
import TextSplitAnimation from "@/commonAnimations/TextSplitAnimation";

gsap.registerPlugin(ScrollTrigger);

type Inputs = {
  name: string;
  age: string;
  phone: string;
  city: string;
  service: string;
};

const Booking = () => {
  const BookingRefSec = useRef<HTMLElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setStatusMessage({ type: null, text: "" });

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ?? "", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire.");
      }

      const result = await res.json();
      console.log("success", result);

      setStatusMessage({
        type: "success",
        text: "Votre réservation a été envoyée avec succès ! 🎉",
      });
      reset();
    } catch (error) {
      console.error(error);
      setStatusMessage({
        type: "error",
        text: "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  // GSAP animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: BookingRefSec.current,
          start: "top bottom",
          end: "bottom center",
        },
      });

      tl.add(TextSplitAnimation(".section-title"));
      tl.add(TextSplitAnimation(".section-paragraph"), "<=0.3");

      tl.from(".input", {
        opacity: 0,
        yPercent: 30,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.07,
      });

      tl.from(".form-btn", {
        opacity: 0,
        yPercent: 30,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.07,
      });
    },
    { scope: BookingRefSec }
  );

  return (
    <section
      ref={BookingRefSec}
      id="booking"
      className="py-20 bg-white/50 md:rounded-[20px]"
    >
      <div className="container mx-auto px-6 md:px-12 text-center space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="section-title text-3xl md:text-4xl font-cabinet-ExtraBold text-text">
            Réservez votre séance
          </h2>
          <p className="section-paragraph text-lg text-text font-cabinet-Medium max-w-2xl mx-auto">
            Prenez rendez-vous en ligne et choisissez le service qui vous convient
            pour profiter de nos soins.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-pink-100 font-cabinet-Medium">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="input text-left">
              <label className="block text-sm font-medium text-text mb-2">
                Nom complet
              </label>
              <input
                {...register("name", { required: "Le nom est requis" })}
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-300 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Age */}
            <div className="input text-left">
              <label className="block text-sm font-medium text-text mb-2">
                Quel âge avez-vous ?
              </label>
              <input
                {...register("age", {
                  required: "L’âge est requis",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Entrez un âge valide",
                  },
                })}
                type="text"
                placeholder="Votre âge"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-300 focus:outline-none"
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="input text-left">
              <label className="block text-sm font-medium text-text mb-2">
                Téléphone
              </label>
              <input
                {...register("phone", {
                  required: "Le numéro est requis",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Entrez un numéro valide à 10 chiffres",
                  },
                })}
                type="tel"
                placeholder="Votre numéro"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-300 focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* City */}
            <div className="input text-left">
              <label className="block text-sm font-medium text-text mb-2">
                Vous êtes de quel ville ?
              </label>
              <input
                {...register("city", { required: "La ville est requise" })}
                type="text"
                placeholder="Votre ville"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-300 focus:outline-none"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* Service */}
            <div className="input text-left">
              <label className="block text-sm font-medium text-text mb-2">
                Service souhaité
              </label>
              <select
                {...register("service", { required: "Le service est requis" })}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-300 focus:outline-none"
              >
                <option value="">-- Choisissez un service --</option>
                {bookingServices.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-btn w-full bg-pink-600 text-white py-3 rounded-xl disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Envoi..." : "Confirmer ma réservation"}
            </button>
          </form>

          {/* Status messages */}
          {statusMessage.type && (
            <p
              className={`mt-4 text-sm ${
                statusMessage.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusMessage.text}
            </p>
          )}
        </div>

        {/* Alternative CTA */}
        <p className="text-text font-cabinet-Medium">
          Ou contactez-nous directement au{" "}
          <span className="font-semibold text-pink-600">+212 06 42 86 95 28</span>
        </p>
      </div>
    </section>
  );
};

export default Booking;
