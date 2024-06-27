'use client'
import { rightous } from '@/app/ui/font'
import React, { useState } from 'react'
import BorderSection from '../borderSection'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useInView from '@/app/lib/intersectionObserver'
import { Youtube } from '@/public/icons'

export default function JadwalIbadah() {
  const [ref, isVisible] = useInView()

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const handleMouseEnter = (icon: any) => setHoveredIcon(icon)
  const handleMouseLeave = () => setHoveredIcon(null)
  const getColor = (icon: any) => (hoveredIcon === icon ? '#5F9556' : '#000')

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={sectionVariants}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 will-change-transform"
    >
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">Jadwal Ibadah</h1>
      </div>
      <BorderSection />
      <h2 className="font-bold desktop:text-xl text-center">Ibadah Hari Minggu III Sesudah Pentakosta</h2>
      <div className="w-full flex flex-col items-center font-bold desktop:text-medium text-small">
        <div className="grid md:grid-cols-2 desktop:w-4/6 w-full py-3 px-4 bg-whiteSecondary">
          <p>Tanggal-Waktu :</p>
          <p>9 Juni 2024-09:00 WITA</p>
        </div>
        <div className="grid md:grid-cols-2 desktop:w-4/6 w-full py-3 px-4">
          <p>Tema Ibadah :</p>
          <p>“Hidup sukses bersama Tuhan”</p>
        </div>
        <div className="grid md:grid-cols-2 desktop:w-4/6 w-full py-3 px-4 bg-whiteSecondary">
          <p>Pembacaan Alkitab :</p>
          <p>Kejadian 39 : 1 - 10</p>
        </div>
        <div className="grid md:grid-cols-2 desktop:w-4/6 w-full py-3 px-4">
          <p>Pelayan Firman :</p>
          <p>Pendeta Miss Pelletimu-Sono Bogar</p>
        </div>
        <div className="grid md:grid-cols-2 desktop:w-4/6 w-full py-3 px-4 bg-whiteSecondary">
          <p>Kategori :</p>
          <p>Umum</p>
        </div>
        <div className="grid md:grid-cols-2 desktop:w-4/6 w-full py-3 px-4">
          <p>Keterangan: </p>
          <div className="flex flex-col gap-2 justify-start">
            <p>- Onsite</p>
            <Link
              target="_blank"
              onMouseEnter={() => handleMouseEnter('Youtube')}
              onMouseLeave={handleMouseLeave}
              href={'https://www.youtube.com/@GPIBImmanuelBungKarnoMataram'}
              className="flex flex-wrap gap-4 items-center"
            >
              <p className={hoveredIcon === 'Youtube' ? 'text-greenPrimary' : ''}>- Youtube Live Stream</p>
              <Youtube color={hoveredIcon === 'Youtube' ? getColor('Youtube') : '#FF0000'} />
            </Link>
          </div>
        </div>
      </div>
      <Link href={'/informasi/jadwalIbadah'} className="flex justify-center items-center">
        <Button className="bg-greenPrimary text-whitePrimary text-center">Jadwal Lainnya</Button>
      </Link>
      <BorderSection />
    </motion.div>
  )
}
