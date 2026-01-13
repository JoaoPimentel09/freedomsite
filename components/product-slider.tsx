"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import ContactFormButton from "./contact-form-button"
import { register } from "swiper/element/bundle"

// Register Swiper custom elements
register()

interface Product {
  name: string
  model: string
  image: string
}

export default function ProductSlider() {
  const swiperElRef = useRef<HTMLElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  const products: Product[] = [
    { name: "FREEDOM", model: "DF700", image: "/images/df700.png" },
    { name: "FREEDOM", model: "DF1000", image: "/images/df1000.png" },
    { name: "FREEDOM", model: "DF2000", image: "/images/df2000.png" },
  ]

  useEffect(() => {
    // Add Swiper CSS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    document.head.appendChild(link)

    // Function to check if mobile view
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1200)
    }

    // Initial check
    checkIfMobile()

    // Add resize listener
    window.addEventListener("resize", checkIfMobile)

    // Configure Swiper
    if (swiperElRef.current) {
      const swiperParams = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        pagination: {
          clickable: true,
        },
        navigation: true,
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        },
      }

      // Assign parameters to Swiper element
      Object.assign(swiperElRef.current, swiperParams)

      // Initialize Swiper
      swiperElRef.current.initialize()
    }

    return () => {
      // Clean up
      window.removeEventListener("resize", checkIfMobile)
      document.head.removeChild(link)
    }
  }, [])

  // Render products as a grid on desktop and as a slider on mobile
  if (!isMobile) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    )
  }

  // Render as Swiper on mobile
  return (
    <div className="mySwiper w-full">
      <swiper-container ref={swiperElRef} init="false">
        {products.map((product, index) => (
          <swiper-slide key={index} class="slide">
            <ProductCard product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center h-full">
      <div className="h-48 flex items-center justify-center mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} ${product.model}`}
          width={200}
          height={180}
          className="object-contain"
        />
      </div>
      <h3 className="font-bold text-xl">{product.name}</h3>
      <p className="text-gray-500">{product.model}</p>
      <p className="text-center my-4">Freedom {product.model} com condições exclusivas para compra em atacado</p>
      <div className="mt-auto pt-4">
        <ContactFormButton />
      </div>
    </div>
  )
}
