'use client'

import useInView from '@/app/lib/intersectionObserver'
import { rightous } from '@/app/ui/font'
import { motion } from 'framer-motion'
import React from 'react'

export default function Sejarah() {
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
      className="desktop:py-desktop py-8 flex flex-col justify-center text-center gap-8 bg-whiteSecondary will-change-transform"
    >
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl ">Sejarah GPIB Immanuel Bung Karno</h1>
      </div>
      <iframe
        className="md:desktop:h-[600px] h-[300px] md:w-3/4 w-full m-0-auto rounded-xl desktp:px-0 px-4"
        src="https://www.youtube.com/embed/2FXyzOMIlYk?si=K-U7K1x8EBDQRtQj"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer"
        allowFullScreen
      ></iframe>
      <p className="italic font-bold">
        “Sejarah Pembentukan Gereja Protestan di Indonesia Bagian Barat (GPIB) Immanuel Bung Karno”
      </p>
    </motion.div>
  )
}
