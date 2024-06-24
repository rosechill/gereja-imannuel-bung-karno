import { StaticImageData } from "next/image"

export type DataMenu = {
  title: string
  link?: string
  submenu?: DataMenu[]
}
export type DataPelayanan = {
  title: string
  imgPath: StaticImageData
  link: string
}
