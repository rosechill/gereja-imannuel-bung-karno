'use client'
import { Instagram } from '@/public/icons'
import Link from 'next/link'
import React, { useState } from 'react'

export default function InstagramKategorial({ path, title }: any) {
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const handleMouseEnter = (icon: any) => setHoveredIcon(icon)
  const handleMouseLeave = () => setHoveredIcon(null)

  const getColor = (icon: any) => (hoveredIcon === icon ? '#5F9556' : '#000')
  return (
    <Link
      target="_blank"
      href={path}
      className="flex gap-4 justify-center items-center hover:text-greenPrimary w-fit m-0-auto"
      onMouseEnter={() => handleMouseEnter('Instagram')}
      onMouseLeave={handleMouseLeave}
    >
      <Instagram color={getColor('Instagram')} />
      <p className="font-bold">{title}</p>
    </Link>
  )
}
