import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Centre Ennour",
    "description": "Centre dédié au bien-être, à la beauté et à la santé à Beni Mellal. Soins personnalisés par Ikram Yassine.",
    "founder": {
      "@type": "Person",
      "name": "Ikram Yassine",
      "jobTitle": "Fondatrice & Directrice"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Centre Ennour",
      "addressLocality": "Beni Mellal",
      "addressCountry": "MA"
    },
    "telephone": "+2120523488434",
    "url": "https://centre-ennour.ma",
    "logo": "https://centre-ennour.ma/media/center-nour-logo 1.png",
    "image": "https://centre-ennour.ma/media/center-nour-logo 1.png",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services du Centre Ennour",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kinésithérapie",
            "description": "Des soins adaptés pour soulager vos douleurs et améliorer votre mobilité."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nutrition & Micronutrition",
            "description": "Des programmes personnalisés pour retrouver équilibre et vitalité."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Amincissement",
            "description": "Méthodes naturelles et avancées pour affiner votre silhouette."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Épilation Définitive",
            "description": "Une peau douce et lisse grâce à des techniques modernes d'épilation définitive."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soins Anti-Âge",
            "description": "Rajeunissez votre peau et réduisez les signes du temps avec nos soins anti-âge."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soins Médico-Esthétiques",
            "description": "Des traitements esthétiques médicaux pour sublimer votre beauté naturelle."
          }
        }
      ]
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="">
        <Nav/>

        <section className="">
          <Hero/>
        </section>

        <section className="section-container">
          <Description/>
        </section>

        <section className="section-container">
          <Services/>
        </section>

        <section className="section-container">
          <Booking/>
        </section>

        <section className="section-container">
          <Contact/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
