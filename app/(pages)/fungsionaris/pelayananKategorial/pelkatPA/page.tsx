import BorderBigSection from '@/app/ui/borderBigSection'
import { arsenal } from '@/app/ui/font'
import InstagramKategorial from '@/app/ui/instagramKategorial'
import { PelkatPALogo, PelkatPAVideo, PelkatPAbg } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function PelkatPA() {
  return (
    <section className="flex flex-col justify-center gap-8 my-20 ">
      <Image src={PelkatPAbg} alt="pelkatPA" className="w-full min-h-[300px] object-cover" quality={100} />
      <div className={arsenal.className}>
        <div className="flex flex-col gap-8 lg:w-3/4 w-full lg:px-0 px-4 m-0-auto">
          <h1 className="desktop:text-3xl text-2xl text-center font-bold">
            Tentang PELKAT Persekutuan Anak (PA) GPIB Immanuel Bung Karno{' '}
          </h1>
          <BorderBigSection />
          <div>
            <p>
              Sejak didirikan pada 6 September 1959, Pelayanan Kategorial Anak (Pelkat PA) GPIB telah menjadi salah satu
              dari enam layanan kategorial yang beroperasi di GPIB, dengan misi khusus untuk mendampingi dan membimbing
              anak-anak berusia 0 sampai 12 tahun. Unit ini merupakan bagian integral dari misi GPIB yang berkomitmen
              untuk memberikan dukungan dan pendidikan rohani bagi jemaat anak.
            </p>
          </div>
          <div>
            <p>Pelkat PA dibagi menjadi 3 kategori berdasarkan usia:</p>
            <p>1. Kelas TK 0-5 tahun/Playgroup-TK(TK)</p>
            <p>2. Kelas Kecil 1-3 SD (AK)</p>
            <p>3. Kelas Tanggung 4-6 SD (AT)</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Arti Logo Pelkat Persekutuan Anak</h2>
            <div className="flex md:flex-row flex-col md:justify-normal justify-center md:gap-12 gap-8">
              <Image src={PelkatPALogo} alt="pelkatPA" className="min-w-[150px] md:m-0 m-0-auto" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                  <p className="font-bold">Warna Hijau Muda</p>
                  <p>Hijau muda yang menggambarkan muda belia tumbuh berkembang.</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Salib</p>
                  <p>Dasar ajaran Kristus sebagai tonggak utama Pelkat Pelayanan Anak GPIB</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Gambar Anak Perempuan dan Laki-Laki</p>
                  <p>
                    Seorang Anak Perempuan dan Laki-Laki berdampingan mengikuti kegiatan dalam wadah PelkatPelayanan
                    Anak GPIB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image src={PelkatPAVideo} alt="pelkatPA" quality={100} className="w-full rounded-md max-h-[600px]" />
          <p className="text-center italic">
            ~Kegiatan Persekutuan Anak GPIB Immanuel Bung Karno Selama Bulan Maret 2024~
          </p>
          <InstagramKategorial path="https://www.instagram.com/pa_immanuelbungkarno/" title="@pa_immanuelbungkarno" />
        </div>
      </div>
    </section>
  )
}
