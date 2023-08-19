import SearchForm from "../components/filterForm/searchForm"
import GooglesMap from "../components/googleMap/googleMap"
import HousesListing from "../components/houses/housesListing"

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