import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import React from 'react'

const data = [
  {
    position: 'Ketua Majelis Jemaat',
    name: 'Pdt. Miss Pelletimu Sono Bogar, M.Si.',
  },
  {
    position: 'Ketua I',
    name: 'Pnt. Semuel Sayuna',
  },
  {
    position: 'Ketua II',
    name: 'Pnt. Syami Tarik',
  },
  {
    position: 'Ketua III',
    name: 'Pnt. Ferra B. Rendak-Menoh',
  },
  {
    position: 'Ketua IV',
    name: 'Pnt. Atus Ndoen',
  },
  {
    position: 'Ketua V',
    name: 'Pnt. Herry A. Putro',
  },
  {
    position: 'Sekretaris ',
    name: 'Pnt. Sari F. T. Napitupulu',
  },
  {
    position: 'Sekretaris I',
    name: 'Dkn. Daniel P. Tomasowa',
  },
  {
    position: 'Sekretaris II',
    name: 'Pnt. Ariswati Zagoto',
  },
  {
    position: 'Bendahara ',
    name: 'Dkn. Ni Made Dewi Puri Riastuti',
  },
  {
    position: 'Bendahara 1',
    name: 'Dkn. Christ Desnatal A. H. Nainggolan',
  },
]

const dataJemaat = [
  {
    position: 'Pendeta Jemaat',
    name: 'Pdt. Marlina Nova Elisabeth Prawito Ponteoa,S.Th.',
  },
  {
    position: 'Pendeta Jemaat',
    name: 'Pdt. Eka Rahayu Christiawan Manubulu,S.Si.-Teol',
  },
]
export default function PHMJ() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-2xl text-xl text-center">PHMJ Periode 2022-2025</h1>
      </div>
      <BorderSection />
      <div className={arsenal.className}>
        <div className="w-full flex flex-col items-center ">
          {data.map((item, index) => (
            <div key={index} className="flex  sm:w-4/6 w-full py-3 px-4">
              <div className="flex md:w-[220px] gap-4  ">
                <p className="desktop:w-[150px] w-[100px]">{item.position} </p>
                <p>:</p>
              </div>
              <p className="font-bold ps-4"> {item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="desktop:text-2xl text-xl text-center">Pendeta Jemaat</h1>
      </div>
      <div className={arsenal.className}>
        <div className="w-full flex flex-col items-center ">
          {dataJemaat.map((item, index) => (
            <div key={index} className="flex  sm:w-4/6 w-full py-3 px-4">
              <div className="flex md:w-[220px] gap-4">
                <p className="desktop:w-[150px] w-[100px]">{item.position} </p>
                <p>:</p>
              </div>
              <p className="font-bold ps-4"> {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
