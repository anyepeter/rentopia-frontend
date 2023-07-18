import { styled } from "styled-components";


export const HouseContainer = styled.section`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
div{
    width: 100%;
    max-width: 1300px; 
    min-width: 200px;
    padding: 5rem 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1{
     font-size: 32px;
     line-height: 38px;
     color: rgb(13, 20, 50);
     font-family: ${( {theme }) => theme.fonts.secondary};
     font-weight: 700;

    }
}
`
export const HorizonLine = styled.hr`
width: 8rem;
height: 2px;
background-color: #46c788;
border: none;
`
export const HorizonLineTwo = styled.hr`
width: 4rem;
height: 2px;
background-color: #46c788;
border: none;
position: relative;
top: -8px;
`