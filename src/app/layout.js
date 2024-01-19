import { Inter } from 'next/font/google'
import './globals.css'
import TopHeader from '@/Components/SharedComponents/TopHeader'
import Navber from '@/Components/SharedComponents/Navber'
import Footer from '@/Components/SharedComponents/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hr-vortex',
  description: 'hr management system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='top-0 left-0 absolute z-50 w-full'>
          <TopHeader />
          <Navber />
        </div>
        <div className='min-h-screen'>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
