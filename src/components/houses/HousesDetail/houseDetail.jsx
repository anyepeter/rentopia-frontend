import React from 'react';
import { DetailContainer, ImageContainer, IntroSection, IntroText, Picture } from '../../../Styles/houseListing/HouseDetails/houseDetailStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Styles/Global.styled';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { BsGeoAlt } from '../../../Styles/houseListing/houses';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useLocation, useParams } from 'react-router';
import '../../../Styles/houseListing/HouseDetails/houseDetails.css'
import LocationMap from './locationMap';
import ImageSwip from './imageSwiper';
import { useNavigate } from 'react-router-dom';

const HouseDetail = () => {
   const location = useLocation()
   const { id } = useParams()
   const navigate = useNavigate();
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

   const nearbyPlacesData = house.relationships['near-by-places'].data;

   const filteredFields = nearbyPlacesData.filter(
    (item) =>  item['place-id'] === selectedPlace
  );
console.log(house.attributes)
  const images = house?.attributes.images

  const token = JSON.parse(localStorage.getItem('token')) || null;

    return <ThemeProvider theme={theme}>

    <DetailContainer key={id}>
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
                <IntroText>
                   <ul className='propety-items'>
                    <li className='property-type'><p>{house.relationships.category.data.name}</p></li>
                    <li><p className='property-name'>{user.attributes.name}</p></li>
                    <li className='property-address'><BsGeoAlt /> {house.relationships.location.data.city}, {house.relationships.location.data.quater}</li>
                   </ul>

                   <ul className='propety-items-2'>
                   <li><StarBorderOutlinedIcon /></li>
                    <li><p>${house.attributes.price}</p></li>
                    <li><h4>Fixed Amount</h4></li>
                   </ul>
                </IntroText>
                  <Picture>
                  <ImageSwip  images={ images } />
                  </Picture>
            </ImageContainer>

        <main className='main-container'>
          <section className='detail-container'>
          <ul className='house-features'>
            <li>
                <span>{
                
                house?.attributes.bedroom? house?.attributes.bedroom : 0
                
                }</span>
                <p>Bedrooms</p>
            </li>

            <li>
                <span>{
                    
                    house?.attributes.bathroom? house?.attributes.bathroom : 0

                    }</span>
                <p>Bathrooms</p>
            </li>

            <li>
                <span>{
                    
                    house?.attributes.kitchen? house?.attributes.kitchen : 0
                    
                    }</span>
                <p>Kitchen</p>
            </li>

            <li>
                <span>{
                    
                    house?.attributes.garage? 'present' : 'absent'

                    }</span>
                <p>Garage</p>
            </li>
        </ul>
        <div className='description-section'>
            <h1>Description</h1>
            <p>{
                
                house?.attributes.description? house?.attributes.description : 'No description available'

                }</p>
        </div>

        <div className='property-features'>
            <h2>Property Summary</h2>

            <div className='feature-listing-container'>
            <ul className='feature-listing'>
                <li>
                        <p className='listing-Property'>Property name:</p>
                        <p>{house.attributes.title}</p>
                </li>
                <li>
                        <p className='listing-Property'>Property Type:</p>
                        { house.relationships.category.data.name }

                </li>
                <li>
                        <p className='listing-Property'>Property owner:</p>
                        <p>{user.attributes.name}</p>

                </li>
                <li>
                        <p className='listing-Property'>Water source </p>
                        <p>{
                            
                            house?.attributes['water-source']? house?.attributes['water-source'] : 'No water source'

                            }</p>

                </li>
                <li>
                        <p className='listing-Property'>Electricity Type</p>
                        <p>{
                            
                            house?.attributes['metal-type']? house?.attributes['metal-type'] : 'No electricity type'
                            
                            }</p>

                </li>
            </ul>

            <ul className='feature-listing-2'>
                <li>
                        <p className='listing-Property'>Inside a fance:</p>
                        { 

                        house.relationships.security.data.gate ? <p>Yes</p> : <p>No</p>
                        
                        }
                </li>
                <li>
                   
                        <p className='listing-Property'>Security man:</p>
                        { 

                        house.relationships.security.data.securityMan? <p>Yes</p> : <p>No</p>

                         }
                   
                </li>
                <li>
                   
                        <p className='listing-Property'>City address:</p>
                        <p>{house.relationships.location.data.city}</p>
                  
                </li>
                <li>
                   
                   <p className='listing-Property'>Quater address:</p>
                   <p>{house.relationships.location.data.quater}</p>
             
           </li>
           <li>
                   
                   <p className='listing-Property'>Garage:</p>
                   <p>{
                    
                    house?.attributes.garage? 'present' : 'absent'

                    }</p>
             
           </li>
            </ul>

            </div>
        </div>


        <div className='proprety-security-section'>
            <h2>Security Details</h2>
            <ul className='security-item'>
            <li> 
                    <p className='security-item-p'>Present of a fence and a gate:</p>
                    { 

                      house.relationships.security.data.gate ? <p>Yes</p> : <p>No</p>

                     }
            </li>
            <li>
                    <p className='security-item-p'>Security man included:</p>
                    { 

                      house.relationships.security.data.securityMan? <p>Yes</p> : <p>No</p>

                     }
               
            </li>
            </ul>
        </div>


        <div className='nearby-container'>
            <h1>Nearby Places</h1>
           
                <ul >
                    {
                        houseData.map((data, index) => (
                            <li
                             onClick={() => setSelectedPlace(data.id)}
                              key={data.id}
                              className={`nav-link ${selectedPlace === index + 1 ? 'focused' : ''}`}
                              >{data.name}</li>
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
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.distance} km</td>
                </tr>
            ))
           }
         </tbody>
            </table>
            </div>
        </div>


        <div className='video-container'>
            <h1>Property Video</h1>
            <video className='video-player' controls >
	<source className='source' src={house.attributes.video} type="video/mp4" />
</video>
        </div>
          </section>
          <aside className='aside'>
            <div className='contact-info-container'>
              
              {
                token ? <div className='contact-info'>
                     <ul>
                        <li><img src='https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896'/></li>
                        <li><p className='user-name'>{user.attributes.name}</p>
                        <p>{user.attributes.email}</p></li>
                    </ul>

                    <div className='contact-number'>
                        <h1>Whatapp business contact</h1>
                        <p>{user.attributes['phone-number']}</p>
                    </div>
                </div> : <div className='warning-container'>
                    <p>Login or Register to have owner contact information</p>
                    <button onClick={() => navigate('/login')}>Login/Register</button>
                </div>

              }
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
                <textarea placeholder='Comments' className='comment-textarea' />
                <input type='submit' className='comment-button'/>
            </form>
        </section>   
        
    </DetailContainer>
    
    </ThemeProvider>;
}


export default HouseDetail;