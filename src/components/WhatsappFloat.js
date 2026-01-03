import React from "react"
import WhatsAppIcon from "../images/whatsapp.jpg"

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/6283806121995?text=Halo%20Belia.Twelve,%20saya%20ingin%20bertanya"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform">
        <img
          src={WhatsAppIcon}
          alt="WhatsApp Chat"
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  )
}

export default WhatsAppFloat
