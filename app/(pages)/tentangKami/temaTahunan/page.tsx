import BorderSection from '@/app/ui/borderSection'
import { arsenal, rightous } from '@/app/ui/font'
import React from 'react'

export default function VisiMisi() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center desktop:gap-8 gap-4 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">TEMA TAHUNAN GPIB</h1>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <h1 className="desktop:text-2xl text-xl ">TEMA SENTRAL (JANGKA PANJANG) UNTUK 2006 – 2026</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <p>“Yesus Kristus Sumber Damai Sejahtera“</p>
          <p>(Yohanes 14 : 27)</p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <h1 className="desktop:text-2xl text-xl ">Tema PKUPPG Jangka Pendek IV Tahun 2022 - 2026</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <p>
            “Membangun sinergi dalam hubungan gereja dan masyarakat untuk mewujudkan Kasih Allah yang meliputi seluruh
            ciptaan-Nya"
          </p>
          <p>(Matius 22 : 37 - 39; Ulangan 6 : 5; Imamat 19 : 18)</p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <h1 className="desktop:text-2xl text-xl ">Tema Tahunan GPIB Tahun 2024 - 2025</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <p>
            "Melayani dan bersaksi secara interaktif berbasis komunitas digital dengan semangat gotong royong demi
            kesejahteraan bangsa”
            <p>(Kisah Para Rasul 4 : 32)</p>
          </p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <h1 className="desktop:text-2xl text-xl ">Tema 5 Tahun</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <p>
            “Mengembangkan Sumber Daya Gereja untuk meningkatkan Pelayanan dan Kesaksian yang mendatangkan damai
            sejahtera di tengah dan bersama masyarakat”
          </p>
          <p>(Lukas 1:79)</p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <h1 className="desktop:text-2xl text-xl ">TEMA 2018/2019</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="desktop:w-3/4 w-full m-0-auto desktop:px-0 px-4">
          <p>“Membangun spiritualitas damai yang menciptakan pendamai”</p>
          <p>(Yakobus 3:13-18)</p>
        </div>
      </div>
    </section>
  )
}
