import { arsenal, rightous } from '@/app/ui/font'
import React from 'react'
import { dataUnduhan } from '@/app/lib/dataUnduhan'
import BorderSection from '../borderSection'
import CardUnduhan from '../cardUnduhan'

export default function Unduhan() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center text-center gap-8 bg-whiteSecondary">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl">Unduhan Dokumen</h1>
      </div>
      <BorderSection />
      <div className="grid desktop:grid-cols-3 grid-cols-1 desktop:w-3/4 desktop:px-0 px-4 justify-center items-center gap-8 m-0-auto will-change-transform">
        {dataUnduhan.map((item, index) => (
          <CardUnduhan key={index} item={item} index={index} />
        ))}
      </div>
      <BorderSection />
    </section>
  )
}
