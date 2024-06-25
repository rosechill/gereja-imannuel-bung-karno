import BorderSection from '@/app/ui/borderSection'
import { rightous } from '@/app/ui/font'
import InformasiTable from '@/app/ui/informasiTable'
import React from 'react'

export default function FormulirLainnya() {
  return (
    <section className="py-desktop flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center uppercase">Informasi Lainnya</h1>
      </div>
      <BorderSection/>
      <InformasiTable />
    </section>
  )
}
