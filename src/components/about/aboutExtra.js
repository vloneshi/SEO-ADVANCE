import React from "react"

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="mt-10 px-8">
        {/* <h2 className="text-black text-4xl font-semibold">GATSBY FRAMEWORK</h2> */}
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          GET YOUR HAPPY DOSE
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Jangan biarkan look harianmu terasa flat atau membosankan. Tinggalkan aksesoris 
          yang seragam dan inilah saatnya kamu memberi upgrade pada happy vibes serta gaya 
          personalmu! Jelajahi koleksi handmade kami yang unik, dan temukan piece manik atau 
          rajutan yang benar-benar dirangkai dengan perhatian penuh oleh tangan terampil kami. 
          Karya-karya spesial ini sudah menunggu untuk menjadi bagian dari story unikmu, menjamin 
          kamu mendapatkan mood booster terbaik, dan menjadi pencuri perhatian di mana pun kamu berada.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
            >
              SEE ALL COLLECTION
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutExtra
