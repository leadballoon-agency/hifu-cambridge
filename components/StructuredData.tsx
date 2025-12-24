export default function StructuredData() {
  // Main Organization/LocalBusiness Schema (consolidated)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://hifucambridge.com/#business",
    "name": "Diluxe Aesthetics Cambridge",
    "alternateName": ["HIFU Cambridge", "Diluxe Aesthetics"],
    "url": "https://hifucambridge.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hifucambridge.com/images/diluxe-logo.avif",
      "width": 512,
      "height": 512
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png",
      "width": 1080,
      "height": 1350,
      "caption": "Consolata - Aesthetic Practitioner at Diluxe Aesthetics Cambridge"
    },
    "description": "Expert HIFU non-surgical facelift treatments in Cambridge. Specialising in skin tightening, jowl lifting, and facial rejuvenation with zero downtime. Private home clinic in Cherry Hinton led by NVQ Level IV qualified practitioner Consolata.",
    "telephone": "",
    "email": "",
    "sameAs": [
      "https://www.instagram.com/diluxe.aesthetics"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "216 Cherry Hinton Road",
      "addressLocality": "Cambridge",
      "addressRegion": "Cambridgeshire",
      "postalCode": "CB1 7AW",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.1891,
      "longitude": 0.1456
    },
    "priceRange": "££",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Parking",
        "value": true
      }
    ],
    "isAccessibleForFree": false,
    "publicAccess": true,
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Klarna"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Cambridge" },
      { "@type": "City", "name": "Cherry Hinton" },
      { "@type": "City", "name": "Trumpington" },
      { "@type": "City", "name": "Fulbourn" },
      { "@type": "City", "name": "Great Shelford" },
      { "@type": "City", "name": "Sawston" },
      { "@type": "City", "name": "Ely" },
      { "@type": "City", "name": "Newmarket" }
    ],
    "founder": {
      "@type": "Person",
      "@id": "https://hifucambridge.com/#consolata",
      "name": "Consolata",
      "jobTitle": "Aesthetic Practitioner",
      "description": "NVQ Level IV qualified aesthetic practitioner specialising in HIFU treatments and natural enhancements",
      "image": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png",
      "knowsAbout": ["HIFU Treatment", "Non-Surgical Facelift", "Skin Tightening", "Aesthetic Medicine"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "datePublished": "2025-11-15",
        "reviewBody": "Consolata was fantastic from start to finish. She explained everything thoroughly and made me feel completely at ease. The results have been amazing - my jawline is so much more defined. Highly recommend!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jennifer K." },
        "datePublished": "2025-10-28",
        "reviewBody": "I was nervous about having HIFU but Consolata's professionalism and warm manner put me at ease immediately. The treatment was comfortable and I'm already seeing improvements in my skin tightness.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Michelle R." },
        "datePublished": "2025-09-14",
        "reviewBody": "Such a lovely experience at Diluxe Aesthetics. Consolata is incredibly knowledgeable and takes the time to understand exactly what you're hoping to achieve. My jowls have noticeably lifted!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HIFU Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://hifucambridge.com/#jawline-hifu",
            "name": "Jawline HIFU",
            "description": "Targeted HIFU treatment for jawline definition and jowl lifting. 60 minute session with immediate visible results.",
            "provider": { "@id": "https://hifucambridge.com/#business" }
          },
          "price": "195.00",
          "priceCurrency": "GBP",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://hifucambridge.com/#full-face-hifu",
            "name": "Full Face, Jowls, Neck & Eyelift HIFU",
            "description": "Complete non-surgical facelift targeting face, jowls, neck and eye area. 90 minute comprehensive treatment.",
            "provider": { "@id": "https://hifucambridge.com/#business" }
          },
          "price": "395.00",
          "priceCurrency": "GBP",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hifucambridge.com/#website",
    "name": "Diluxe Aesthetics Cambridge - HIFU Treatments",
    "alternateName": "HIFU Cambridge",
    "url": "https://hifucambridge.com",
    "description": "Expert HIFU non-surgical facelift treatments in Cambridge. Lift, tighten and rejuvenate without surgery.",
    "publisher": { "@id": "https://hifucambridge.com/#business" },
    "inLanguage": "en-GB"
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hifucambridge.com/#webpage",
    "url": "https://hifucambridge.com",
    "name": "HIFU Cambridge | Non-Surgical Facelift | Diluxe Aesthetics",
    "description": "Transform your look with HIFU at Diluxe Aesthetics Cambridge. Non-surgical facelift from £195. Lift, tighten & rejuvenate without surgery or downtime.",
    "isPartOf": { "@id": "https://hifucambridge.com/#website" },
    "about": { "@id": "https://hifucambridge.com/#business" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-GB"
  }

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is HIFU treatment painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients describe HIFU as comfortable with occasional mild discomfort. You may feel warmth and tingling as the ultrasound energy is delivered. Any discomfort is temporary and subsides immediately after treatment. No anaesthetic is required."
        }
      },
      {
        "@type": "Question",
        "name": "How long do HIFU results last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIFU results typically last 1-2 years, with some patients enjoying benefits for longer. Results continue to improve for 2-3 months after treatment as collagen production increases. Maintenance treatments can extend your results."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any downtime after HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One of the biggest advantages of HIFU is zero downtime! You can return to normal activities immediately. Some patients experience mild redness or slight swelling, but this typically resolves within a few hours."
        }
      },
      {
        "@type": "Question",
        "name": "How many HIFU treatments will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients see excellent results from a single HIFU treatment. For more significant lifting or older skin, a second treatment after 6-12 months may be recommended. We'll advise on the best plan during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Who is an ideal candidate for HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIFU is ideal for anyone with mild to moderate skin laxity - sagging jowls, drooping brows, loose neck skin, or early signs of ageing. It's perfect for those wanting lifting without surgery. We assess suitability during consultation."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see results from HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some lifting is visible immediately, but the best results develop over 2-3 months as new collagen forms. Your skin will continue to improve and tighten during this time, with peak results around 3 months post-treatment."
        }
      }
    ]
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hifucambridge.com"
      }
    ]
  }

  // Video Schema for testimonial
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "HIFU Treatment Testimonial - Diluxe Aesthetics Cambridge",
    "description": "Consolata discusses HIFU non-surgical facelift treatments at Diluxe Aesthetics Cambridge",
    "thumbnailUrl": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png",
    "contentUrl": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0855176fb072c7edefcc.mp4",
    "uploadDate": "2025-12-24",
    "duration": "PT2M",
    "publisher": { "@id": "https://hifucambridge.com/#business" }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
    </>
  )
}
