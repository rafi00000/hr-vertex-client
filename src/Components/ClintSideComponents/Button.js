'use client'
import React from 'react'

const Button = ({ text, textsize, textwidth, textcolor, background, padding, margin, handeler, customid }) => {
    return <button onClick={() => {
        if (!handeler) {
            return console.log('no event handeler added in this button');
        }
        handeler(customid ? customid : '')
    }} className={`${background || 'bg-teal-300'} ${textcolor || 'text-gray-700 '} cursor-pointer hover:scale-105 active:scale-95 transition-all ${textsize ? textsize : 'text-base'} ${margin ? margin : 'px-8'}  ${padding ? padding : 'py-2'} uppercase rounded-sm ${textwidth ? textwidth : 'font-normal'}`}>
        {text ? text : 'please send button text as props'}
    </button>
}

export default Button
