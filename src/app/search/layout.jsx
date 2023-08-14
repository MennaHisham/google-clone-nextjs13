import SearchHeader from '@/components/SearchHeader'
import './../globals.css'
//import Footer from '../components/Footer'


export default function SearchLayout({ children }) {
  return (
      <div>
        {children}
        <SearchHeader/>
        {/* <Footer/> */}
      </div>
  )
}