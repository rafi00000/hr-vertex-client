"use client";
import React from "react";

const Button = ({
  text,
  textsize,
  textwidth,
  textcolor,
  background,
  padding,
  margin,
  handeler,
  peramiter,
}) => {
  return (
    <button
      onClick={() => {
        if (!handeler) {
          return console.log("no event handeler added in this button");
        }
        handeler(peramiter ? peramiter : "");
      }}
      className={`${background || "bg-emerald-400"} ${
        textcolor || "text-gray-700 "
      } cursor-pointer hover:scale-105 active:scale-95 transition-all ${
        textsize ? textsize : "text-base"
      } ${margin ? margin : "px-8"}  ${
        padding ? padding : "py-2"
      } uppercase rounded-sm ${textwidth ? textwidth : "font-normal"}`}
    >
      {text ? text : "button"}
    </button>
  );
};

export default Button;
