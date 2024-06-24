import { arsenal, rightous } from '@/app/ui/font'
import { dataPelayanan } from '@/app/lib/dataPelayanan'
import React from 'react'
import CardPelayanan from '../cardPelayanan'

export default function Pelayanan() {
  return (
    <section className="py-desktop flex flex-col justify-center text-center gap-8 bg-church-image h-fit">
      <div className={rightous.className}>
        <h1 className="text-3xl text-white">Pelayanan Kategorial</h1>
      </div>
      <div className='grid grid-cols-3 w-3/4 justify-center items-center gap-8 m-0-auto'>
        {dataPelayanan.map((item, index) => (
          <CardPelayanan key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
