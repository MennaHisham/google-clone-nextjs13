import SearchHeader from '@/components/SearchHeader'
import { Inter } from 'next/font/google'
//import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link  rel="icon" href="/icon.svg" sizes="<generated>" type="image/<generated>"/>
      </head>
      
      <body className={inter.className}>
        {children}
        <SearchHeader/>
        {/* <Footer/> */}
      </body>
    </html>
  )
}