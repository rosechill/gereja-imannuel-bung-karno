'use client'
import DownloadButton from '@/app/ui/downloadButton'
import { arsenal } from '@/app/ui/font'
import React from 'react'

export default function InformasiTable() {
  return (
    <section>
      <div className={arsenal.className}>
        <div className="flex flex-col w-3/4 m-0-auto gap-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full ">
              <thead className="uppercase">
                <tr className="grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                  <th scope="col" className="px-6 py-2 border">
                    No
                  </th>
                  <th scope="col" className="px-6 py-2 border">
                    Warta Jemaat
                  </th>
                  <th scope="col" className="px-6 py-2 border">
                    Unduhan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-whiteSecondary grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                  <th scope="row" className="border px-6 py-4 font-medium text-gray-900">
                    1
                  </th>
                  <td className="px-6 py-4 border">Form Pendaftaram Baptisan</td>
                  <td className="px-6 py-2 border text-center">
                    <DownloadButton />
                  </td>
                </tr>
                <tr className="odd:bg-whiteSecondary grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                  <th scope="row" className="border px-6 py-4 font-medium text-gray-900">
                    2
                  </th>
                  <td className="px-6 py-4 border">Form Pendaftaran Katekisasi Sidi</td>
                  <td className="px-6 py-2 border text-center">
                    <DownloadButton />
                  </td>
                </tr>
                <tr className="odd:bg-whiteSecondary grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                  <th scope="row" className="border px-6 py-4 font-medium text-gray-900">
                    3
                  </th>
                  <td className="px-6 py-4 border">Form Pendaftaran Katekisasi Praperkawinan</td>
                  <td className="px-6 py-2 border text-center">
                    <DownloadButton />
                  </td>
                </tr>
                <tr className="odd:bg-whiteSecondary grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                  <th scope="row" className="border px-6 py-4 font-medium text-gray-900">
                    4
                  </th>
                  <td className="px-6 py-4 border">Formulir Pendaftaran Pemberkatan Perkawinan</td>
                  <td className="px-6 py-2 border text-center">
                    <DownloadButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
