import React from 'react'
import { COLORS } from '../../tools/constant'

export default function Colorbox({ color }) {
  return (
    <div
      className={`w-3 h-3 rounded-full`}
      style={{ backgroundColor: COLORS[color].code }}
    ></div>
  )
}