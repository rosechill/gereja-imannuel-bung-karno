import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import React from 'react'

const data = [
  {
    position: 'Sektor 1',
    name: ' Pnt. Koeswanto',
  },
  {
    position: 'Sektor 2',
    name: 'Dkn. Dominikus Umbu Pati',
  },
  {
    position: 'Sektor 3',
    name: 'Pnt. Eko Suprayitno',
  },
  {
    position: 'Sektor 4',
    name: 'Pnt. Mesach Sadarach',
  },
  {
    position: 'Sektor 5',
    name: 'Pnt. Harvy D. Messakh',
  },
  {
    position: 'Sektor 6',
    name: 'Pnt. Simon Buraen',
  },
  {
    position: 'Sektor 7',
    name: 'Dkn. Ni Nyoman Sriwati',
  },
  {
    position: 'Sektor 8',
    name: 'Pnt. I Nengah Kisid',
  },
  {
    position: 'Sektor 9',
    name: 'Dkn. Daniel Leuwol',
  },
  {
    position: 'Sektor 10',
    name: 'Pnt. Feby A. Leosae',
  },
  {
    position: 'Sektor 11',
    name: 'Pnt. Dwi Kartika Handayani',
  },
]

const dataLokasi = [
  {
    position: 'Sektor 1',
    name: ' BTN-A',
  },
  {
    position: 'Sektor 2',
    name: 'BTN-B',
  },
  {
    position: 'Sektor 3',
    name: 'Cakranegara',
  },
  {
    position: 'Sektor 4',
    name: 'Gebang',
  },
  {
    position: 'Sektor 5',
    name: 'Lingkar Selatan',
  },
  {
    position: 'Sektor 6',
    name: 'Gerung',
  },
  {
    position: 'Sektor 7',
    name: 'Mataram',
  },
  {
    position: 'Sektor 8',
    name: 'Perumnas',
  },
  {
    position: 'Sektor 9',
    name: 'POS PELKES Talitakum Praya',
  },
  {
    position: 'Sektor 10',
    name: 'POS PELKES Bait Allah Selong',
  },
  {
    position: 'Sektor 11',
    name: 'POS PELKES Kasih Setia Tuhan Sambelia',
  },
]

export default function KoordinatorSektor() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">KOORDINATOR SEKTOR PERIODE 2022- 2027</h1>
      </div>
      <BorderSection />
      <div className={arsenal.className}>
        <div className="w-full flex flex-col items-center ">
          {data.map((item, index) => (
            <div key={index} className="flex  w-4/6 py-3 px-4">
              <div className="flex w-[220px] gap-4">
                <p className="w-[150px]">{item.position} </p>
                <p>:</p>
              </div>
              <p className="font-bold"> {item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">11 Sektor Pelayanan GPIB Immanuel Bung Karno</h1>
      </div>
      <div className={arsenal.className}>
        <div className="w-full flex flex-col items-center ">
          {dataLokasi.map((item, index) => (
            <div key={index} className="flex  w-4/6 py-3 px-4">
              <div className="flex w-[220px] gap-4">
                <p className="w-[150px]">{item.position} </p>
                <p>:</p>
              </div>
              <p className="font-bold"> {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
