import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import React from 'react'
import TableIbadah from './tableIbadah'
import Link from 'next/link'

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
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">JADWAL IBADAH GPIB IMMANUEL BUNG KARNO</h1>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Ibadah Umum Hari Minggu</h1>
      </div>
      <div className={arsenal.className}>
        <div className="flex flex-col md:w-3/4 w-full md:px-0 px-4 m-0-auto gap-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-center">
              <thead className="uppercase">
                <tr className="grid grid-cols-3">
                  <th scope="col" className="md:px-6 px-0 py-2 border">
                    Tempat
                  </th>
                  <th scope="col" className="md:px-6 px-0 py-2 border">
                    Hari / Waktu
                  </th>
                  <th scope="col" className="md:px-6 px-0 py-2 border">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" odd:bg-whiteSecondary grid grid-cols-3">
                  <th
                    scope="row"
                    className="border md:px-6 px-0 py-4 font-medium text-gray-900  flex justify-center items-center"
                  >
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="md:px-6 px-0 py-4 border flex justify-center items-center">Minggu - 09:00 WITA</td>
                  <td className="md:px-6 px-0 py-4 border">
                    <div className="flex flex-col text-start">
                      <p className="ps-2">Onsite</p>
                      <p className="ps-2">
                        Online{' '}
                        <Link className="text-red-500" href={''}>
                          youtube
                        </Link>{' '}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="grid grid-cols-3">
                  <th scope="row" className="border md:px-6 px-0 py-4 font-medium text-gray-900 ">
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="md:px-6 px-0 py-4 border"> Minggu - 18:00 WITA</td>
                  <td className="md:px-6 px-0 py-4 border">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Ibadah Hari Minggu Pelayanan Anak (PA)</h1>
      </div>
      <TableIbadah item={data[0]} index={0} />

      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Ibadah Hari Minggu Persekutuan Teruna (PT)</h1>
      </div>
      <TableIbadah item={data[1]} index={0} />

      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Ibadah Gerakan Pemuda (GP)</h1>
      </div>
      <TableIbadah item={data[2]} index={0} />

      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Ibadah Persekutuan Kaum Perempuan (PKP)</h1>
      </div>
      <TableIbadah item={data[3]} index={0} />

      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Ibadah Gabungan PKP</h1>
      </div>
      <TableIbadah item={data[4]} index={0} />

      <div className={arsenal.className}>
        <div className="flex gap-4 m-0-auto md:px-6 px-0 py-3 rounded-lg items-center w-fit bg-whiteSecondary font-bold border">
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
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Ibadah Persekutuan Kaum Bapak (PKB)</h1>
      </div>
      <TableIbadah item={data[5]} index={0} />

      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">
          Jadwal Ibadah Hari Minggu Persekutuan Kaum Lanjut Usia (PKLU)
        </h1>
      </div>
      <TableIbadah item={data[6]} index={0} />

      <div className={arsenal.className}>
        <div className="flex flex-col md:w-3/4 w-full md:px-0 px-4 m-0-auto gap-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-center">
              <thead className="uppercase">
                <tr className="grid grid-cols-3">
                  <th scope="col" className="md:px-6 px-0 py-2 border">
                    Tempat
                  </th>
                  <th scope="col" className="md:px-6 px-0 py-2 border">
                    Hari/Waktu
                  </th>
                  <th scope="col" className="md:px-6 px-0 py-2 border">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid grid-cols-3 odd:bg-whiteSecondary">
                  <th scope="row" className="border md:px-6 px-0 py-4 font-medium text-gray-900 ">
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="md:px-6 px-0 py-4 border"> Minggu - 18:00 WITA</td>
                  <td className="md:px-6 px-0 py-4 border">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                </tr>
                <tr className="grid grid-cols-3">
                  <th scope="row" className="border md:px-6 px-0 py-4 font-medium text-gray-900 ">
                    GPIB Immanuel Bung Karno, Jl. Bung Karno
                  </th>
                  <td className="md:px-6 px-0 py-4 border"> Minggu - 18:00 WITA</td>
                  <td className="md:px-6 px-0 py-4 border">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={rightous.className}>
        <h1 className="md:text-2xl text-xl text-center underline">Jadwal Pelayanan Ibadah Keluarga</h1>
      </div>
      <TableIbadah item={data[7]} index={0} />

      <div className={arsenal.className}>
        <div className="flex gap-4 m-0-auto md:px-6 px-0 py-3 rounded-lg items-center w-fit bg-whiteSecondary font-bold border">
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
        <p className="text-center italic md:px-0 px-4">
          Untuk melihat jadwal selengkapnya silahkan mengunduh warta jemaat pada menu{' '}
          <span className="text-greenPrimary font-bold">Unduhan</span>
        </p>
      </div>
    </section>
  )
}
