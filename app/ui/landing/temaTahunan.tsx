'use client'
import React from 'react'
import { rightous } from '@/app/ui/font'
import BorderSection from '../borderSection'
import { motion } from 'framer-motion'
import useInView from '@/app/lib/intersectionObserver'

export default function TemaTahunan() {
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
      className="desktop:py-desktop py-8 flex flex-col justify-center text-center gap-8 will-change-transform"
    >
      <BorderSection />
      <div className={rightous.className}>
        <div className="flex flex-col gap-2">
          <h1 className="desktop:text-3xl text-2xl">Tema Tahunan GPIB</h1>
          <h2 className="desktop:text-2xl tex-xl">Periode 2024-2025</h2>
        </div>
      </div>
      <p className="desktop:text-xl desktop:px-80 px-4">
        “Melayani dan bersaksi secara interaktif berbasis komunitas digital dengan semangat gotong royong demi
        kesejahteraan bangsa” (Kisah Para Rasul 4 : 32)
      </p>
      <BorderSection />
    </motion.div>
  )
}
