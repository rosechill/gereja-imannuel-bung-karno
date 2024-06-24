import { arsenal, rightous } from '@/app/layout'
import React from 'react'

export default function VisiMisi() {
  return (
    <section className="py-desktop flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center">VISI & MISI GPIB</h1>
      </div>
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto">
          <p>
            GPIB Immanuel Bung Karno adalah sebuah bangunan gereja yang berada di wilayah Mataram - Lombok. Tepatnya di
            Jl. Bung Karno No.1, Mataram Tim., Kec. Mataram, Kota Mataram, Nusa Tenggara Bar. 83127. Gereja ini berada
            di bawah naungan GPIB (Gereja Protestan di Indonesia bagian Barat) Jemaat Mataram dengan sistem
            penyelenggaraan Presbiterial Sinodal yang telah di terapkan sejak awal.
          </p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="w-3/4 m-0-auto">
          <h1 className="text-2xl ">Visi</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto">
          <p>Menjadi gereja yang mewujudkan damai sejahtera bagi seluruh ciptaanNya</p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="w-3/4 m-0-auto">
          <h1 className="text-2xl ">Misi</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto">
          <p className=''>
            1. Menjadi Gereja yang terus menerus diperbaharui dengan bertolak dari Firman Allah, yang terwujud dalam
            perilaku kehidupan warga gereja, baik dalam persekutuan, maupun dalam hidup bermasyarakat.
          </p>
          <p className=''>
            2. Menjadi gereja yang hadir sebagai contoh kehidupan, yang terwujud melalui inisiatif dan partisipasi dalam
            kesetiakawanan sosial serta kerukunan dalam masyarakat, dengan berbasis pada perilaku kehidupan keluarga
            yang kuat dan sejahtera.
          </p>
          <p className=''>
            3. Menjadi Gereja yang membangun keutuhan ciptaan yang terwujud melalui perhatian terhadap lingkungan hidup,
            semangat keesaan dan semangat persatuan dan kesatuan warga Gereja sebagai warga masyarakat.
          </p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="w-3/4 m-0-auto">
          <h1 className="text-2xl ">Motto</h1>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto">
          <p>
            “Dan orang akan datang dari timur dan barat dan dari utara dan selatan dan mereka duduk makan di dalam
            Kerajaan Allah”. (Lukas 13 : 29).
          </p>
        </div>
      </div>
    </section>
  )
}
