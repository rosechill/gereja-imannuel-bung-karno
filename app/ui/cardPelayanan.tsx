'use client'

import React from 'react'
import { DataPelayanan } from '../lib/definition'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useInView from '../lib/intersectionObserver'

export default function CardPelayanan({ item, index }: { item: DataPelayanan; index: number }) {
  const [ref, isVisible] = useInView()

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
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
      <Link href={item.link} className="group flex flex-col gap-4 py-4 h-full rounded-md hover:bg-slate-50">
        <Image
          src={item.imgPath}
          alt={item.title}
          className="m-0-auto md:w-[150px] md:h-[150px] w-[100px] h-[100px] "
        />
        <p className="text-white group-hover:text-black">{item.title}</p>
      </Link>
    </motion.div>
  )
}
