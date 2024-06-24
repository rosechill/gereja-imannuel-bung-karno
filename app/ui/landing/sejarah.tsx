import { rightous } from '@/app/layout'
import { DummyVideo } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function Sejarah() {
  return (
    <section className="py-desktop flex flex-col justify-center text-center gap-8 bg-whiteSecondary">
      <div className={rightous.className}>
        <h1 className="text-3xl">Sejarah GPIB Immanuel Bung Karno</h1>
      </div>
      <Image src={DummyVideo} alt="Video" className="m-0-auto rounded-md" />
      <p className="italic font-bold">
        “Sejarah Pembentukan Gereja Protestan di Indonesia Bagian Barat (GPIB) Immanuel Bung Karno”
      </p>
    </section>
  )
}
