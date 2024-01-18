'use client'
import React from 'react'

const Button = ({ text, textcolor, background, padding, margin, handeler, customid }) => {
    return <button onClick={() => handeler(customid ? customid : '')} className={`${background ? background : 'bg-teal-300'} ${textcolor ? textcolor : 'text-gray-700 '} cursor-pointer hover:scale-105 active:scale-95 transition-all  ${margin ? margin : 'px-8'}  ${padding ? padding : 'py-2'} uppercase rounded-sm font-semibold`}>
        {text ? text : 'please send button text as props'}
    </button>
}

export default Button
