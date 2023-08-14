import SearchHeader from '@/components/SearchHeader'
import './../globals.css'
//import Footer from '../components/Footer'


export default function SearchLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SearchHeader/>
        {/* <Footer/> */}
      </body>
    </html>
  )
}