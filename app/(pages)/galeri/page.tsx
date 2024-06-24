import { rightous } from '@/app/ui/font'
import { DummyVideo, FormulirLainnya, Galeri1, PelayananBackground, TataIbadah, WartaJemaat } from '@/public/images'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export type dataGallery = {
  imgPath: StaticImageData
}

const dataGallery: dataGallery[] = [
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
  {
    imgPath: Galeri1,
  },
]

export default function Gallery() {
  return (
    <section className="py-desktop flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center">GALERI</h1>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 will-change-transform mx-40">
        {dataGallery.map((item, index) => (
          <Image
            key={index}
            src={item.imgPath}
            alt="image"
            className="w-full h-[300px] rounded-xl hover:scale-105 transition-all"
          />
        ))}
      </div>
    </section>
  )
}