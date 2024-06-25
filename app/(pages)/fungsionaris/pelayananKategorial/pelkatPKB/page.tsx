import BorderBigSection from '@/app/ui/borderBigSection'
import BorderSection from '@/app/ui/borderSection'
import { arsenal } from '@/app/ui/font'
import InstagramKategorial from '@/app/ui/instagramKategorial'
import { PelkatPAVideo, PelkatPKBLogo, PelkatPKBbg, PelkatPTLogo, PelkatPTbg } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function PelkatPKB() {
  return (
    <section className="flex flex-col justify-center gap-8 my-20 ">
      <Image src={PelkatPKBbg} alt="pelkatPA" className="w-full" quality={100} />
      <div className={arsenal.className}>
        <div className="flex flex-col gap-8 w-3/4 m-0-auto">
          <h1 className="text-3xl text-center font-bold">
            Tentang PELKAT Persekutuan Teruna (PT) GPIB Immanuel Bung Karno
          </h1>
          <BorderBigSection />
          <p>
            Pelayanan Kategorial Persekutuan Kaum Bapak (Pelkat PKB) adalah bagian dari unit misioner GPIB yang bertugas
            membina dan melayani jemaat berusia 35 hingga 59 tahun, atau mereka yang sudah menikah sebelum usia 35
            tahun. Kaum Bapak memegang peran penting dalam gereja sebagai kepala keluarga yang bertanggung jawab atas
            pengaturan urusan rumah tangga serta terlibat aktif dalam organisasi gerejawi. Pelkat PKB diakui dalam
            Persidangan Sinode Istimewa GPIB pertama pada tahun 1972 di Jakarta, dan sejak tahun 1974, Kaum Bapak
            dimasukkan ke dalam Badan Pelayanan Khusus, yang kemudian menjadi Bidang Pelayanan Kategorial. Sejak itu,
            fokus utama Pelkat PKB adalah pembinaan keluarga Kristen. Kaum Bapak GPIB terlibat dalam kegiatan yang
            memperkuat peran mereka dalam keluarga dan masyarakat, dan mereka diharapkan dapat menjawab tantangan serta
            menjalankan panggilan gereja. BPK-PKB resmi dibentuk pada 11 Juli 1981 untuk mendukung peran kaum pria di
            dalam dan luar keluarga. Sejak 2010, kegiatan Pelkat PKB menjadi bagian dari Bidang Pelayanan Kategorial dan
            pada tahun 2011/2012 bergabung dalam Bidang IV (Pelkat dan Pembinaan Pengembangan Sumber Daya Insani-PPSDI),
            yang mencakup rutinitas ibadah PKB di sektor pelayanan dan rumah tangga.
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Arti Logo Pelkat Persekutuan Anak</h2>
            <div className="flex items-center gap-12">
              <Image src={PelkatPKBLogo} alt="pelkatPA" className="w-[200px] h-[200px]" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                  <p className="font-bold">Alkitab Terbuka</p>
                  <p>
                    Landasan Persekutuan Kaum Bapak GPIB dalam berkiprah adalah Surat Kristus yang Terbuka (Firman
                    Allah).
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Burung Dara</p>
                  <p>Merupakan lambang Roh Kudus yang memimpin Persekutuan Kaum Bapak GPIB.</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Lidah Api</p>
                  <p>Adalah semangat yang tak kunjung padam dan menghangatkan.</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Salib</p>
                  <p>
                    Lambang cinta kasih ALLAH bagi dunia yang hendak disaksikan/diwujudnyatakan oleh Persekutuan Kaum
                    Bapak GPIB.
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Arti Warna Logo PKB</p>
                  <p>Abu – Abu : Melambangkan Tangguh dan Luwes</p>
                  <p>Tangguh berarti Kuat, Ulet, dan Tabah</p>
                  <p>
                    Serta Luwes berarti tidak kaku, fleksibel, mudah beradaptasi dengan lingkungan dimana dia berada
                    atau ditempatkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
