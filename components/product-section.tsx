"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { WhatsAppIcon } from "./whatsapp-icon"
import Script from "next/script"
import { BatteryDetailsModal } from "./battery-details-modal"

interface Product {
  name: string
  model: string
  image: string
}

export default function ProductSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentBatteryModel, setCurrentBatteryModel] = useState<string | null>(null)
  const [swiperLoaded, setSwiperLoaded] = useState(false)
  const swiperContainerRef = useRef<HTMLDivElement>(null)

  const products: Product[] = [
    { name: "FREEDOM", model: "DF300", image: "/images/df300.webp" },
    { name: "FREEDOM", model: "DF500", image: "/images/df500.webp" },
    { name: "FREEDOM", model: "DF700", image: "/images/df700.webp" },
    { name: "FREEDOM", model: "DF1000", image: "/images/df1000.webp" },
    { name: "FREEDOM", model: "DF1500", image: "/images/df1500.webp" },
    { name: "FREEDOM", model: "DF2000", image: "/images/df2000.webp" },
    { name: "FREEDOM", model: "DF2500", image: "/images/df2500.webp" },
    { name: "FREEDOM", model: "DF3000", image: "/images/df3000.webp" },
    { name: "FREEDOM", model: "DF4100", image: "/images/df4100.webp" },
  ]

  useEffect(() => {
    if (swiperLoaded && swiperContainerRef.current) {
      // @ts-ignore - Swiper is loaded via CDN
      const swiper = new window.Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      })

      return () => {
        swiper.destroy()
      }
    }
  }, [swiperLoaded])

  const handleOpenDetails = (model: string) => {
    setCurrentBatteryModel(model)
    setIsOpen(true)
  }

  return (
    <div className="container mx-auto px-4 relative z-10">
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" onLoad={() => setSwiperLoaded(true)} />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

      {/* Background Gear Icon */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M149.5 0C154.7 0 159.8 0.2 164.9 0.7L170.9 25.3C175.9 26.2 180.8 27.4 185.5 28.9L204.4 11.5C213.9 15.7 222.8 21 230.9 27.2L224.1 53.1C227.7 56.6 231.1 60.3 234.2 64.3L259.8 57.5C265.9 65.7 271.1 74.6 275.3 84.1L257.9 103C259.4 107.7 260.6 112.6 261.5 117.6L286.1 123.6C286.6 128.7 286.8 133.8 286.8 139C286.8 144.2 286.6 149.3 286.1 154.4L261.5 160.4C260.6 165.4 259.4 170.3 257.9 175L275.3 193.9C271.1 203.4 265.8 212.3 259.6 220.4L233.7 213.6C230.2 217.2 226.5 220.6 222.5 223.7L229.3 249.3C221.1 255.4 212.2 260.6 202.7 264.8L183.8 247.4C179.1 248.9 174.2 250.1 169.2 251L163.2 275.6C158.1 276.1 153 276.3 147.8 276.3C142.6 276.3 137.5 276.1 132.4 275.6L126.4 251C121.4 250.1 116.5 248.9 111.8 247.4L92.9 264.8C83.4 260.6 74.5 255.3 66.4 249.1L73.2 223.2C69.6 219.7 66.2 216 63.1 212L37.5 218.8C31.4 210.6 26.2 201.7 22 192.2L39.4 173.3C37.9 168.6 36.7 163.7 35.8 158.7L11.2 152.7C10.7 147.6 10.5 142.5 10.5 137.3C10.5 132.1 10.7 127 11.2 121.9L35.8 115.9C36.7 110.9 37.9 106 39.4 101.3L22 82.4C26.2 72.9 31.5 64 37.7 55.9L63.6 62.7C67.1 59.1 70.8 55.7 74.8 52.6L68 27C76.2 20.9 85.1 15.7 94.6 11.5L113.5 28.9C118.2 27.4 123.1 26.2 128.1 25.3L134.1 0.7C139.2 0.2 144.3 0 149.5 0ZM149.5 82.5C113.9 82.5 85 111.4 85 147C85 182.6 113.9 211.5 149.5 211.5C185.1 211.5 214 182.6 214 147C214 111.4 185.1 82.5 149.5 82.5ZM149.5 105C172.8 105 191.5 123.7 191.5 147C191.5 170.3 172.8 189 149.5 189C126.2 189 107.5 170.3 107.5 147C107.5 123.7 126.2 105 149.5 105ZM149.5 120C134.5 120 122.5 132 122.5 147C122.5 162 134.5 174 149.5 174C164.5 174 176.5 162 176.5 147C176.5 132 164.5 120 149.5 120ZM149.5 135C156.1 135 161.5 140.4 161.5 147C161.5 153.6 156.1 159 149.5 159C142.9 159 137.5 153.6 137.5 147C137.5 140.4 142.9 135 149.5 135Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="swiper-container" ref={swiperContainerRef}>
        <div className="swiper-wrapper">
          {products.map((product, index) => (
            <div className="swiper-slide" key={index}>
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
                <div className="text-center">
                  <h3 className="font-montserrat text-sm uppercase tracking-wider">{product.name}</h3>
                  <p className="text-red-600 text-4xl font-montserrat font-bold">{product.model}</p>
                </div>
                <p className="text-center my-4 font-exo">
                  Freedom {product.model} com condições exclusivas para compra em atacado
                </p>
                <button
                  onClick={() => handleOpenDetails(product.model)}
                  className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-full shadow-md flex items-center justify-center gap-2 mt-2 border-b-2 border-red-900 w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span className="font-montserrat">SABER MAIS</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>

      <BatteryDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} batteryModel={currentBatteryModel} />
    </div>
  )
}
