'use client'
import React, { useState } from 'react'
import { arsenal, rightous } from '@/app/ui/font'
import { Email, Facebook, Instagram, Location, Phone, Youtube } from '@/public/icons'
import Link from 'next/link'

export default function ListFooter() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const handleMouseEnter = (icon: any) => setHoveredIcon(icon)
  const handleMouseLeave = () => setHoveredIcon(null)

  const getColor = (icon: any) => (hoveredIcon === icon ? '#5F9556' : '#000')

  return (
    <>
      <div className='flex desktop:flex-row flex-col desktop:gap-0 gap-12 desktop:justify-between justify-center'>
        <div>
          <div className={rightous.className}>
            <h1 className="desktop:text-2xl text-xl pb-4">GPIB Immanuel Bung Karno</h1>
          </div>
          <div className={arsenal.className}>
            <p>GPIB Immanuel Bung Karno adalah sebuah bangunan gereja yang</p>
            <p>berada di wilayah Mataram - Lombok. Gereja ini berada di bawah</p>
            <p>naungan GPIB (Gereja Protestan di Indonesia bagian Barat) Jemaat</p>
            <p>Mataram dengan sistem penyelenggaraan Presbiterial Sinodal yang </p>
            <p>telah di terapkan sejak awal.</p>
          </div>
        </div>
        <div>
          <div className={rightous.className}>
            <h1 className="desktop:text-2xl text-xl pb-4">Contact</h1>
          </div>
          <div className={arsenal.className}>
            <div className="flex flex-col gap-4 ">
              <Link
                target="_blank"
                href={'/'}
                className="flex gap-4 items-center"
                onMouseEnter={() => handleMouseEnter('Phone')}
                onMouseLeave={handleMouseLeave}
              >
                <Phone color={getColor('Phone')} />
                <p style={{ color: getColor('Phone') }}>(0370) 645043</p>
              </Link>
              <Link
                target="_blank"
                href={'/'}
                className="flex gap-4 items-center"
                onMouseEnter={() => handleMouseEnter('Location')}
                onMouseLeave={handleMouseLeave}
              >
                <Location color={getColor('Location')} />
                <div style={{ color: getColor('Location') }}>
                  <p>gpib.mataram@yahoo.co.id</p>
                  <p>immanuel.bungkarno@gpib.or.id</p>
                </div>
              </Link>
              <Link
                target="_blank"
                href={'/'}
                className="flex gap-4 items-center"
                onMouseEnter={() => handleMouseEnter('Email')}
                onMouseLeave={handleMouseLeave}
              >
                <Email color={getColor('Email')} />
                <div style={{ color: getColor('Email') }}>
                  <p>Jl. Bung Karno No.1, Mataram Tim., Kec. Mataram, Kota</p>
                  <p>Mataram, Nusa Tenggara Bar. 83127, Indonesia</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className={rightous.className}>
            <h1 className="desktop:text-2xl text-xl pb-4">Follow Us</h1>
          </div>
          <div className={arsenal.className}>
            <div className="flex gap-4">
              <Link
                href={'/'}
                target="_blank"
                onMouseEnter={() => handleMouseEnter('Instagram')}
                onMouseLeave={handleMouseLeave}
              >
                <Instagram color={getColor('Instagram')} />
              </Link>
              <Link
                href={'/'}
                target="_blank"
                onMouseEnter={() => handleMouseEnter('Facebook')}
                onMouseLeave={handleMouseLeave}
              >
                <Facebook color={getColor('Facebook')} />
              </Link>
              <Link
                href={'/'}
                target="_blank"
                onMouseEnter={() => handleMouseEnter('Youtube')}
                onMouseLeave={handleMouseLeave}
              >
                <Youtube color={getColor('Youtube')} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className=' text-xs text-gray-400'>Copyright © 2022 GPIB Immanuel Bung Karno</p>
    </>
  )
}
