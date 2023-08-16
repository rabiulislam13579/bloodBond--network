import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BloodBond--Network',
  description: 'Spider Alpha',
}

 const RootLayout=({ children })=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          navbar
        </nav>
        {children}
        <footer>
          footer
        </footer>
        </body>
    </html>
  )
}
export default RootLayout;
