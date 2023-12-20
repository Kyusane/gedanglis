import { Inter } from 'next/font/google'
import './globals.css'

import { AuthContextProvider } from '../context/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gedanglis',
  description: "produk inovasi dari tim Hibah-MBKM Baskara. Gerobak ini mendukung perekonomian yang ada di Indonesia dengan konsep gerobak yang dapat berkeliling.Gedanglis ini dilengkapi dengan motor listrik sehingga memudahkan pedagang untuk berpindah tempat. Selain itu Gedanglis dilengkapi dengan sistem tracking sehingga pembeli dapat mengetahui lokasi Gedanglis.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
