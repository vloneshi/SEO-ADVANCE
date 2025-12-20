import React from "react"

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      {/* ================= GET YOUR HAPPY DOSE ================= */}
      <div className="px-8">
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          GET YOUR HAPPY DOSE
        </h3>

        <p className="text-[#6A4B3E] font-normal mt-4 text-xs xxs:text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          Jangan biarkan look harianmu terasa flat atau membosankan. Tinggalkan
          aksesoris yang seragam dan inilah saatnya kamu memberi upgrade pada
          happy vibes serta gaya personalmu! Jelajahi koleksi handmade kami yang
          unik, dan temukan piece manik atau rajutan yang benar-benar dirangkai
          dengan perhatian penuh oleh tangan terampil kami.
        </p>

        <div className="mt-6">
          <a
            href="/gallery/"
            className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-md bg-purple text-[#6A4B3E] border border-purple hover:bg-transparent transition-all duration-300"
          >
            SEE ALL COLLECTION
            <svg
              className="w-4 h-4 ms-2"
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
      </div>

      {/* ================= WHY BELIA.TWELVE ================= */}
      <div className="mt-20 px-8">
        <h4 className="text-3xl font-bold text-[#6A4B3E] mb-8">
          Why Belia.Twelve?
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Handmade with Purpose",
              desc: "Setiap produk dibuat satu per satu, bukan mass production. Ada waktu, rasa, dan cerita di setiap detailnya.",
            },
            {
              title: "Detail-Oriented Craft",
              desc: "Dari seleksi manik hingga hitungan rajutan, tidak ada proses yang kami percepat.",
            },
            {
              title: "Wear Your Story",
              desc: "Kami percaya aksesoris bukan hanya pelengkap, tapi representasi kepribadianmu.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#F3D6C9] rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <h5 className="text-xl font-semibold text-[#6A4B3E] mb-3">
                {item.title}
              </h5>
              <p className="text-sm text-[#6A4B3E] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= HOW IT'S MADE ================= */}
      <div className="mt-20 px-8">
        <h4 className="text-3xl font-bold text-[#6A4B3E] mb-6">
          From Hands to Heart
        </h4>

        <p className="text-[#6A4B3E] text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
          Di Belia.Twelve, proses adalah segalanya. Kami menghabiskan waktu untuk
          memilih material terbaik, menyusun desain dengan hati-hati, hingga
          merajut dan merangkai setiap produk dengan penuh kesabaran. Karena
          masterpiece tidak pernah lahir dari proses yang terburu-buru.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {["Design", "Select Material", "Handcrafted", "Quality Check"].map(
            (step, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full border border-[#6A4B3E] text-[#6A4B3E] text-sm font-medium hover:bg-[#6A4B3E] hover:text-white transition-all duration-300"
              >
                {step}
              </div>
            )
          )}
        </div>
      </div>

      {/* ================= EMOTIONAL CLOSING ================= */}
      <div className="mt-24 px-8 pb-20 text-center">
        <p className="text-[#6A4B3E] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
          Di Belia.Twelve, setiap karya dibuat untuk menemani keseharianmu
          meningkatkan rasa percaya diri, mempercantik mood, dan menjadi bagian
          kecil dari cerita hidupmu.
        </p>
      </div>
    </div>
  )
}

export default AboutExtra
