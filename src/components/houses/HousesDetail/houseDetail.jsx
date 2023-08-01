import React from 'react';
import { DetailContainer, ImageContainer, IntroSection, Picture } from '../../../Styles/houseListing/HouseDetails/houseDetailStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Styles/Global.styled';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { BsGeoAlt } from '../../../Styles/houseListing/houses';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useLocation } from 'react-router';
import '../../../Styles/houseListing/HouseDetails/houseDetails.css'
import LocationMap from './locationMap';

const HouseDetail = () => {
   const location = useLocation()
   const [selectedPlace, setSelectedPlace] = React.useState(1);
   
   const { house, user } = location.state

   const houseData = [
    {
        name: "school",
        id: 1
    },
    {
        name: "market",
        id: 2
    },
    {
        name: "Hospital",
        id: 3
    }
   ]
console.log(user)
   console.log(house)

   console.log(selectedPlace)

   const nearbyPlacesData = house.relationships['near-by-places'].data;

   const filteredFields = nearbyPlacesData.filter(
    (item) =>  item['place-id'] === selectedPlace
  );


  console.log(filteredFields)

    return <ThemeProvider theme={theme}>

    <DetailContainer>
        <IntroSection>
        <div>
            <h1>Property Single</h1>
            <ul>
                <li>Home</li>
                <li><KeyboardArrowRightOutlinedIcon /></li>
                <li>Property</li>
                <li><KeyboardArrowRightOutlinedIcon /></li>
                <li>Property Single</li>
            </ul>
        </div>
        </IntroSection>

            <ImageContainer>
                <div>
                   <ul className='propety-items'>
                    <li className='property-type'><p>{house.relationships.category.data.name}</p></li>
                    <li>{user.attributes.name}</li>
                    <li className='property-address'><BsGeoAlt /> {house.relationships.location.data.city}, {house.relationships.location.data.quater}</li>
                   </ul>

                   <ul className='propety-items-2'>
                   <li><StarBorderOutlinedIcon /></li>
                    <li><p>$ {house.attributes.price}</p></li>
                    <li><p>Fixed Amount</p></li>
                   </ul>
                </div>
                  <Picture>
                  <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
                  </Picture>
            </ImageContainer>

        <main className='main-container'>
          <section className='detail-container'>
          <ul className='house-features'>
            <li>
                <span>2</span>
                <p>Bedrooms</p>
            </li>

            <li>
                <span>3</span>
                <p>Bathrooms</p>
            </li>

            <li>
                <span>1</span>
                <p>Kitchen</p>
            </li>

            <li>
                <span>2</span>
                <p>Garage</p>
            </li>
        </ul>
        <div className='description-section'>
            <h1>Description</h1>
            <p>Consectetuer aliquet. Libero porttitor curabitur vivamus accumsan placerat mattis, in lobortis auctor dolor mus, morbi. Dictumst dictumst. Faucibus. Est mollis. Turpis tortor. In vivamus venenatis neque hendrerit risus amet auctor cras, varius augue nullam morbi posuere lacus porttitor dictumst tincidunt curabitur ilisis torquent magnis cras maecenas vel. Odio proin, aptent tristique urna, nibh iaculis auctor Arcu faucibus sollicitudin donec inceptos dapibus viverra. Lorem consequat. Ac viverra torquent.</p>
        </div>

        <div className='property-features'>
            <h2>Property Summary</h2>

            <div className='feature-listing-container'>
            <ul className='feature-listing'>
                <li>
                        <p>Property name:</p>
                        <p>{house.attributes.title}</p>
                </li>
                <li>
                        <p>Property Type:</p>
                        { house.relationships.category.data.name }

                </li>
                <li>
                        <p>Property owner</p>
                        <p>{user.attributes.name}</p>

                </li>
                <li>
                        <p>Water source </p>
                        <p>Label</p>

                </li>
                <li>
                        <p>Electricity Type</p>
                        <p>Label</p>

                </li>
            </ul>

            <ul className='feature-listing-2'>
                <li>
                        <p>Inside a fance:</p>
                        { 

                        house.relationships.security.data.gate ? <p>Yes</p> : <p>No</p>
                        
                        }
                </li>
                <li>
                   
                        <p>Security man:</p>
                        { 

                        house.relationships.security.data.securityMan? <p>Yes</p> : <p>No</p>

                         }
                   
                </li>
                <li>
                   
                        <p>City address:</p>
                        <p>{house.relationships.location.data.city}</p>
                  
                </li>
                <li>
                   
                   <p>Quater address:</p>
                   <p>{house.relationships.location.data.quater}</p>
             
           </li>
           <li>
                   
                   <p>City address:</p>
                   <p>Yaounde</p>
             
           </li>
            </ul>

            </div>
        </div>


        <div className='proprety-security-section'>
            <h2>Security Details</h2>
            <ul className='security-item'>
            <li> 
                    <p>Present of a fence and a gate:</p>
                    { 

                      house.relationships.security.data.gate ? <p>Yes</p> : <p>No</p>

                     }
            </li>
            <li>
                    <p>Security man included:</p>
                    { 

                      house.relationships.security.data.securityMan? <p>Yes</p> : <p>No</p>

                     }
               
            </li>
            </ul>

            <div className='security-description-1'>
                <h1>Security Description</h1>
                <p>onsectetuer aliquet. Libero porttitor curabitur vivamus accumsan placerat mattis, in lobortis auctor dolor mus, morbi. Dictumst dictumst. Faucibus. Est mollis. Turpis tortor. In vivamus venenatis neque hendrerit risus amet auctor cras, varius augue nullam morbi posuere lacus porttitor dictumst tincidunt </p>
            </div>
        </div>


        <div className='nearby-container'>
            <h1>Nearby Places</h1>
           
                <ul >
                    {
                        houseData.map((data) => (
                            <li onClick={() => setSelectedPlace(data.id)} key={data.id}>{data.name}</li>
                        ))
                    }
                </ul>
            

            <div>
            <table className="blueTable">
           <thead>
          <tr>
          <th>Name</th>
             <th>Distance</th>
            </tr>
         </thead>
         <tbody>
           {
            filteredFields.map((item) => (
                <tr key={item.key}>
                  <td>{item.name}</td>
                  <td>{item.distance}</td>
                </tr>
            ))
           }
         </tbody>
            </table>
            </div>
        </div>


        <div className='video'>
            <h1>Property Video</h1>
            <video controls  width="100%">
	<source src={house.attributes.video} type="video/mp4" />
</video>
        </div>
          </section>
          <aside className='aside'>
            <div className='contact-info-container'>
                <div className='contact-info'>
                    <ul>
                        <li><img src='https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896'/></li>
                        <li><p>{user.attributes.name}</p>
                        <p>{user.attributes.email}</p></li>
                    </ul>

                    <div className='contact-number'>
                        <p>Whatapp business contact</p>
                        <p>{user.attributes['phone-number']}</p>
                    </div>
                </div>
            </div>


            <div className='aside-location-container'>
               
               <h2>Property location</h2>
               <div>
                <LocationMap />
               </div>
            </div>


          </aside>
        </main> 
        <section className='comment-container'>
            <div>
                <h1>Give Your Review</h1>
                <hr className='hr-1' />
                <hr className='hr-2' />
            </div>

            <form>
                <textarea className='comment-textarea' />
            </form>
        </section>   
        
    </DetailContainer>
    
    </ThemeProvider>;
}


export default HouseDetail;