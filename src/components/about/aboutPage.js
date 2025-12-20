import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* ===== ABOUT INTRO ===== */}
      <div className="mt-10 px-8">
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          More Than Just Accessories
        </h3>

        <p className="text-[#6A4B3E] font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg leading-relaxed">
          Belia.Twelve adalah dedikasi pada nilai personal dan kualitas karya tangan 
          yang sesungguhnya. Kami hadir bukan hanya sebagai toko, tetapi sebagai janji: 
          bahwa setiap aksesoris yang kamu terima membawa cerita dan happy vibes yang tulus.
          Kami menaruh waktu, ketelitian, dan perhatian penuh pada setiap detail, mulai dari 
          pemilihan manik hingga rajutan. Memastikan semua produk dibuat satu per satu dengan standar terbaik.
          Tujuan kami sangat sederhana: memberikanmu karya otentik yang membuatmu merasa spesial, meningkatkan 
          rasa percaya diri, dan menambah mood ceria harianmu dengan piece yang benar-benar kamu cintai.
        </p>
      </div>

      {/* ===== EXTRA CONTENT (BIAR GA KOSONG) ===== */}
      <Fade bottom cascade>
        <div className="mt-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#FFF5F0] rounded-xl p-6 text-center shadow-sm">
            <h4 className="text-[#6A4B3E] font-bold text-xl mb-3">
              Handmade with Intention
            </h4>
            <p className="text-[#6A4B3E] text-sm leading-relaxed">
              Setiap produk dibuat dengan tangan, penuh kesabaran dan perhatian. 
              Tidak ada produksi massal, setiap karya punya karakter dan sentuhan personalnya sendiri.
            </p>
          </div>

          <div className="bg-[#FFF5F0] rounded-xl p-6 text-center shadow-sm">
            <h4 className="text-[#6A4B3E] font-bold text-xl mb-3">
              Details Matter
            </h4>
            <p className="text-[#6A4B3E] text-sm leading-relaxed">
              Dari memilih manik berkualitas, merangkai aksesoris, hingga menghitung setiap jahitan rajut
              kami percaya detail kecil menciptakan perbedaan besar.
            </p>
          </div>

          <div className="bg-[#FFF5F0] rounded-xl p-6 text-center shadow-sm">
            <h4 className="text-[#6A4B3E] font-bold text-xl mb-3">
              Made to Feel Meaningful
            </h4>
            <p className="text-[#6A4B3E] text-sm leading-relaxed">
              Belia.Twelve hadir untuk menemani keseharianmu bukan sekadar aksesoris, 
              tapi bagian kecil dari cerita, mood, dan kepribadianmu.
            </p>
          </div>

        </div>
      </Fade>
    </div>
  )
}

export default WorkPage
