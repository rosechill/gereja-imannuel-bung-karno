import BorderBigSection from '@/app/ui/borderBigSection'
import { arsenal } from '@/app/ui/font'
import InstagramKategorial from '@/app/ui/instagramKategorial'
import { PelkatGPLogo, PelkatGPbg, PelkatPAVideo, PelkatPKBbg } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function PelkatGP() {
  return (
    <section className="flex flex-col justify-center gap-8 my-20 ">
      <Image src={PelkatGPbg} alt="pelkatPA" className="w-full" quality={100} />
      <div className={arsenal.className}>
        <div className="flex flex-col gap-8 w-3/4 m-0-auto">
          <h1 className="desktop:text-3xl text-2xl text-center font-bold">
          Tentang PELKAT Gerakan Pemuda (GP) GPIB Immanuel Bung Karno
          </h1>
          <BorderBigSection />
          <p>Pelkat GP merupakan bagian dari Unit Misioner GPIB yang berfokus pada pembinaan dan pelayanan jemaat berusia 17 hingga 35 tahun. Pelayanan ini bertujuan untuk mendukung pertumbuhan spiritual dan karakter pemuda dalam komunitas GPIB melalui berbagai aktivitas yang mencerminkan nilai-nilai Kristen.</p>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Arti Logo Pelkat Persekutuan Anak</h2>
            <div className="flex items-center gap-12">
              <Image src={PelkatGPLogo} alt="pelkatPA" className='w-[200px] h-[200px]' />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                  <p className="font-bold">Segitiga</p>
                  <p>Logo Pelkat GP memiliki simbol segitiga yang melambangkan Tri Darma Gereja, yaitu tiga panggilan utama dan pengutusan gereja: Persekutuan (Koinonia), Pelayanan (Diakonia), dan Kesaksian (Marturia). Arah segitiga ke bawah menunjukkan bahwa setiap panggilan tersebut harus dijalankan dengan kerendahan hati, di bawah kuasa Tuhan.</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Garis Segitiga Putih</p>
                  <p>Garis putih pada segitiga menandakan kekudusan dan kesucian yang harus menjadi ciri khas kehidupan pemuda GP. Ini menggambarkan batasan spiritual yang menjaga pemuda agar selalu berada dalam kehendak Allah.
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Warna Biru</p>
                  <p>Warna biru diambil dari warna api yang temperaturnya paling tinggi, lebih panas dari api merah atau kuning. Ini mencerminkan semangat yang harus dimiliki oleh pemuda GP semangat yang lebih besar dan intens dibandingkan dengan yang lain. Warna biru juga menunjukkan konsistensi dan kesetiaan yang diperlukan untuk menjaga semangat tetap menyala.</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Alkitab Terbuka</p>
                  <p>Simbol Alkitab terbuka melambangkan bahwa firman Tuhan menjadi pedoman utama bagi Pelkat GP dalam menjalankan tugas dan pengutusan mereka. Firman Tuhan memperkaya pemahaman pemuda tentang kuasa dan kasih Tuhan, sebagaimana ditegaskan dalam ayat I Korintus 3:11: "Karena tidak ada seorangpun yang dapat meletakkan dasar lain dari pada dasar yang telah diletakkan, yaitu Yesus Kristus." Ayat ini menekankan pentingnya dasar yang kokoh dalam kehidupan rohani, yang hanya bisa ditemukan dalam Yesus Kristus, Kepala Gereja dan Pemuda Agung.</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Salib</p>
                  <p>Salib dalam logo Pelkat GP melambangkan keselamatan yang dianugerahkan oleh Tuhan melalui pengorbanan Yesus Kristus, Sang Pemuda Agung. Pelkat GP bergerak berdasarkan rasa syukur atas keselamatan ini, dan menyatakannya melalui tindakan nyata yang memuliakan Bapa di Surga.</p>
                </div>
              </div>
            </div>
          </div>
          <Image src={PelkatPAVideo} alt="pelkatPA" quality={100} className="w-full rounded-md max-h-[600px]" />
          <p className="text-center italic">~VG Persekutuan Teruna GPIB Immanuel Bung Karno~</p>
          <InstagramKategorial path="https://www.instagram.com/ptimmanuelbungkarno/" title="@gp_immanuelbungkarno" />
        </div>
      </div>
    </section>
  )
}
