'use client'
import { DataMenu } from '@/app/lib/definition'
import { ChevronDown } from '@/public/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ListMenu({
  item,
  index,
}: Readonly<{
  item: DataMenu
  index: number
}>) {
  const pathname = usePathname()
  return (
    <ul className="menu-list font-bold">
      {/* navbar desktop */}
      <li key={index} className="menu-item">
        {item.link ? (
          <Link href={item.link} className={pathname === item.link ? 'text-greenPrimary' : ''}>
            <p>{item.title}</p>
          </Link>
        ) : (
          <div className="flex gap-2 items-center">
            <span>{item.title}</span>
            <ChevronDown />
          </div>
        )}
        {item.submenu && (
          <ul className="submenu">
            {item.submenu.map((subItem, subIndex) => (
              <li key={subIndex} className="submenu-item hover:text-greenPrimary">
                {subItem.link ? (
                  <Link href={subItem.link} className={pathname === subItem.link ? 'text-greenPrimary' : ''}>
                    <p>{subItem.title}</p>
                  </Link>
                ) : (
                  <span>{subItem.title}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  )
}
