import { dataMenu } from '@/app/lib/dataMenu'
import React from 'react'
import ListMenu from './listMenu'
import { Button, Navbar } from '@nextui-org/react'
import { LogoWithName } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import MenuMobile from './menuMobile'

export default function Menu() {
  return (
    <Navbar maxWidth="full" className="fixed top-0 flex justify-between desktop:px-4 px-0 py-4 bg-whiteSecondary shadow-sm">
      <Link href={'/'}>
        <Image src={LogoWithName} alt="Logo GPIB" width={300} height={300} className="" />
      </Link>
      <div className="flex gap-4 max-desktop:hidden">
        {dataMenu.map((item, index) => (
          <ListMenu key={index} item={item} index={index} />
        ))}
      </div>
      <MenuMobile/>
    </Navbar>
  )
}
