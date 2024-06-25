import BorderBigSection from '@/app/ui/borderBigSection'
import { arsenal } from '@/app/ui/font'
import InstagramKategorial from '@/app/ui/instagramKategorial'
import { PelkatPAVideo, PelkatPTLogo, PelkatPTbg } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function PelkatPT() {
  return (
    <section className="flex flex-col justify-center gap-8 my-20 ">
      <Image src={PelkatPTbg} alt="pelkatPA" className="w-full" quality={100} />
      <div className={arsenal.className}>
        <div className="flex flex-col gap-8 w-3/4 m-0-auto">
          <h1 className="desktop:text-3xl text-2xl text-center font-bold">
            Tentang PELKAT Persekutuan Teruna (PT) GPIB Immanuel Bung Karno
          </h1>
          <BorderBigSection />
          <p>
            Pelayanan Kategorial Persekutuan Teruna (Pelkat PT) merupakan bagian dari unit misioner GPIB yang bertugas
            membina dan melayani jemaat berusia 13 hingga 17 tahun. Pelkat PT bertujuan untuk mengembangkan kreativitas
            para remaja dengan landasan ajaran gereja, sehingga mereka menjadi pribadi yang “Kreatif, Dinamis, dan
            Menjadi Berkat.”
          </p>
          <p>
            Di era modern ini, remaja, yang berusia 12 hingga 17 tahun, menghadapi berbagai tantangan yang dapat
            menghalangi mereka dari mengenal Kristus. Namun, masa ini sebenarnya merupakan waktu yang tepat bagi mereka
            untuk memperdalam hubungan dengan Tuhan. Menjawab kebutuhan ini, Persekutuan Teruna GPIB Immanuel Bung Karno
            berkomitmen untuk membantu remaja lebih memahami Firman Tuhan, menjadi saksi iman di dunia, dan menyebarkan
            damai sejahtera kepada semua ciptaan. Melalui Pelkat PT GPIB Immanuel Bung Karno, diharapkan adik-adik
            teruna dapat memahami keberadaan mereka di dunia sebagai perwujudan kasih Kristus. Mereka didorong untuk
            menjadi individu yang dengan penuh kasih mau menjadi penolong bagi orang lain, di tengah masa remaja yang
            penuh dinamika kedewasaan, baik dari segi biologis maupun psikologis.
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Arti Logo Pelkat Persekutuan Anak</h2>
            <div className="flex gap-12">
              <Image src={PelkatPTLogo} alt="pelkatPA" className="w-[150px]" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                  <p className="font-bold">Warna Kuning Telur</p>
                  <p>Memiliki arti Teruna terus berkembang.</p>
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
          <p className="text-center italic">~VG Persekutuan Teruna GPIB Immanuel Bung Karno~</p>
          <InstagramKategorial path="https://www.instagram.com/ptimmanuelbungkarno/" title="@ptimmanuelbungkarno" />
        </div>
      </div>
    </section>
  )
}
