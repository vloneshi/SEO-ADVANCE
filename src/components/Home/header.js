import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/logo.jpg"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">

        {/* HERO WRAPPER – tambahin min-height supaya stabil */}
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 
                        md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 
                        flex gap-10 flex-col lg:flex-row flex-col-reverse
                        min-h-[450px]">

          {/* TEXT SECTION */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-black text-gradient bg-gradient-to-r from-pink to-purple text-6xl font-bold 
                           xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Belia.Twelve
            </h2>

            <p className="mt-3 text-base text-[#6A4B3E] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto 
                          md:mt-5 md:text-xl lg:mx-0">
              Belia.twelve adalah destinasi aksesoris pilihan yang mengedepankan sentuhan tangan.
              Setiap kreasi kami, mulai dari gelang, jam tangan, keychain, hingga koleksi boneka
              crochet yang berkarakter adalah hasil dedikasi pada detail dan kualitas.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="transition-all duration-500 ease-in-out 
                             w-full flex items-center justify-center px-8 py-3 
                             text-[#6A4B3E] font-medium rounded-md text-center 
                             bg-purple hover:bg-transparent border border-purple md:text-lg md:px-10"
                >
                  Contact Us
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="transition-all duration-500 ease-in-out 
                             w-full flex items-center justify-center px-8 py-3 
                             border border-purple text-[#6A4B3E] font-medium rounded-md 
                             bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Get To Know Us
                </a>
              </div>
            </div>
          </div>

          {/* IMAGE – FIX CLS : tambahin aspect ratio + width/height fixed */}
          <div className="lg:w-1/2 my-4 flex lg:justify-end justify-center">
            <img
              className="rounded-xl object-cover aspect-square max-w-[500px] w-full h-auto"
              src={hero}
              alt="Belia Twelve Logo"
              width="500"
              height="500"
              fetchpriority="high"
            />
          </div>

        </div>
      </div>
    </Fade>
  )
}

export default Header
