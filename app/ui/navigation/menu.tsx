import { dataMenu } from '@/app/lib/dataMenu'
import React from 'react'
import ListMenu from './listMenu'
import { Navbar } from '@nextui-org/react'
import { LogoWithName } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
  return (
    <Navbar maxWidth="full" className="fixed top-0 flex justify-between p-4 bg-whiteSecondary shadow-sm">
      <Link href={'/'}>
        <Image src={LogoWithName} alt="Logo GPIB" width={300} height={300} className="" />
      </Link>
      <div className="flex gap-4">
        {dataMenu.map((item, index) => (
          <ListMenu key={index} item={item} index={index} />
        ))}
      </div>
    </Navbar>
  )
}
