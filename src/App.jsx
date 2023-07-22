
import { useDispatch } from 'react-redux'
import Navbar from './components/navBar/navbar'
import HomePage from './pages/homePage'
import HouseDetailPage from './pages/houseDetail'
import { Routes, Route } from "react-router-dom"
import { useEffect } from 'react'
import { fetchHouses } from './Redux/houses/houseSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchHouses())
  }, [dispatch])
  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path="houses/:id" element={ <HouseDetailPage /> } />
      <Route path="*" element={<p>Path not resolved</p>} />
     </Routes>
    </>
  )
}

export default App
