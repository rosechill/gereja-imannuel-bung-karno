import { rightous } from '@/app/layout'
import React from 'react'
import BorderSection from '../borderSection'

export default function TemaTahunan() {
  return (
    <section className="py-desktop flex flex-col justify-center text-center gap-8">
      <BorderSection />
      <div className={rightous.className}>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">Tema Tahunan GPIB</h1>
          <h2 className="text-2xl">Periode 2024-2025</h2>
        </div>
      </div>
      <p className="text-xl px-80">
        “Melayani dan bersaksi secara interaktif berbasis komunitas digital dengan semangat gotong royong demi
        kesejahteraan bangsa” (Kisah Para Rasul 4 : 32)
      </p>
      <BorderSection />
    </section>
  )
}
