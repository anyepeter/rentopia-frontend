
import { useDispatch } from 'react-redux'
import Navbar from './components/navBar/navbar'
import HomePage from './pages/homePage'
import HouseDetailPage from './pages/houseDetail'
import { useLocation, Routes, Route } from "react-router-dom"
import { useEffect } from 'react'
import { fetchHouses } from './Redux/houses/houseSlice'
import AddousePage from './pages/addousePage'

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
      dispatch(fetchHouses())
  }, [dispatch])
  return (
    <>
      {location.pathname !== '/add_house' && <Navbar />}
     <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path="houses/:id" element={ <HouseDetailPage /> } />
      <Route path="*" element={<p>Path not resolved</p>} />
      <Route path="add_house/" element={ <AddousePage />} />
     </Routes>
    </>
  )
}

export default App
