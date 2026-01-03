/**
 * Layout component
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import WhatsAppFloat from "./WhatsappFloat.js" // ⬅️ TAMBAH INI

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      {/* CONTENT */}
      <main className="pt-20">
        {children}
      </main>

      {/* 🔥 FLOATING WHATSAPP */}
      <WhatsAppFloat />

      <Footer />
    </div>
  )
}

export default Layout
