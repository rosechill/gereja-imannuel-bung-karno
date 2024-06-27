'use client';
import { DataMenu } from '@/app/lib/definition';
import { ChevronDown } from '@/public/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ListMenu({
  item,
  index,
}: Readonly<{
  item: DataMenu;
  index: number;
}>) {
  const pathname = usePathname();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleSubmenuClick = () => {
    setSubmenuOpen(false);
  };

  useEffect(() => {
    setSubmenuOpen(false);
  }, [pathname]);

  return (
    <ul className="menu-list font-bold">
      <li key={index} className="menu-item" onMouseLeave={() => setSubmenuOpen(false)}>
        {item.link ? (
          <Link href={item.link} className={pathname === item.link ? 'text-greenPrimary' : ''}>
            <p>{item.title}</p>
          </Link>
        ) : (
          <div
            className="flex gap-2 items-center cursor-pointer"
            onMouseEnter={() => setSubmenuOpen(true)}
          >
            <span>{item.title}</span>
            <ChevronDown />
          </div>
        )}
        {item.submenu && (
          <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
            {item.submenu.map((subItem, subIndex) => (
              <li key={subIndex} className="submenu-item hover:text-greenPrimary">
                {subItem.link ? (
                  <Link href={subItem.link} className={pathname === subItem.link ? 'text-greenPrimary' : ''} onClick={handleSubmenuClick}>
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
  );
}
