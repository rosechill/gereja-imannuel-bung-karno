import BorderSection from '@/app/ui/borderSection'
import DatePicker from '@/app/ui/datePicker'
import { arsenal, rightous } from '@/app/ui/font'
import React from 'react'

export default function WartaJemaat() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">WARTA JEMAAT</h1>
      </div>
      <BorderSection/>
      <DatePicker/>
    </section>
  )
}
