import { arsenal, rightous } from '@/app/ui/font'
import { dataPelayanan } from '@/app/lib/dataPelayanan'
import BorderSection from '@/app/ui/borderSection'
import CardPelayanan from '@/app/ui/cardPelayanan'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function pelayananKategorial() {
  return (
    <section className="desktop:py-desktop py-8 flex flex-col justify-center gap-8 mt-20">
      <div className={rightous.className}>
        <h1 className="desktop:text-3xl text-2xl text-center">PELAYANAN KATEGORIAL</h1>
      </div>
      <div className={arsenal.className}>
        <div className="w-3/4 m-0-auto">
          <p className="text-justify">
            Pelayanan Kategorial (Pelkat) dalam Gereja GPIB merupakan bagian penting dari Unit Misioner yang bertujuan
            memperkuat peran keluarga dalam kehidupan jemaat. Pelkat berfungsi sebagai sarana pembinaan warga Gereja
            dari berbagai kategori usia dan peran, dimulai dari anak-anak hingga lanjut usia. Dengan pendekatan yang
            berorientasi pada keluarga, Pelkat membantu anggota Gereja menghayati dan melaksanakan misi transformatif di
            tengah masyarakat. Dalam Tata Gereja 2010, perubahan dari Bidang Pelayanan Kategorial (BPK) menjadi Pelkat
            mencerminkan fokus baru pada pengembangan kapasitas misioner keluarga, menjadikannya ujung tombak dalam
            menghadirkan tanda-tanda Kerajaan Allah. Pelkat berperan tidak hanya dalam penguatan spiritual dan sosial,
            tetapi juga dalam pemberdayaan ekonomi dan pendidikan, sejalan dengan visi dan misi Gereja untuk menciptakan
            keluarga yang kuat dan sejahtera.
          </p>
        </div>
      </div>
      <BorderSection />
      <div className="grid grid-cols-3 w-3/4 justify-center items-center gap-8 m-0-auto will-change-transform ">
        {dataPelayanan.map((item, index) => (
          <Link
            href={item.link}
            className="group flex flex-col gap-4 py-4 h-full rounded-md hover:scale-105 transition-all"
          >
            <Image src={item.imgPath} height={150} alt={item.title} className="m-0-auto" />
            <p className="text-black text-center font-bold">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
