import React from "react"
import Fade from "react-reveal/Fade"

import HeroImage from "../images/cover1.png"
import BackGroud from "../images/bracelet1.png"
import BackGroud2 from "../images/bracelet_watch.colorful.jpg"
import BackGroud3 from "../images/bracelet_watch.pink.jpg"
import BackGroud4 from "../images/bracelet_watch.black.jpg"
import BackGroud5 from "../images/bracelet8.png"
import BackGroud6 from "../images/bracelet7.png"
import BackGroud7 from "../images/froggy1.png"
import BackGroud8 from "../images/jellyfish1.png"
import BackGroud9 from "../images/sunny2.png"
import BackGroud10 from "../images/phone_strap31.png"
import BackGroud11 from "../images/phone_strap21.png"
import BackGroud12 from "../images/phone_strap4.png"

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 relative">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
          <div className="max-h-80 w-1/2 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-4 xxs:w-full xs:w-full sm:w-full lg:w-full">
            {/* <h1 className="text-black opacity-70 text-4xl font-semibold">
              GALLERY
            </h1> */}
            <h1 className="text-[#6A4B3E] text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Explore Our Handcrafted Joy.
            </h1>
            <p className="text-lg mt-4 text-[#6A4B3E] opacity-70 xxs:text-sm sm:text-lg">
              Jelajahi koleksi unik kami, dan temukan statement 
              piece yang akan menjadi ekstensi dari kepribadianmu
              membawa energi positif dan joy ke setiap look harianmu.
            </p>
          </div>

          <div className="rounded-xl w-auto h-full object-cover flex justify-center">
            <img src={HeroImage} alt="HeroImage" />
          </div>
        </div>
      </Fade>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-8 mt-5">
        <Fade bottom cascade>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">

  {/* Item 1 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 2 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud2}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 3 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud3}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 4 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud4}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 5 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud5}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 6 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud6}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 7 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud7}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 8 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud8}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 9 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud9}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 10 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud10}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 11 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud11}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

  {/* Item 12 */}
  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
    <img
      src={BackGroud12}
      className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-110"
    />
  </div>

</div>


        </Fade>
      </div>
    </div>
  )
}

export default Gallery

/* 
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="https://source.unsplash.com/bYuI23mnmDQ"/>
        <img src="https://source.unsplash.com/Nllx4R-2c3o"/>
        <img src="https://source.unsplash.com/lp40q07DIe0"/>
        <img src="https://source.unsplash.com/wfalq01jJuU"/>
        <img src="https://source.unsplash.com/rMHNK_skwwU"/>
        <img src="https://source.unsplash.com/WBMjuGpbrCQ"/>
        <img src="https://source.unsplash.com/nCUZ5BYBL_o"/>
        <img src="https://source.unsplash.com/3u4fzMQZhjc"/>
        <img src="https://source.unsplash.com/haOIqIPSwps"/>
        <img src="https://source.unsplash.com/3UrYD7NNVxk"/>
        <img src="https://source.unsplash.com/fm1JKDItlVM"/>
        <img src="https://source.unsplash.com/qPpq1EVs8vw"/>
        <img src="https://source.unsplash.com/xRyL63AwZFE"/>
        <img src="https://source.unsplash.com/XeNKWTiCPNw"/>
        <img src="https://source.unsplash.com/DFt3T5r_4FE"/>
        <img src="https://source.unsplash.com/Ebwp2-6BG8E"/>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
*/
