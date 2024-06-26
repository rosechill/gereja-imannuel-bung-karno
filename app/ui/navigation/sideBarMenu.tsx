'use client'
import { ChevronDown } from '@/public/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DataMenu } from '@/app/lib/definition'
import { cn } from '@/app/lib/cn'
import { useState, useEffect, useRef } from 'react'

export default function SideBarMenu({
  item,
  index,
  isOpen,
  toggleSubMenu,
}: Readonly<{
  item: DataMenu
  index: number
  isOpen: boolean
  toggleSubMenu: (index: number) => void
}>) {
  const pathname = usePathname()
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState<string | number>('0')

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(contentRef.current?.scrollHeight || '0')
    } else {
      setMaxHeight('0')
    }
  }, [isOpen])

  return (
    <ul className="font-bold border-b border-gray-400 menu-list">
      <li key={index} className="menu-item will-change-transform">
        {item.link ? (
          <Link
            href={item.link}
            className={cn('ps-4 h-12 flex items-center w-full', {
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
          <div
            className="px-4 flex gap-2 items-center cursor-pointer justify-between"
            onClick={() => toggleSubMenu(index)}
          >
            <span className="h-12 flex items-center">{item.title}</span>
            <ChevronDown />
          </div>
        )}
        <div
          ref={contentRef}
          className="transition-all duration-500 ease-in-out overflow-hidden ms-12"
          style={{ maxHeight }}
        >
          {item.submenu && (
            <ul className="flex flex-col">
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
