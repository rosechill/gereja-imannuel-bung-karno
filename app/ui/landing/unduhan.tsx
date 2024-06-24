import { rightous } from '@/app/layout'
import React from 'react'
import { dataUnduhan } from '@/app/lib/dataUnduhan'
import BorderSection from '../borderSection'
import CardUnduhan from '../cardUnduhan'

export default function Unduhan() {
  return (
    <section className="py-desktop flex flex-col justify-center text-center gap-8 bg-whiteSecondary">
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="text-3xl">Unduhan Dokumen</h1>
      </div>
      <div className="grid grid-cols-3 w-3/4 justify-center items-center gap-8 m-0-auto will-change-transform">
        {dataUnduhan.map((item, index) => (
          <CardUnduhan key={index} item={item} index={index} />
        ))}
      </div>
      <BorderSection />
    </section>
  )
}
