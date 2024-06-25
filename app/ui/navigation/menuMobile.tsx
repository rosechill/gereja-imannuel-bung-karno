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

  return (
    <div className="flex justify-center items-center gap-4 desktop:hidden overflow-visible">
      <Button className="bg-whiteSecondary flex justify-center items-center z-40" onClick={toggleMenu}>
        {isOpen ? <Close /> : <Hamburger />}
      </Button>
      {isOpen && (
        <div className="bg-whitePrimary min-h-screen absolute left-0 -top-4 w-full pt-20 overflow-y-scroll ">
          <div className="flex flex-col">
            {dataMenu.map((item, index) => (
              <SideBarMenu key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuMobile
