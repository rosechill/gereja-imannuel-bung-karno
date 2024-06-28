import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import { Bri, Qris, mandiri } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function PersembahanDonasi() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">PERSEMBAHAN & DONASI</h1>
      </div>
      <div className={arsenal.className}>
        <div className="md:w-3/4 w-full md:px-0 px-4 m-0-auto flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="md:text-xl font-bold">
              Informasi Persembahan Melalui Kasir Gereja, Transfer Bank/Internet Banking
            </h2>
            <p className="italic text-gray-500">
              Untuk Persembahan lainnya bisa di Transfer melalui rekening jemaat melalui internet banking, mobile
              banking, ATM atau ke kasir kantor Majelis Jemaat pada jam kerja.
            </p>
          </div>
          <div className="">
            <h2 className="md:text-xl font-bold">QRIS PERSEMBAHAN</h2>
            <Image src={Qris} width={300} height={300} alt="Qris" className="pt-4 md:m-0 m-0-auto" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              Persembahan Persepuluhan, Persembahan Syukur (HUT, Keberhasilan) ,Persembahan Sukarela & Persembahan
              Diakonia dapat di transfer melalui :
            </h2>
            <h2 className="font-bold">Rek. Giro Rutin :</h2>
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:items-center">
              <div className="md:w-[200px] ">
                <Image className="m-0-auto" src={Bri} alt="bri" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="w-[120px]  ">Nomor Rekening</p>
                  <p>:</p>
                  <p> GPIB Immanuel Mataram</p>
                </div>
                <div className="flex gap-4">
                  <p className="w-[120px]  ">Nama Rekening</p>
                  <p>:</p>
                  <p>0052 0100 0818 305</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              Persembahan Syukur Khusus Pembangunan Gedung Gereja dapat di transfer melalui :
            </h2>
            <h2 className="font-bold">Rek. Giro Pembangunan :</h2>
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:items-center">
              <div className="md:w-[200px] ">
                <Image className="m-0-auto" src={mandiri} alt="bri" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="w-[120px]  ">Nomor Rekening</p>
                  <p>:</p>
                  <p>1610 0070 6415 2</p>
                </div>
                <div className="flex gap-4">
                  <p className="w-[120px]  ">Nama Rekening</p>
                  <p>:</p>
                  <p>Gereja Protestan di Indonesia bagian Barat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Rek. Tabungan Pembangunan : </h2>
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:items-center">
              <div className="md:w-[200px] ">
                <Image className="m-0-auto" src={Bri} alt="bri" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="w-[120px]  ">Nomor Rekening</p>
                  <p>:</p>
                  <p>0052 0100 0818 305</p>
                </div>
                <div className="flex gap-4">
                  <p className="w-[120px]  ">Nama Rekening</p>
                  <p>:</p>
                  <p>GPIB Immanuel Mataram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BorderSection />
      <div>
        <div className={arsenal.className}>
          <div className="md:w-3/4 w-full md:px-0 px-4 m-0-auto flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="italic text-gray-500">Note : Masukkan Angka Terakhir Sebagai Code Pembayaran</p>
              <div className="flex md:flex-row flex-col md:gap-24 gap-8">
                <div className="flex flex-col gap-2">
                  <p>Kode Angka :</p>
                  <p className="font-bold">1. Persepuluhan Persembahan</p>
                  <p className="font-bold">2. Persembahan Syukur</p>
                  <p className="font-bold">3. Donasi</p>
                  <p className="font-bold">4. Donasi Bencana Alam</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Contoh :</p>
                  <p>
                    1. Transfer <span className="font-bold">Persepuluhan</span> Rp 500.000, menjadi Rp 500.001
                  </p>
                  <p>
                    2. Transfer <span className="font-bold">Persembahan</span> Syukur Rp 500.000, menjadi Rp 500.002
                  </p>
                  <p>
                    3. Transfer <span className="font-bold">Donasi</span> Rp 500.000, menjadi Rp 500.003
                  </p>
                  <p>
                    4. Transfer <span className="font-bold">Sumbangan</span> Bencana Alam Rp 500.000, menjadi Rp 500.004
                  </p>
                </div>
              </div>
              <p>Dengan mencantumkan Nama Keluarga & Jenis persembahannya.</p>
              <p>(Bagi yang memberikan Persembahan mohon untuk mengirimkan Nama & bukti transfer Bank serta jenis</p>
              <p>
                persembahan ke Nomor Whatsapp (0818 0360 5218 – a.n Eko) untuk menjadi laporan pada bagian keuangan{' '}
              </p>
              <p>gereja dan untuk dilaporkan dalam Warta Jemaat.</p>
            </div>
          </div>
        </div>
      </div>
      <BorderSection />
    </section>
  )
}
