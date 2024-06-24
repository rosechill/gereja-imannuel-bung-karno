import { rightous } from '@/app/layout'
import React from 'react'
import BorderSection from '../borderSection'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function JadwalIbadah() {
  return (
    <section className="py-desktop flex flex-col justify-center  gap-8 ">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center">Sejarah GPIB Immanuel Bung Karno</h1>
      </div>
      <BorderSection />
      <h2 className="font-bold text-xl text-center">Ibadah Hari Minggu III Sesudah Pentakosta</h2>
      <div className="w-full flex flex-col items-center font-bold ">
        <div className="grid grid-cols-2 w-4/6 py-3 px-4 bg-whiteSecondary">
          <p>Tanggal-Waktu :</p>
          <p>9 Juni 2024-09:00 WITA</p>
        </div>
        <div className="grid grid-cols-2 w-4/6 py-3 px-4">
          <p>Tema Ibadah :</p>
          <p>“Hidup sukses bersama Tuhan”</p>
        </div>
        <div className="grid grid-cols-2 w-4/6 py-3 px-4 bg-whiteSecondary">
          <p>Pembacaan Alkitab :</p>
          <p>Kejadian 39 : 1 - 10</p>
        </div>
        <div className="grid grid-cols-2 w-4/6 py-3 px-4">
          <p>Pelayan Firman :</p>
          <p>Pendeta Miss Pelletimu-Sono Bogar</p>
        </div>
        <div className="grid grid-cols-2 w-4/6 py-3 px-4 bg-whiteSecondary">
          <p>Kategori :</p>
          <p>Umum</p>
        </div>
        <div className="grid grid-cols-2 w-4/6 py-3 px-4">
          <p>Keterangan: </p>
          <div className="flex flex-col gap-2 justify-start">
            <p>- Onsite</p>
            <p>- Live Stream (Youtube/@GPIBImmanuelBungKarnoMataram) </p>
          </div>
        </div>
      </div>
      <Link href={'/'} className='flex justify-center items-center'>
        <Button className="bg-greenPrimary text-whitePrimary text-center">Jadwal Lainnya</Button>
      </Link>
      <BorderSection />
    </section>
  )
}
