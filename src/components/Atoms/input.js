import React from "react"

const Input = ({ placeholder, onChange , type = "text", classname = ""}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{color: "#6A4B3E"}}
      className="px-2 py-2 rounded-lg bg-bg bg-opacity-20 border-transparent flex-1 appearance-none text-[#6A4B3E] placeholder:text-[#6A4B3E] focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent sm:width-full md:width-full xxs:text-sm"
    ></input>
  )
}

export default Input
