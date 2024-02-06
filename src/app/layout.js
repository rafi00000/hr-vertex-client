import { Inter } from 'next/font/google'
import './globals.css'
import AuthContext from '@/provider/AuthContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hr-vortex',
  description: 'hr management system',
  icons: {
    icon: '/hr-icon-8.jpg', // /public path
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className='min-h-screen'>
          <AuthContext>
            {children}
          </AuthContext>
        </div>
      </body>
    </html>
  )
}
