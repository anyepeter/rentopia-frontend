import React from 'react';

import { IoMdContact } from 'react-icons/Io'
import { SlCalender } from 'react-icons/Sl'
import { BsPersonFill } from 'react-icons/Bs'
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

    <div>
        <h2>Nirala Appartment</h2>

        <div>
            <BsPersonFill />
            <p>Yaounde, Simbock</p>
        </div>
    </div>

    <div>
        <ul>
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
                <p>+More</p>
            </li>
        </ul>
    </div>

    <div>
        <div>
            <IoMdContact />
            <p>Peter CHendi</p>
        </div>

        <div>
            <SlCalender />
            <p>6 Months Ago</p>
        </div>
    </div>
  </HouseStyle>




  <HouseStyle>
    <ImageContainer>
        <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
        <h3>Appartment</h3>
        <p>$20000</p>
        <StarReview />
    </ImageContainer>

    <div>
        <h2>Nirala Appartment</h2>

        <div>
            <BsPersonFill />
            <p>Yaounde, Simbock</p>
        </div>
    </div>

    <div>
        <ul>
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
                <p>+More</p>
            </li>
        </ul>
    </div>

    <div>
        <div>
            <IoMdContact />
            <p>Peter CHendi</p>
        </div>

        <div>
            <SlCalender />
            <p>6 Months Ago</p>
        </div>
    </div>
  </HouseStyle>


  <HouseStyle>
    <div>
        <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
        <p>Appartment</p>
        <p>$20000</p>
        <StarReview/>
    </div>

    <div>
        <h2>Nirala Appartment</h2>

        <div>
            <BsPersonFill />
            <p>Yaounde, Simbock</p>
        </div>
    </div>

    <div>
        <ul>
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
                <p>+More</p>
            </li>
        </ul>
    </div>

    <div>
        <div>
            <IoMdContact />
            <p>Peter CHendi</p>
        </div>

        <div>
            <Calender />
            <p>6 Months Ago</p>
        </div>
    </div>
  </HouseStyle>
</HousesListingSection>
</ThemeProvider>;
}
export default Houses;