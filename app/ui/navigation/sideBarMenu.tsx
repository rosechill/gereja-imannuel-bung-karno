'use client'
import { useState } from 'react'
import { ChevronDown } from '@/public/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DataMenu } from '@/app/lib/definition'
import { cn } from '@/app/lib/cn'

export default function SideBarMenu({
  item,
  index,
}: Readonly<{
  item: DataMenu
  index: number
}>) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSubMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ul className="font-bold border-b border-gray-400 menu-list">
      <li key={index} className="menu-item will-change-transform">
        {item.link ? (
          <Link
            href={item.link}
            className={cn(' ps-4 h-12 flex items-center w-full', {
              'text-white bg-greenPrimary': pathname === item.link,
              'hover:text-white hover:bg-greenPrimary': pathname !== item.link,
            })}
          >
            <p
              className={cn('h-12 flex items-center w-full', {
                'bg-greenPrimary': pathname === item.link,
              })}
            >
              {item.title}
            </p>
          </Link>
        ) : (
          <div className=" ps-4 flex gap-2 items-center cursor-pointer justify-between" onClick={toggleSubMenu}>
            <span className="h-12 flex items-center">{item.title}</span>
            <ChevronDown />
          </div>
        )}
        <div
          className={`transition-max-height duration-1000 ease-in-out overflow-hidden ms-12  ${
            isOpen ? 'max-h-96 ' : 'max-h-0 '
          }`}
        >
          {isOpen && item.submenu && (
            <ul className="flex flex-col   ">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="hover:text-white hover:bg-greenPrimary">
                  {subItem.link ? (
                    <Link
                      href={subItem.link}
                      className={cn('h-12 flex items-center w-full', {
                        'text-white bg-greenPrimary': pathname === subItem.link,
                        'hover:text-white hover:bg-greenPrimary': pathname !== subItem.link,
                      })}
                    >
                      <p
                        className={cn('h-12 flex items-center w-full ps-4', {
                          'bg-greenPrimary': pathname === subItem.link,
                        })}
                      >
                        {subItem.title}
                      </p>
                    </Link>
                  ) : (
                    <span>{subItem.title}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    </ul>
  )
}
