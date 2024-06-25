import Hamburger from '@/public/icons/hamburger'
import { Button } from '@nextui-org/react'
import React from 'react'

export default function MenuMobile() {
  return (
    <div className="flex gap-4 desktop:hidden">
      <Button className="bg-whiteSecondary p-0">
        <Hamburger />
      </Button>
    </div>
  )
}
