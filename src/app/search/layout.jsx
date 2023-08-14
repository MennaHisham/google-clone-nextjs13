import SearchHeader from '@/components/SearchHeader'
import './../globals.css'
//import Footer from '../components/Footer'


export default function SearchLayout({ children }) {
  return (
      <div>
        <SearchHeader/>
        {children}
        {/* <Footer/> */}
      </div>
  )
}