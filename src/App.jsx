import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Bid from './components/Bid'
import BidList from './components/BidList'
import Pod from './components/Pod'
import Vendor from './components/Vendor'
import User from './components/User'
import NotFound from './components/Notfound'

const App = () => {
  const [product, setProducts] = useState([])
  useEffect(() => {
    const url =
      'https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/9a6eca01-d2e5-4b65-bfc8-cde17f4acc3c_bidsData.json'
    const getProducts = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<BidList product={product} />} />
            <Route path="/bid" element={<BidList product={product}/>} />
            <Route path="/pod" element={<Pod />} />
            <Route path="/user" element={<User />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
