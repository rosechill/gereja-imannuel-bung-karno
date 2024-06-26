import { rightous } from '@/app/ui/font'
import { Galeri1 } from '@/public/images'
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
            className="w-full h-[300px] rounded-xl hover:scale-105 transition-all"
          />
        ))}
      </div>
    </section>
  )
}
