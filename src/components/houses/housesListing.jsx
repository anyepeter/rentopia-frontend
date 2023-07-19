import React from 'react';
import { HorizonLine, HorizonLineTwo, HouseContainer, HouseIntro, HouseSection} from '../../Styles/houseListing/houseContainer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Styles/Global.styled';
import Houses from './Houses';


const HousesListing = () => {
    return <ThemeProvider theme={theme} >
    <HouseContainer>
        <HouseSection>
            <h1>Recent Houses</h1>
            <HorizonLine />
            <HorizonLineTwo />
             
             <HouseIntro>All of the recent properties of this month are included</HouseIntro>
          
                <Houses />

        </HouseSection>
    </HouseContainer>
    </ThemeProvider>
    
}

export default HousesListing;