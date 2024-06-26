import BorderBigSection from '@/app/ui/borderBigSection'
import { arsenal } from '@/app/ui/font'
import { PelkatPKPLogo, PelkatPKPbg } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function PelkatPKP() {
  return (
    <section className="flex flex-col justify-center gap-8 my-20 ">
      <Image src={PelkatPKPbg} alt="pelkatPA" className="w-full min-h-[300px] object-cover" quality={100} />
      <div className={arsenal.className}>
        <div className="flex flex-col gap-8 lg:w-3/4 w-full lg:px-0 px-4 m-0-auto">
          <h1 className="desktop:text-3xl text-2xl text-center font-bold">
            Tentang PELKAT Persekutuan Kaum Perempuan (PKP) GPIB Immanuel Bung Karno
          </h1>
          <BorderBigSection />
          <div>
            <p>
              Pelayanan Kategorial Persekutuan Kaum Perempuan (Pelkat PKP) merupakan bagian integral dari unit misioner
              GPIB, yang berfokus pada pembinaan dan pelayanan kepada jemaat berusia 36 hingga 59 tahun, serta mereka
              yang sudah menikah namun belum mencapai usia tersebut. Pelkat PKP dirancang untuk mendukung pertumbuhan
              spiritual, sosial, dan komunitas bagi kaum perempuan di dalam jemaat GPIB.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Arti Logo Pelkat Persekutuan Anak</h2>
            <div className="flex md:flex-row flex-col md:justify-normal justify-center md:gap-12 gap-8">
              <Image src={PelkatPKPLogo} alt="pelkatPA" className="min-w-[150px] md:m-0 m-0-auto" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                  <p className="font-bold">Visi</p>
                  <p>GPIB menjadi gereja yang mewujudkan damai sejahtera bagi seluruh ciptaanNya</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Misi</p>
                  <p>
                    Menjadi gereja yang terus menerus diperbarui dengan bertolak dari firman Allah terwujud melalui
                    perilaku kehidupan warga gereja baik di dalam lingkup persekutuan maupun hidup bermasyarakat.
                    Menjadi gereja yang hadir sebagai contoh kehidupan - mewujudkan melalui inisiatif dan partisipasi
                    dalam kesetiakawanan sosial serta kerukunan masyarakat - berbasis perilaku kehidupan keluarga yang
                    kuat dan sejahtera. Menjadi gereja yang membangun keutuhan ciptaan-terwujud melalui perhatian
                    terhadap lingkungan hidup, semangat keesaan, semangat persatuan dan kesatuan warga gereja sebagai
                    warga masyarakat.
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
