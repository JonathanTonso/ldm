import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './componentes/Nav/Nav'
import Footer from './componentes/Footer/Footer'
import Cabecera from './componentes/cabecera/Cabecera'
import Productos from './productos/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LDM Bazar',
  description: 'El mejor bazar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">

      <body className={inter.className}>

        <div className='contenedor-componentes'>
          <Cabecera />
          <Nav />
          {children}
                   
          <Footer />
        </div>
      </body>

    </html>
  )
}
