import { rightous } from '@/app/ui/font'
import { dataPelayanan } from '@/app/lib/dataPelayanan'
import React from 'react'
import CardPelayanan from '../cardPelayanan'

export default function Pelayanan() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center text-center gap-8 bg-church-image h-fit">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-white">Pelayanan Kategorial</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2  md:w-3/4 w-full justify-center items-center gap-8 m-0-auto md:px-0 px-4">
        {dataPelayanan.map((item, index) => (
          <CardPelayanan key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
