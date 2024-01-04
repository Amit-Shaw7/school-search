"use client";
import React from 'react';

interface ButtonProps {
  onClick?: () => void,
  text: string,
  type: "button" | "submit",
  size: "large" | "small",
  outlined?: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={
        `${props.outlined ? "bg-transparent border" : "bg-teal-600"} 
         hover:scale-105
         transition-all
         duration-300
         ease-in-out
         ${props.size === "large" ? "px-8 py-4" : "py-2 px-4"}
         ${props.size === "large" ? "text-xl" : "text-md"} 
         font-semibold 
         ${props.outlined ? "text-teal-600" : "text-white"} 
         uppercase
         rounded-lg`
      }
    >
      {props.text}
    </button>
  )
}

export default Button