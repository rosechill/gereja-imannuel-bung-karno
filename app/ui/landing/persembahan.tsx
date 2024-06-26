'use client'
import { rightous } from '@/app/ui/font'
import React from 'react'
import BorderSection from '../borderSection'
import Image from 'next/image'
import { Qris } from '@/public/images'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import useInView from '@/app/lib/intersectionObserver'

export default function Persembahan() {
  const [ref, isVisible] = useInView()

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={sectionVariants}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="desktop:py-desktop py-8 flex flex-col justify-center text-center gap-8 will-change-transform "
    >
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl">Persembahan & Donasi</h1>
      </div>
      <BorderSection />
      <div className="flex flex-col text-[#747272] font-bold">
        <p>1 Tawarikh 16:29</p>
        <p>“Berilah kepada TUHAN kemuliaan nama-Nya, bawalah persembahan dan masuklah</p>
        <p>menghadap Dia! Sujudlah menyembah kepada TUHAN dengan berhiaskan</p>
        <p>kekudusan”</p>
      </div>
      <div className="flex flex-col">
        <h2 className="desktop:text-xl font-bold">
          QRIS GPIB <span className="text-greenPrimary">IMMANUEL BUNG KARNO</span> MATARAM
        </h2>
        <p>QR Code Standar Pembayaran Nasional</p>
      </div>
      <h2 className="desktop:text-xl font-bold">PERSEMBAHAN</h2>
      <Image src={Qris} alt="Qris" width={300} height={300} className="m-0-auto rounded-md" />
      <Link href={'/'} className="flex justify-center items-center">
        <Button className="bg-greenPrimary text-whitePrimary text-center">Persembahan & Donasi</Button>
      </Link>
    </motion.div>
  )
}
