import BorderSection from '@/app/ui/borderSection'
import DatePicker from '@/app/ui/datePicker'
import { arsenal, rightous } from '@/app/ui/font'
import React from 'react'

export default function TataIbadah() {
  return (
    <section className="py-desktop flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center">TATA IBADAH</h1>
      </div>
      <BorderSection/>
      <DatePicker/>
    </section>
  )
}
