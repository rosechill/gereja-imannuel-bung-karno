'use client'
import { dataMenu } from '@/app/lib/dataMenu'
import React, { useEffect, useState } from 'react'
import ListMenu from './listMenu'
import { Navbar } from '@nextui-org/react'
import { LogoWithName } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import MenuMobile from './menuMobile'

export default function Menu() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar
      maxWidth="full"
      className={`fixed top-0 flex justify-between desktop:px-4 px-0 py-4 bg-whiteSecondary shadow-sm transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link href={'/'}>
        <Image src={LogoWithName} alt="Logo GPIB" width={300} height={300} className="" />
      </Link>
      <div className="flex gap-4 max-desktop:hidden">
        {dataMenu.map((item, index) => (
          <ListMenu key={index} item={item} index={index} />
        ))}
      </div>
      <MenuMobile />
    </Navbar>
  )
}
