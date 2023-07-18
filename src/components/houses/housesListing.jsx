import React from 'react';
import { HorizonLine, HorizonLineTwo, HouseContainer } from '../../Styles/houseListing/houseContainer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Styles/Global.styled';


const HousesListing = () => {
    return <ThemeProvider theme={theme} >
    <HouseContainer>
        <div>
            <h1>Recent Houses</h1>
            <HorizonLine />
            <HorizonLineTwo />

            <div>
                <h1>houses</h1>
            </div>
        </div>
    </HouseContainer>
    </ThemeProvider>
    
}

export default HousesListing;