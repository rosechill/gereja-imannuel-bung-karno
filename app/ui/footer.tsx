import React from 'react'
import { arsenal, rightous } from '../layout'
import { Email, Facebook, Instagram, Location, Phone, Youtube } from '@/public/icons'

export default function Footer() {
  return (
    <section className="flex justify-between gap-8 px-desktop py-8 bg-whiteSecondary">
      <div>
        <div className={rightous.className}>
          <h1 className="text-2xl pb-4">Persembahan & Donasi</h1>
        </div>
        <div className={arsenal.className}>
          <p>GPIB Immanuel Bung Karno adalah sebuah bangunan gereja yang</p>
          <p>berada di wilayah Mataram - Lombok. Gereja ini berada di bawah</p>
          <p>naungan GPIB (Gereja Protestan di Indonesia bagian Barat) Jemaat</p>
          <p>Mataram dengan sistem penyelenggaraan Presbiterial Sinodal yang </p>
          <p>telah di terapkan sejak awal.</p>
        </div>
      </div>
      <div>
        <div className={rightous.className}>
          <h1 className="text-2xl pb-4">Contact</h1>
        </div>
        <div className={arsenal.className}>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4 items-center">
              <Phone />
              <p>(0370) 645043</p>
            </div>
            <div className="flex gap-4 items-center">
              <Location />
              <div>
                <p>gpib.mataram@yahoo.co.id</p>
                <p>immanuel.bungkarno@gpib.or.id</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Email />
              <div>
                <p>Jl. Bung Karno No.1, Mataram Tim., Kec. Mataram, Kota</p>
                <p>Mataram, Nusa Tenggara Bar. 83127, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={rightous.className}>
          <h1 className="text-2xl pb-4">Follow Us</h1>
        </div>
        <div className={arsenal.className}>
          <div className="flex gap-4">
            <Instagram />
            <Facebook />
            <Youtube />
          </div>
        </div>
      </div>
    </section>
  )
}
