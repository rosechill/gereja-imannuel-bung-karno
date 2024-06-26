import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import React from 'react'

const dataPelayanan = [
  {
    position: 'Pelayanan Anak',
    name: ' Sdri. Sonphilya Auberta Anggi Dess Tawa',
  },
  {
    position: 'Persekutuan Teruna',
    name: 'Sdr. Ary Abraham Angurah',
  },
  {
    position: 'Gerakan Pemuda',
    name: 'Sdri. Cindy Dewu',
  },
  {
    position: 'Persekutuan Kaum Perempuan',
    name: 'Ibu Ercu Harlingga',
  },
  {
    position: 'Persekutuan Kaum Bapak',
    name: 'Bpk. Nosear D. Magho',
  },
  {
    position: 'Persekutuan Kaum Lanjut Usia',
    name: 'Ibu M. M. Widiastuty Wenas',
  },
]

const dataJemaat = [
  {
    position: 'Teologi dan Persidangan Gerejawi',
    name: 'Sdri. Sonphilya Auberta Anggi Dess Tawa',
  },
  {
    position: 'Musik Gerejawi (Muger)',
    name: 'Sdr. Ary Abraham Angurah',
  },
  {
    position: 'Diakonia Bagian Peduli Jemaat',
    name: 'Sdri. Cindy Dewu',
  },
  {
    position: 'Diakonia Bagian Kedukaan',
    name: 'Ibu Ercu Harlingga',
  },
  {
    position: 'Kesehatan',
    name: 'Bpk. Nosear D. Magho',
  },
  {
    position: 'Germasa',
    name: 'Ibu M. M. Widiastuty Wenas',
  },
  {
    position: 'Pendidikan',
    name: 'Ibu Ercu Harlingga',
  },
  {
    position: 'Pembangunan Ekonomi Gereja (PEG)',
    name: 'Bpk. Nosear D. Magho',
  },
  {
    position: 'Inforkom dan Litbang',
    name: 'Ibu M. M. Widiastuty Wenas',
  },
]

const dataBpjj = [
  {
    position: 'Ketua',
    name: 'Bpk. Iwan Y. Latumaelissa',
  },
  {
    position: 'Sekretaris',
    name: 'Ibu Sriyanti Yunardi Baok',
  },
  {
    position: 'Anggota',
    name: 'Ibu Santi Bonaria Tambun',
  },
]
export default function UnitMisioner() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">UNIT MISIONER</h1>
      </div>
      <div className={arsenal.className}>
        <div className="md:w-3/4 md:px-0 px-4 m-0-auto">
          <p>
            Unit Misioner adalah wadah pembinaan warga jemaat dan pelaksana misi GPIB dalam rangka pembangunan jemaat
            secara berkesinambungan di bawah tanggung jawab majelis jemaat. Unit Misioner terdiri dari atas:
          </p>
        </div>
      </div>
      <div className={rightous.className}>
        <h1 className="desktop:text-2xl text-xl text-center">Koordinator Pelayanan Kategorial</h1>
      </div>
      <BorderSection />
      <div className={arsenal.className}>
        <div className="w-full flex flex-col items-center ">
          {dataPelayanan.map((item, index) => (
            <div key={index} className="flex  md:w-4/6 w-full py-3 px-4">
              <div className="flex md:w-[300px] gap-4">
                <p className="md:w-[250px] w-[150px]">{item.position} </p>
                <p>:</p>
              </div>
              <p className="font-bold"> {item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="desktop:text-2xl text-xl text-center">Komisi Jemaat</h1>
      </div>
      <div className={arsenal.className}>
        <div className="w-full flex flex-col items-center ">
          {dataJemaat.map((item, index) => (
            <div key={index} className="flex  md:w-4/6 w-full py-3 px-4">
              <div className="flex md:w-[300px] gap-4">
                <p className="md:w-[250px] w-[150px]">{item.position} </p>
                <p>:</p>
              </div>
              <p className="font-bold"> {item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="desktop:text-2xl text-xl text-center">BPPJ Jemaat</h1>
      </div>
      <div className={arsenal.className}>
        <div className="w-full flex flex-col items-center ">
          {dataBpjj.map((item, index) => (
            <div key={index} className="flex  md:w-4/6 w-full py-3 px-4">
              <div className="flex md:w-[300px] gap-4">
                <p className="md:w-[250px] w-[150px]">{item.position} </p>
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
