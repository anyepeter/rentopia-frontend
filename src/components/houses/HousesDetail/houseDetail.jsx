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
   
   const { house, user } = location.state

   console.log(house)

   const houseData = [
    {
        name: "school",
        id: 1
    },
    {
        name: "market",
        id: 1
    },
    {
        name: "Hospital",
        id: 1
    }
   ]



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
                        <p>Ljhfjsdfhj</p>
                </li>
                <li>
                        <p>Property Type:</p>
                        <p>Apartment</p>

                </li>
                <li>
                        <p>Property owner</p>
                        <p>Label</p>

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
                        <p>Yes</p>
                </li>
                <li>
                   
                        <p>Security man:</p>
                        <p>yes</p>
                   
                </li>
                <li>
                   
                        <p>City address:</p>
                        <p>Yaounde</p>
                  
                </li>
                <li>
                   
                   <p>Quater address:</p>
                   <p>Simbock</p>
             
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
                    <p>Yes</p>
            </li>
            <li>
                    <p>Security man included:</p>
                    <p>yes</p>
               
            </li>
            </ul>

            <div className='security-description-1'>
                <h1>Security Description</h1>
                <p>onsectetuer aliquet. Libero porttitor curabitur vivamus accumsan placerat mattis, in lobortis auctor dolor mus, morbi. Dictumst dictumst. Faucibus. Est mollis. Turpis tortor. In vivamus venenatis neque hendrerit risus amet auctor cras, varius augue nullam morbi posuere lacus porttitor dictumst tincidunt </p>
            </div>
        </div>


        <div>
            <h1>Nearby Places</h1>
            <div>
                <ul className=''>
                    {
                        houseData.map((data) => (
                            <li key={data.id}>{data.name}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
            <table className="blueTable">
           <thead>
          <tr>
          <th>Name</th>
             <th>Distance</th>
             <th>head3</th>
            </tr>
         </thead>
         <tbody>
<tr>
<td>cell1_1</td>
<td>cell2_1</td>
<td>cell3_1</td>
</tr>
<tr>
<td>cell1_2</td>
<td>cell2_2</td>
<td>cell3_2</td>
</tr>
         </tbody>
            </table>
            </div>
        </div>


        <div>
            <h1>Property Video</h1>
            <video controls height="220" width="390">
	<source src="https://www.youtube.com/watch?v=vOXEM1cfrZ4"  />
</video>
        </div>
          </section>
          <aside>

            <div className='contact-info-container'>
                <div>
                    <ul>
                        <li><img src=''/></li>
                        <li><p>Losphine Pacheco</p>
                        <p>Email: </p></li>
                    </ul>

                    <div>
                        <p>Whatapp business contact</p>
                        <p>671326486</p>
                    </div>
                </div>
            </div>


            <div>
               
               <h2>Property location</h2>
               <div>
                <LocationMap />
               </div>
            </div>


          </aside>
        </main>    
        
    </DetailContainer>
    
    </ThemeProvider>;
}


export default HouseDetail;