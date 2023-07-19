import React from 'react';
import { HousesListingSection } from '../../Styles/houseListing/houseContainer';
import { HouseStyle,
    ImageContainer, 
    StarReview,
    HouseLocation, 
    BsGeoAlt,
    HouseFeature,
    BsPerson, HouseOwner, Calender} from '../../Styles/houseListing/houses';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Styles/Global.styled';


const Houses = () => {
    return <ThemeProvider theme={theme}>
    <HousesListingSection>

   <HouseStyle>
    <ImageContainer>
        <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
        <h3>Appartment</h3>
        <p>$20000</p>
        <StarReview />
    </ImageContainer>

    <HouseLocation>
        <h2>Nirala Appartment</h2>

        <div>
            <BsGeoAlt />
            <p>Yaounde, Simbock</p>
        </div>
    </HouseLocation>

        <HouseFeature>
            <li>
                <span>2</span>
                <p>Bedrooms</p>
            </li>

            <li>
                <span>3</span>
                <p>Bathrooms</p>
            </li>

            <li>
                <span>2</span>
                <p>Garage</p>
            </li>

            <li>
                <span></span>
                <a>+More</a>
            </li>
        </HouseFeature>

    <HouseOwner>
        <li>
            <BsPerson />
            <p>Peter CHendi</p>
        </li>

        <li>
            <Calender />
            <p>6 Months Ago</p>
        </li>
    </HouseOwner>
  </HouseStyle>

  <HouseStyle>
    <ImageContainer>
        <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
        <h3>Appartment</h3>
        <p>$20000</p>
        <StarReview />
    </ImageContainer>

    <HouseLocation>
        <h2>Nirala Appartment</h2>

        <div>
            <BsGeoAlt />
            <p>Yaounde, Simbock</p>
        </div>
    </HouseLocation>

        <HouseFeature>
            <li>
                <span>2</span>
                <p>Bedrooms</p>
            </li>

            <li>
                <span>3</span>
                <p>Bathrooms</p>
            </li>

            <li>
                <span>2</span>
                <p>Garage</p>
            </li>

            <li>
                <span></span>
                <a>+More</a>
            </li>
        </HouseFeature>

    <HouseOwner>
        <li>
            <BsPerson />
            <p>Peter CHendi</p>
        </li>

        <li>
            <Calender />
            <p>6 Months Ago</p>
        </li>
    </HouseOwner>
  </HouseStyle>

  <HouseStyle>
    <ImageContainer>
        <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
        <h3>Appartment</h3>
        <p>$20000</p>
        <StarReview />
    </ImageContainer>

    <HouseLocation>
        <h2>Nirala Appartment</h2>

        <div>
            <BsGeoAlt />
            <p>Yaounde, Simbock</p>
        </div>
    </HouseLocation>

        <HouseFeature>
            <li>
                <span>2</span>
                <p>Bedrooms</p>
            </li>

            <li>
                <span>3</span>
                <p>Bathrooms</p>
            </li>

            <li>
                <span>2</span>
                <p>Garage</p>
            </li>

            <li>
                <span></span>
                <a>+More</a>
            </li>
        </HouseFeature>

    <HouseOwner>
        <li>
            <BsPerson />
            <p>Peter CHendi</p>
        </li>

        <li>
            <Calender />
            <p>6 Months Ago</p>
        </li>
    </HouseOwner>
  </HouseStyle>

  <HouseStyle>
    <ImageContainer>
        <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
        <h3>Appartment</h3>
        <p>$20000</p>
        <StarReview />
    </ImageContainer>

    <HouseLocation>
        <h2>Nirala Appartment</h2>

        <div>
            <BsGeoAlt />
            <p>Yaounde, Simbock</p>
        </div>
    </HouseLocation>

        <HouseFeature>
            <li>
                <span>2</span>
                <p>Bedrooms</p>
            </li>

            <li>
                <span>3</span>
                <p>Bathrooms</p>
            </li>

            <li>
                <span>2</span>
                <p>Garage</p>
            </li>

            <li>
                <span></span>
                <a>+More</a>
            </li>
        </HouseFeature>

    <HouseOwner>
        <li>
            <BsPerson />
            <p>Peter CHendi</p>
        </li>

        <li>
            <Calender />
            <p>6 Months Ago</p>
        </li>
    </HouseOwner>
  </HouseStyle>
</HousesListingSection>
</ThemeProvider>;
}
export default Houses;