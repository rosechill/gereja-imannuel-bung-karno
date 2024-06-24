import React from 'react'
import { DataPelayanan } from '../lib/definition'
import Image from 'next/image'
import Link from 'next/link'

export default function CardPelayanan({ item, index }: { item: DataPelayanan; index: number }) {
  return (
    <Link href={item.link} className="group flex flex-col gap-4 py-4 h-full rounded-md hover:bg-slate-50">
      <Image src={item.imgPath} alt={item.title} className="m-0-auto" />
      <p className="text-white group-hover:text-black">{item.title}</p>
    </Link>
  )
}
