'use client'
import ModalComponent from '@/app/ui/GaleriModal'
import { rightous } from '@/app/ui/font'
import {
  Galeri1,
  galeri1,
  galeri10,
  galeri11,
  galeri12,
  galeri13,
  galeri14,
  galeri15,
  galeri16,
  galeri2,
  galeri3,
  galeri4,
  galeri5,
  galeri6,
  galeri7,
  galeri8,
  galeri9,
} from '@/public/images'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

export type dataGallery = {
  imgPath: StaticImageData
}

const dataGallery: dataGallery[] = [
  {
    imgPath: galeri1,
  },
  {
    imgPath: galeri2,
  },
  {
    imgPath: galeri3,
  },
  {
    imgPath: galeri4,
  },
  {
    imgPath: galeri5,
  },
  {
    imgPath: galeri6,
  },
  {
    imgPath: galeri7,
  },
  {
    imgPath: galeri8,
  },
  {
    imgPath: galeri9,
  },
  {
    imgPath: galeri10,
  },
  {
    imgPath: galeri11,
  },
  {
    imgPath: galeri12,
  },
  {
    imgPath: galeri13,
  },
  {
    imgPath: galeri14,
  },
  {
    imgPath: galeri15,
  },
]

export default function Gallery() {
  const [visible, setVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null)

  const openModal = (imgPath: StaticImageData) => {
    setSelectedImage(imgPath)
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
    setSelectedImage(null)
  }

  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">GALERI</h1>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 will-change-transform md:mx-40 mx-4">
        {dataGallery.map((item, index) => (
          <Image
            key={index}
            src={item.imgPath}
            alt="image"
            className="w-full h-[300px] rounded-xl hover:scale-105 transition-all cursor-pointer"
            onClick={() => openModal(item.imgPath)}
          />
        ))}
      </div>
      {selectedImage && <ModalComponent imgSrc={selectedImage} isOpen={visible} onClose={closeModal} />}
    </section>
  )
}
