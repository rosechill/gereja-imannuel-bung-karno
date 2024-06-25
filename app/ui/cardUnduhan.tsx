'use client'
import React from 'react'
import { DataPelayanan } from '../lib/definition'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useInView from '../lib/intersectionObserver'

export default function CardUnduhan({ item, index }: { item: DataPelayanan; index: number }) {
  const [ref, isVisible] = useInView()

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.3,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="card will-change-transform"
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <Link
        href={item.link}
        className="flex flex-col gap-4 py-4 h-full rounded-md relative justify-center items-center will-change-transform "
      >
        <Image
          src={item.imgPath}
          alt={item.title}
          className="m-0-auto rounded-md  shadow-md hover:scale-105 transition-transform "
        />
        <p className="absolute text-white text-xl font-bold">{item.title}</p>
      </Link>
    </motion.div>
  )
}
