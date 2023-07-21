import React from 'react';
import { DetailContainer, ImageContainer, IntroSection, Picture } from '../../../Styles/houseListing/HouseDetails/houseDetailStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Styles/Global.styled';
import { IoIosArrowForward } from 'react-icons/Io';
import { BsGeoAlt } from '../../../Styles/houseListing/houses';
import { AiOutlineStar } from 'react-icons/Ai';
import { HouseFeature } from '../../../Styles/houseListing/houses';
const HouseDetail = () => {
    return <ThemeProvider theme={theme}>

    <DetailContainer>
        <IntroSection>
        <div>
            <h1>Property Single</h1>
            <ul>
                <li>Home</li>
                <li><IoIosArrowForward /></li>
                <li>Property</li>
                <li><IoIosArrowForward /></li>
                <li>Property Single</li>
            </ul>
        </div>
        </IntroSection>

            <ImageContainer>
                <div>
                   <ul>
                    <li>Appartment</li>
                    <li>Name of House</li>
                    <li><BsGeoAlt /> location</li>
                   </ul>

                   <ul>
                   <li><AiOutlineStar /></li>
                    <li><p>$2000</p></li>
                    <li><p>Fixed Amount</p></li>
                   </ul>
                </div>
                  <Picture>
                  <img src='https://template.unicoderbd.com/homex/assets/images/thumbnail/02.jpg' />
                  </Picture>
            </ImageContainer>

        <main>
          <section>
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
        </HouseFeature>
        <div>
            <h1>Description</h1>
            <p>Consectetuer aliquet. Libero porttitor curabitur vivamus accumsan placerat mattis, in lobortis auctor dolor mus, morbi. Dictumst dictumst. Faucibus. Est mollis. Turpis tortor. In vivamus venenatis neque hendrerit risus amet auctor cras, varius augue nullam morbi posuere lacus porttitor dictumst tincidunt curabitur ilisis torquent magnis cras maecenas vel. Odio proin, aptent tristique urna, nibh iaculis auctor Arcu faucibus sollicitudin donec inceptos dapibus viverra. Lorem consequat. Ac viverra torquent.</p>
        </div>

        <div>
            <h2>Property Summary</h2>
            <ul>
                <li>
                    <div>
                        <p>Name:</p>
                        <p>Label</p>
                    </div>
                    <div>
                        <p>Name:</p>
                        <p>Label</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Name:</p>
                        <p>Label</p>
                    </div>
                    <div>
                        <p>Name:</p>
                        <p>Label</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Name:</p>
                        <p>Label</p>
                    </div>
                    <div>
                        <p>Name:</p>
                        <p>Label</p>
                    </div>
                </li>
            </ul>
        </div>


        <div>
            <h2>Security Details</h2>
        </div>
          </section>
          <aside>

          </aside>
        </main>    
        
    </DetailContainer>
    
    </ThemeProvider>;
}


export default HouseDetail;