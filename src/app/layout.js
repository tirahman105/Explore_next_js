import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnonnoTa',
  description: 'Spread your business with AnonnoTa',
}

const RootLayout = ({ children }) =>  {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <nav>
      <a href="#">Home</a>
    </nav>
      {children}
      
      <footer>Footer</footer>
      </body>
    </html>
  )
}

export default  RootLayout