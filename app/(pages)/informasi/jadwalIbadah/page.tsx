import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import React from 'react'
import TableIbadah from './tableIbadah'

const data = [
  {
    tempat: 'GPIB Immanuel Bung Karno, Jl. Bung Karno',
    waktu: 'Minggu - 09:00 WITA',
    keterangan: 'Onsite',
  },
  {
    tempat: 'GPIB Immanuel Bung Karno, Jl. Bung Karno',
    waktu: 'Minggu - 10:45 WITA',
    keterangan: 'Onsite',
  },
  {
    tempat: 'GPIB Immanuel Bung Karno, Jl. Bung Karno',
    waktu: 'Jumat - 19:00 WITA',
    keterangan: 'Onsite',
  },
  {
    tempat: 'Masing - Masing Sektor',
    waktu: 'Jumat - 17:00 WITA',
    keterangan: 'Onsite',
  },
  {
    tempat: 'GPIB Immanuel Bung Karno, Jl. Bung Karno',
    waktu: 'Jumat - 17:00 WITA',
    keterangan: 'Onsite',
  },
  {
    tempat: 'GPIB Immanuel Bung Karno, Jl. Bung Karno',
    waktu: 'Jumat - 19:30 WITA',
    keterangan: 'Onsite',
  },
  {
    tempat: 'GPIB Immanuel Bung Karno, Jl. Bung Karno',
    waktu: 'Sabtu- 10:00 WITA',
    keterangan: 'Onsite',
  },
  {
    tempat: 'Masing - Masing Sektor',
    waktu: 'Rabu - 17:00 WITA',
    keterangan: 'Onsite',
  },
]
export default function JadwalIbadah() {
  return (
    <section className="py-desktop flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center">SEJARAH GPIB IMMANUEL BUNG KARNO MATARAM</h1>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Ibadah Umum Hari Minggu</h1>
      </div>
      <div className={arsenal.className}>
        <div className="flex flex-col w-3/4 m-0-auto gap-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-center">
              <thead className="uppercase">
                <tr className="grid grid-cols-3">
                  <th scope="col" className="px-6 py-2 border">
                    Tempat
                  </th>
                  <th scope="col" className="px-6 py-2 border">
                    Hari/Waktu
                  </th>
                  <th scope="col" className="px-6 py-2 border">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" odd:bg-whiteSecondary grid grid-cols-3">
                  <th
                    scope="row"
                    className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                  >
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="px-6 py-4 border flex justify-center items-center">Minggu - 09:00 WITA</td>
                  <td className="px-6 py-4 border">
                    <div className="flex flex-col text-start">
                      <p>Onsite</p>
                      <p>Online(Youtube/@GPIBImmanuelBungKarnoMataram) </p>
                    </div>
                  </td>
                </tr>
                <tr className="grid grid-cols-3">
                  <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="px-6 py-4 border"> Minggu - 18:00 WITA</td>
                  <td className="px-6 py-4 border">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Ibadah Hari Minggu Pelayanan Anak (PA)</h1>
      </div>
      <TableIbadah item={data[0]} index={0} />

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Ibadah Hari Minggu Persekutuan Teruna (PT)</h1>
      </div>
      <TableIbadah item={data[1]} index={0} />

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Ibadah Gerakan Pemuda (GP)</h1>
      </div>
      <TableIbadah item={data[2]} index={0} />

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Ibadah Persekutuan Kaum Perempuan (PKP)</h1>
      </div>
      <TableIbadah item={data[3]} index={0} />

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Ibadah Gabungan PKP</h1>
      </div>
      <TableIbadah item={data[4]} index={0} />

      <div className={arsenal.className}>
        <div className="flex gap-4 m-0-auto px-6 py-3 rounded-lg items-center w-fit bg-whiteSecondary font-bold border">
          <div>
            <p>Sektor :</p>
          </div>
          <div className="flex flex-col">
            <p className="border-b-2 border-black">BTN-A</p>
            <p>GEBANG</p>
          </div>
          <div className="flex flex-col">
            <p className="border-b-2 border-black">BTN-B</p>
            <p>GEBANG</p>
          </div>
          <div className="flex flex-col">
            <p className="border-b-2 border-black">CN+GERUNG</p>
            <p>PERUMNAS</p>
          </div>
          <div>
            <p>LS</p>
          </div>
        </div>
      </div>

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Ibadah Persekutuan Kaum Bapak (PKB)</h1>
      </div>
      <TableIbadah item={data[5]} index={0} />

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">
          Jadwal Ibadah Hari Minggu Persekutuan Kaum Lanjut Usia (PKLU)
        </h1>
      </div>
      <TableIbadah item={data[6]} index={0} />

      <div className={arsenal.className}>
        <div className="flex flex-col w-3/4 m-0-auto gap-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-center">
              <thead className="uppercase">
                <tr className="grid grid-cols-3">
                  <th scope="col" className="px-6 py-2 border">
                    Tempat
                  </th>
                  <th scope="col" className="px-6 py-2 border">
                    Hari/Waktu
                  </th>
                  <th scope="col" className="px-6 py-2 border">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid grid-cols-3 odd:bg-whiteSecondary">
                  <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="px-6 py-4 border"> Minggu - 18:00 WITA</td>
                  <td className="px-6 py-4 border">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                </tr>
                <tr className="grid grid-cols-3">
                  <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="px-6 py-4 border"> Minggu - 18:00 WITA</td>
                  <td className="px-6 py-4 border">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={rightous.className}>
        <h1 className="text-2xl text-center underline">Jadwal Pelayanan Ibadah Keluarga</h1>
      </div>
      <TableIbadah item={data[7]} index={0} />

      <div className={arsenal.className}>
        <div className="flex gap-4 m-0-auto px-6 py-3 rounded-lg items-center w-fit bg-whiteSecondary font-bold border">
          <div>
            <p>Sektor :</p>
          </div>
          <div className="flex flex-col">
            <p className="border-b-2 border-black">BTN-A</p>
            <p>GEBANG</p>
          </div>
          <div className="flex flex-col">
            <p className="border-b-2 border-black">BTN-B</p>
            <p>GEBANG</p>
          </div>
          <div className="flex flex-col">
            <p className="border-b-2 border-black">CN+GERUNG</p>
            <p>PERUMNAS</p>
          </div>
          <div>
            <p>LS</p>
          </div>
        </div>
      </div>

      <div className={arsenal.className}>
        <p className="text-center italic">
          Untuk melihat jadwal selengkapnya silahkan mengunduh warta jemaat pada menu{' '}
          <span className="text-greenPrimary font-bold">Unduhan</span>
        </p>
      </div>
    </section>
  )
}
