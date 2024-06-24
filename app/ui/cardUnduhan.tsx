import React from 'react'
import { DataPelayanan } from '../lib/definition'
import Image from 'next/image'
import Link from 'next/link'

export default function CardUnduhan({ item, index }: { item: DataPelayanan; index: number }) {
  return (
    <Link href={item.link} className="flex flex-col gap-4 py-4 h-full rounded-md relative justify-center items-center ">
      <Image
        src={item.imgPath}
        alt={item.title}
        className="m-0-auto rounded-md  shadow-md hover:scale-105 transition-transform "
      />
      <p className="absolute text-white text-xl font-bold">{item.title}</p>
    </Link>
  )
}
