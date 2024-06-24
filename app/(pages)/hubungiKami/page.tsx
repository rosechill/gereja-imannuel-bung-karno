import BorderSection from '@/app/ui/borderSection'
import { arsenal, rightous } from '@/app/ui/font'
import React from 'react'

export default function hubungiKami() {
  return (
    <section className="py-desktop flex flex-col justify-center gap-8 mt-20 ">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center">KONTAK KAMI</h1>
      </div>
      <div className="w-3/4 m-0-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.047928376688!2d116.11141727555525!3d-8.591390591453504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf5dde8ceed9%3A0xbd436c26375cb44!2sGereja%20Jemaat%20Immanuel%20Mataram!5e0!3m2!1sen!2sid!4v1719221434172!5m2!1sen!2sid"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">Kantor Majelis Jemaat</h1>
      </div>
      <BorderSection />
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto">
          <p>Jl. Bung Karno No.1, Mataram Tim., Kec. Mataram, Kota Mataram, Nusa Tenggara Bar. 83127, Indonesia</p>
          <p>Telpon: (0370) 645043</p>
          <p>Surel : gpib.mataram@yahoo.co.id / immanuel.bungkarno@gpib.or.id</p>
        </div>
      </div>
    </section>
  )
}
