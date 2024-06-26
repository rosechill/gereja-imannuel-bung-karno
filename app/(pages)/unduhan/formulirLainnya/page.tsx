import BorderSection from '@/app/ui/borderSection'
import { rightous } from '@/app/ui/font'
import InformasiTable from '@/app/ui/informasiTable'
import React from 'react'

export default function FormulirLainnya() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20 md:px-0 px-4">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center uppercase">Informasi Lainnya</h1>
      </div>
      <BorderSection />
      <InformasiTable />
    </section>
  )
}
