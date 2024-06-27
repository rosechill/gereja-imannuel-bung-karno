'use client'
import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import Hamburger from '@/public/icons/hamburger'
import { dataMenu } from '@/app/lib/dataMenu'
import Close from '@/public/icons/close'
import SideBarMenu from './sideBarMenu'

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleSubMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex justify-center items-center gap-4 desktop:hidden ">
      <button className="bg-black flex justify-center items-center z-40 rounded-full p-3" onClick={toggleMenu}>
        {isOpen ? <Close color='white' /> : <Hamburger color='white' />}
      </button>
      {isOpen && (
        <div className="bg-whitePrimary min-h-screen absolute left-0 -top-4 w-full pt-20  overflow-important">
          <div className="flex flex-col">
            {dataMenu.map((item, index) => (
              <SideBarMenu
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                toggleSubMenu={toggleSubMenu}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuMobile
