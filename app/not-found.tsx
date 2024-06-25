import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 ">
      <h2 className="text-xl font-semibold pt-40">404 Not Found</h2>
      <p>Page yang anda cari tidak temukan</p>
      <Link href="/" className="mt-4 rounded-md  px-4 py-2 text-sm text-white transition-colors">
        <Button className="bg-greenPrimary text-white">Kembali ke beranda</Button>
      </Link>
    </main>
  )
}
