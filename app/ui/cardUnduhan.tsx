'use client';
import React from 'react';
import { DataPelayanan } from '../lib/definition';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useInView from '../lib/intersectionObserver';

export default function CardUnduhan({ item, index }: { item: DataPelayanan; index: number }) {
  const [ref, isVisible] = useInView();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.3,
      },
    },
  };

  const imageVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hover: {
      opacity: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="card will-change-transform"
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      whileHover="hover"
    >
      <Link
        href={item.link}
        className="flex flex-col gap-4 desktop:py-4 py-0 h-full rounded-md relative justify-center items-center will-change-transform"
      >
        <motion.div variants={imageVariants} className="shine-effect">
          <Image
            src={item.imgPath}
            alt={item.title}
            className="m-0-auto rounded-md shadow-md transition-transform"
          />
        </motion.div>
        <motion.p className=" text-black text-xl font-bold" variants={imageVariants}>
          {item.title}
        </motion.p>
      </Link>
    </motion.div>
  );
}
