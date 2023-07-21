import SearchForm from "../components/filterForm/searchForm"
import GooglesMap from "../components/googleMap/googleMap"
import HousesListing from "../components/houses/housesListing"
import Navbar from "../components/navBar/navbar"

const HomePage = () => {
    return(
        <>
       
        <GooglesMap />
        <SearchForm />
        <HousesListing />
        </>
    )
}

export default HomePage;