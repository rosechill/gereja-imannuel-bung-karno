import ContainerProvider from './containerProvider'
import Footer from './footer'
import Menu from './navigation/menu'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <ContainerProvider>
      <section className="min-h-screen w-full flex relative">
        <Menu />
        <div className="flex flex-col w-full">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </section>
    </ContainerProvider>
  )
}
