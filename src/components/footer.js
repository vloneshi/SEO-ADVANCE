import { Link } from "gatsby"
import React from "react"

import logo from "../images/Footer 3.png"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Holo"></img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                Belia.Twelve.<br></br> Your daily dose of happy.
                <br></br>
                Cocok untuk gaya aesthetic harianmu.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    Belia.Twelve
                  </a>

                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    href="https://travislord.xyz"
                  >
                    By Nat
                  {/* </a>
                  <a
                    href="https://instagram.com/belia.twelve"
                    target="_blank"
                  > */}
                    {/* <img
                      className="w-5 h-5 mt-1"
                      src="../images/Instagram.png"
                      alt="Instagram"
                    ></img> */}
                  </a>
                </p>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-3xl font-montserrat font-semibold">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Product</Link>
                </li>{" "}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
