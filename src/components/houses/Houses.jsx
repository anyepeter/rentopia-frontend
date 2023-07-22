import React from 'react';
import { HousesListingSection } from '../../Styles/houseListing/houseContainer';
import { HouseStyle, ImageContainer, StarReview, HouseLocation, BsGeoAlt, HouseFeature, BsPerson, HouseOwner, Calender } from '../../Styles/houseListing/houses';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Styles/Global.styled';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
const Houses = ({ houses }) => {
     
    const { data, included } = houses;
    console.log(included);
    console.log(data);

    return (
        <ThemeProvider theme={theme}>
            <HousesListingSection>
       
                   {
                    data?.map((house) => (
                        <HouseStyle >
                        <ImageContainer>
                            <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' alt="House Thumbnail" />
                            <h3>{house.relationships.category.data.name}</h3>
                            <p>{house.attributes.price}</p>
                            <StarReview />
                        </ImageContainer>

                        <HouseLocation>
                            <h2>{house.attributes.title}</h2>

                            <div>
                                <BsGeoAlt />
                                <p>{house.relationships.location.data.city}, {house.relationships.location.data.quater}</p>
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
                                {
                                    included.map((user) => {
                                        if(user.id === house.relationships.user.data.id){
                                            return(
                                                <p>{user.attributes.name}</p>
                                            )
                                        }
                                    })
                                }
                               
                            </li>

                            <li>
                                <Calender />
                                <p>{dateFormat(house.attributes.created_at, "mmmm dS, yyyy")}</p>
                            </li>
                        </HouseOwner>
                    </HouseStyle>
       
                    ))
                   }

            </HousesListingSection>
        </ThemeProvider>
    );
}

Houses.propTypes = {
    houses: PropTypes.object.isRequired
}


export default Houses;
