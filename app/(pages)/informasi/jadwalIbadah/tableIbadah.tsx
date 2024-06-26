import { arsenal } from '@/app/ui/font'
import React from 'react'

export type datajadwal = {
  tempat: string
  waktu: string
  keterangan: string
}

export default function TableIbadah({ item, index }: { item: datajadwal; index: number }) {
  return (
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
                <th scope="row" className="border md:px-6 px-0 py-4 font-medium text-gray-900 ">
                  {item.tempat}
                </th>
                <td className="md:px-6 px-0 py-4 border">{item.waktu}</td>
                <td className="md:px-6 px-0 py-4 border">{item.keterangan}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
