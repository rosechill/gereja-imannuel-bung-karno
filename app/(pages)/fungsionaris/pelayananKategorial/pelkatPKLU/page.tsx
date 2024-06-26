import BorderBigSection from '@/app/ui/borderBigSection'
import { arsenal } from '@/app/ui/font'
import { PelkatPKLULogo, PelkatPKLUbg } from '@/public/images'
import Image from 'next/image'
import React from 'react'

export default function PelkatPKLU() {
  return (
    <section className="flex flex-col justify-center gap-8 my-20 ">
      <Image src={PelkatPKLUbg} alt="pelkatPA" className="w-full min-h-[300px] object-cover" quality={100} />
      <div className={arsenal.className}>
        <div className="flex flex-col gap-8 lg:w-3/4 w-full lg:px-0 px-4 m-0-auto">
          <h1 className="desktop:text-3xl text-2xl text-center font-bold">
            Tentang PELKAT Persekutuan Kaum Lanjut Usia (PKLU) GPIB Immanuel Bung Karno
          </h1>
          <BorderBigSection />
          <div>
            <p>
              Pelayanan Kategorial Persekutuan Kaum Lanjut Usia (Pelkat PKLU) adalah bagian dari unit misioner GPIB yang
              berfokus pada pembinaan dan pelayanan jemaat berusia 60 tahun ke atas. Melalui koordinasi dengan Dewan
              Persekutuan Kaum Lanjut Usia dan seluruh pengurus PKLU se-Indonesia, Pelkat PKLU berkomitmen untuk
              mendukung kaum lansia dalam berbagai aspek kehidupan mereka. Pelayanan ini bertujuan untuk memperkuat
              peran dan keterlibatan lansia dalam gereja dan masyarakat, serta memfasilitasi mereka dalam menjalani masa
              tua yang bermakna, penuh kasih, dan berkontribusi positif bagi komunitas.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Arti Logo Pelkat Persekutuan Anak</h2>
            <div className="flex md:flex-row flex-col md:justify-normal justify-center md:gap-12 gap-8">
              <Image src={PelkatPKLULogo} alt="pelkatPA" className="min-w-[150px] md:m-0 m-0-auto" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                  <p className="font-bold">Visi</p>
                  <p>Mewujudkan damai sejahtera dalam persekutuan dan keluarga.</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Misi</p>
                  <p>
                    Mewujudkan kehadiran PKLU yang membawa kasih, sukacita dan menjadi berkat bagi sesama. Menghadirkan
                    persekutuan kaum lansia yang misioner, dewasa dalam iman, menjadi teladan, serta memberi kontribusi
                    nyata bagi kemajuan gereja dan jemaat.
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
