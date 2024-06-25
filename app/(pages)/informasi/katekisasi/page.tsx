import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import React from 'react'

export default function Katekisasi() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">SEJARAH GPIB IMMANUEL BUNG KARNO MATARAM</h1>
      </div>
      <div className={rightous.className}>
        <div className="w-3/4 m-0-auto">
          <h2 className="text-2xl font-bold">KELAS KATEKISASI REGULER 2024 - 2025</h2>
        </div>
      </div>
      <BorderSection />
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto flex flex-col gap-4">
          <p>Salam sejahtera untuk kita. Semoga semua dalam keadaan baik.</p>
          <p>Pendaftaran Kelas Katekisasi (Reguler) Angkatan 2024-2025 telah dibuka. </p>
          <p>Pendaftaran akan ditutup padaSabtu, 4 Mei 2024.</p>
          <p>Pertama para Katekisanakan dilaksanakan pada :</p>
          <div className="italic">
            <p>
              Hari & Tanggal: <span className="font-bold">Senin, 6 Mei 2024</span>
            </p>
            <p>
              Waktu: <span className="font-bold">19.00 WIB-selesai</span>
            </p>
            <p>
              Tempat: <span className="font-bold">GPIBGPIB Gedung Serba Guna, Jl. Bung Karno Mataram</span>
            </p>
          </div>
          <p>Seluruh kelas akan berlangsung secara tatap muka (onsite).</p>
          <p>Terima kasih atas perhatian dan kerjasamanya. Tuhan memberkati.</p>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="w-3/4 m-0-auto text-center">
          <h2 className="text-2xl font-bold ">KELAS KATEKISASI REGULER 2024 – 2025</h2>
          <div className="w-2/4 m-0-auto h-[2px] bg-black mt-1"></div>
        </div>
      </div>
      <div className={arsenal.className}>
        <div className="flex flex-col w-3/4 m-0-auto gap-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left rtl:text-right">
              <thead className="uppercase">
                <tr>
                  <th scope="col" className="px-6 py-2 border-r">
                    Hari/Tanggal
                  </th>
                  <th scope="col" className="px-6 py-2 border-r">
                    Waktu
                  </th>
                  <th scope="col" className="px-6 py-2 border-r">
                    Tempat
                  </th>
                  <th scope="col" className="px-6 py-2 border-r">
                    Pengajar
                  </th>
                  <th scope="col" className="px-6 py-2 border-r">
                    Pokok Bahasan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" odd:bg-whiteSecondary">
                  <th scope="row" className="border-r px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Minggu, 9 Juni 2024
                  </th>
                  <td className="px-6 py-4 border-r">12.00 WITA</td>
                  <td className="px-6 py-4 border-r">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                  <td className="px-6 py-4 border-r">Pdt. Marlina Nova Elisabeth Prawito-Ponteoa</td>
                  <td className="px-6 py-4 border-r">Pokok Keselamatan : Perjamuan Kudus</td>
                </tr>
                <tr>
                  <th scope="row" className="border-r px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Minggu, 16 Juni 2024
                  </th>
                  <td className="px-6 py-4 border-r">12.00 WITA</td>
                  <td className="px-6 py-4 border-r">Gedung Serba Guna, Jl. Bung Karno Mataram</td>
                  <td className="px-6 py-4 border-r">Pdt. Miss Pelletimu-Sono Bogar</td>
                  <td className="px-6 py-4 border-r">Pokok Keselamatan : Roh Kudus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={rightous.className}>
        <div className="w-3/4 m-0-auto">
          <h2 className="text-2xl font-bold">KELAS KATEKISASI KHUSUS</h2>
        </div>
      </div>
      <BorderSection />
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto flex flex-col gap-4">
          <p>
            1. Pelayanan Katekisasi Khusus a/n Sdri. Leni Andriani dan Sdri. Ni Wayan Widyastuti mulai bulan Maret 2024.
          </p>
          <p>Pembina : Pdt. Miss Pelletimu-Sono Bogar.</p>
          <p>2. Pelayanan Katekisasi Khusus a/n Sdri. Arlene Wati Bernesi Djami mulai bulan Mei 2024.</p>
          <p>Pembina : Pdt. Marlina Nova Elisabeth Prawito-Ponteoa</p>
          <p>3. Pelayanan Katekisasi Khusus Pra Perkawinan a/n Sdr. Denison Tidas Bilang dan Sdri. Ekariska Majang</p>
          <p>dilaksanakan mulai bulan Mei 2024. Pembina : Pdt. Marlina Nova Elisabeth Prawito-Ponteoa.</p>
        </div>
      </div>
    </section>
  )
}
