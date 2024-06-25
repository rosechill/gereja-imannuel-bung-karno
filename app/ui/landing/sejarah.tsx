'use client'

import useInView from '@/app/lib/intersectionObserver'
import { rightous } from '@/app/ui/font'
import { motion } from 'framer-motion'
import { DummyVideo } from '@/public/images'
import Image from 'next/image'
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
      className="py-desktop flex flex-col justify-center text-center gap-8 bg-whiteSecondary will-change-transform"
    >
      <div className={rightous.className}>
        <h1 className="text-3xl">Sejarah GPIB Immanuel Bung Karno</h1>
      </div>
      <Image src={DummyVideo} alt="Video" className="m-0-auto rounded-md" />
      <p className="italic font-bold">
        “Sejarah Pembentukan Gereja Protestan di Indonesia Bagian Barat (GPIB) Immanuel Bung Karno”
      </p>
    </motion.div>
  )
}
