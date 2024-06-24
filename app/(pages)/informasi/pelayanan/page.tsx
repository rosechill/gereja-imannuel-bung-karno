import { arsenal, rightous } from '@/app/ui/font'
import BorderSection from '@/app/ui/borderSection'
import BorderSmallSection from '@/app/ui/borderSmallSection'
import React from 'react'

export default function Pelayanan() {
  return (
    <section className="py-desktop flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="text-3xl text-center">Pelayanan</h1>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">PELAYANAN KANTOR MAJELIS JEMAAT</h1>
      </div>
      <div className="text-center">
        <p>Buka setiap hari/jam kerja dari Senin-Sabtu pkl. 08.00-16.00 WITA, kecuali hari Rabu pkl. 08.00-14.00</p>
        <p>WITA.t: Selasa-Sabtu pukul 09.00 - 18.00 WIB</p>
        <p>Lokasi : Jl. Bung Karno Mataram</p>
      </div>
      <BorderSmallSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">PELAYANAN TRANSFUSI DARAH</h1>
      </div>
      <div className="text-center">
        <p>Kepada para Jemaat GPIB Immanuel Bung Karno yang membutuhan transfusi darah untuk anggota keluarga atau</p>
        <p>relasi yang sedang dirawat dan mengalami kesulitan mendapatkan darah, dapat menghubungi Komisi Germasa di</p>
        <p>nomor HP 0852 3964 3515 (Bpk. Frederick S. Saboe).</p>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">PELAYANAN KONSULTASI HUKUM & BANTUAN</h1>
      </div>
      <div className="text-center">
        <p>Warga jemaat yang GPIB Immanuel Bung Karno memerlukan bantuan dan konsultasi hukum, dipersilakan</p>
        <p>menghubungi Kantor Majelis Jemaat pada setiap hari kerja, pukul 08.00 - 17.00 WIB untuk dibuatkan jadwal</p>
        <p>konsultasi.</p>
      </div>
      <BorderSmallSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">PELAYANAN KESEHATAN</h1>
      </div>
      <div className="text-center">
        <p>Pelayanan Kesehatan GPIB Immanuel Bung Karno dibuka setelah</p>
        <p>
          Ibadah Hari Minggu, pukul 10.30 s.d. 11.30 WIB. Melayani konsutasi, ukur tensi dan memberikan vitamin sesuai
        </p>
        <p>yang tersedia. Dilayani dokter dan suster. Atau bisa menghubungi Komisi Kesehatan di nomor HP 0817 364</p>
        <p>209 (Ibu drg. Mutiara)</p>
      </div>
      <BorderSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">PELAYANAN KEDUKAAN</h1>
      </div>
      <div className="text-center">
        <p>Apabila ingin melakukan pelayanan kedukaan untuk anggota keluarga atau relasi yang sedang mengalami bisa</p>
        <p>untuk menghubungi Komisi Diakonia Bagian Kedukaan di nomor 0812 4608 8886 (Bpk. Sulsel Alpius Tammu)</p>
      </div>
      <BorderSmallSection />
      <div className={rightous.className}>
        <h1 className="text-2xl text-center">PELAYANAN SAKRAMEN BABTISAN</h1>
      </div>
      <div className="text-center font-bold">
        <p>Warga jemaat yang akan dilayani Sakramen Baptisan Kudus di GPIB Immanuel Bung Karno Jemaat</p>
        <p>Mataram, agar menyiapkan dokumen berikut :</p>
      </div>
      <div className="text-center ">
        <p>1. Fotokopi Akta Kelahiran</p>
        <p>2. Fotokopi Surat Nikah dan Akta Perkawinan</p>
        <p>3. Fotokopi Surat Sidi Orangtua</p>
        <p>4. Fotokopi KTP Saksi (jika ada saksi)</p>
        <p>5. Fotokopi Surat Sidi Saksi (jika ada saksi)</p>
        <p>6. Pasfoto terakhir ukuran 3x4 (2 lembar)</p>
      </div>
      <h2 className="text-center font-bold">Informasi Baptisan Anak</h2>
      <div className="text-center">
        <p>
          Pada Ibadah Hari Minggu, 16 Juni 2024 pukul 09.00 WITA akan dilaksanakan Sakramen Baptisan bagi Carlos
          Syahputra,
        </p>
        <p>anak dari Bpk. Pramono Mulia Himela dan Ibu Renata Hati.</p>
        <p>Untuk informasi lebih lanjut, silakan menghubungi</p>
      </div>
      <div className="text-center">
        <p>Kantor Majelis Jemaat GPIB Immanuel Bung Karno :</p>
        <p>Telp. (0370) 645043</p>
        <p>E-mail : gpib.mataram@yahoo.co.id/immanuel.bungkarno@gpib.or.id</p>
      </div>
      <BorderSection/>
    </section>
  )
}
