import React, { useEffect } from 'react';
import { HorizonLine, HorizonLineTwo, HouseContainer, HouseIntro, HouseSection } from '../../Styles/houseListing/houseContainer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Styles/Global.styled';
import Houses from './Houses';
import { useDispatch, useSelector } from 'react-redux';
import houseSlice, { fetchHouses } from '../../Redux/houses/houseSlice';

const HousesListing = () => {
    const houses = useSelector((state) => state.houses.houses)
    const dispatch = useDispatch()
    console.log(houses)
    useEffect(() => {
        dispatch(fetchHouses())
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <HouseContainer>
                <HouseSection>
                    <h1>Recent Houses</h1>
                    <HorizonLine />
                    <HorizonLineTwo />

                    <HouseIntro>All of the recent properties of this month are included</HouseIntro>
                    
                    <Houses houses={ houses } />

                </HouseSection>
            </HouseContainer>
        </ThemeProvider>
    );
}

export default HousesListing;
