import { Hero } from './ui/landing/hero'
import JadwalIbadah from './ui/landing/jadwalIbadah'
import Pelayanan from './ui/landing/pelayanan'
import Persembahan from './ui/landing/persembahan'
import Sejarah from './ui/landing/sejarah'
import TemaTahunan from './ui/landing/temaTahunan'
import Unduhan from './ui/landing/unduhan'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TemaTahunan />
      <Sejarah />
      <JadwalIbadah />
      <Pelayanan />
      <Unduhan />
      <Persembahan />
    </main>
  )
}
