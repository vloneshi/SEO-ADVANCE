import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-[#6A4B3E] text-4xl font-semibold pl-4">
            BEHIND THE CRAFT
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Belia.Twelve Journal
          </h3>
          <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-[#6A4B3E] text-3xl font-simibold mb-2">
              Di Balik Manik & Benang: Kisah Setiap Kreasi Handmade
            </h2>
            <p className="text-lg  text-[#6A4B3E] mb-6">
              Ingin tahu kenapa aksesoris Belia.Twelve terasa begitu personal dan unik?
              Kami ajak kamu mengintip langsung proses penuh ketekunan dan perhatian di 
              balik layar kreasi kami. Mulai dari pemilihan benang crochet berwarna ceria 
              dan manik-manik berkarakter, hingga tahap akhir yang memberikan jiwa pada setiap piece.
              Ini adalah bukti bahwa setiap karya dibuat dengan hati, khusus untuk menghadirkan kebahagiaan seumur hidup.
            </p>
            <a
              href="/blog/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-[#6A4B3E] hover:text-[#6A4B3E] rounded-lg border border-purple  hover:bg-purple"
            >
              Continue Reading
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-[#6A4B3E] text-3xl font-simibold mb-2">
                CUSTOM BEADS: Rangkai Gayamu Sendiri Fwends
              </h2>
              <p className="text-lg font-normal text-[#6A4B3E] dark:[#6A4B3E] mb-4">
                Temukan statement pieces yang benar-benar mewakili dirimu.
                Koleksi jam tangan, gelang, dan item esensial yang harus dimiliki 
                para pecinta aesthetic ceria. Pilih sendiri manik, charm, hingga 
                nama yang akan dirangkai.Semua dibuat satu per satu memastikan 
                setiap piece yang kamu kenakan secerah dan seunik senyummu!
              </p>
              <a
                href="/contact/"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-[#6A4B3E] hover:text-[#6A4B3E]  rounded-lg border border-purple  hover:bg-purple"
              >
                Start Customizing
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
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-[#6A4B3E] text-3xl font-simibold mb-2">
                YOUR NEW BESTIE: Boneka Crochet & Bag Charm
              </h2>
              <p className="text-lg font-normal text-[#6A4B3E] dark:text-[#6A4B3E] mb-4">
                Sambut soulmate aksesorismu! Setiap bestie rajutan dibuat satu 
                per satu dengan penuh perhatian, menjamin karakter unik yang tidak 
                akan kamu temukan di mana pun. Mereka multifungsi: sempurna untuk 
                keychain, bag charm, atau dekorasi yang seketika upgrade look kamu. 
                Dapatkan piece otentik yang dirajut dengan happy vibes!
              </p>
              <a
                href="/gallery/"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-[#6A4B3E] hover:text-[#6A4B3E]  rounded-lg border border-purple  hover:bg-purple"
              >
                Shop Crochet Friends
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
          {/* ===== GOOGLE MAPS (DITAMBAH DOANG) ===== */}
          <div className="mt-24 px-4">
            <h3 className="text-black text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-pink to-purple">
              Find Us in Bandung
            </h3>

            <div className="w-full h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.888087243045!2d107.5610564!3d-7.0224392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ec13ce698bf7%3A0xdcb8621ed1037199!2sJl.%20Junti%20Girang%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1768485565598!5m2!1sid!2sid"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Belia Twelve Location"
              />
            </div>

            <p className="text-[#6A4B3E] mt-4 text-sm">
              Jl. Junti Girang, Kabupaten Bandung — Handmade & Crochet Accessories
            </p>
          </div>
          {/* ===== END MAP ===== */}
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
