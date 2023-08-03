import { styled } from "styled-components";


export const DetailContainer = styled.section`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
export const IntroSection = styled.section`
display: flex;
padding: 48px 0;
justify-content: center;
width: 100%;
max-width: 1300px;
background-color: #F5F5F5;
div{
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    h1{
        font-family: ${( {theme }) => theme.fonts.secondary};
        font-size: 28px;
        
    }
    ul{
        display: flex;
        gap: .2rem;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        font-family: ${( {theme }) => theme.fonts.primary};
       li{
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        font-size: 15px;
        color: #74777B;
       }
    }
}
`
export const ImageContainer = styled.div`
width: 100%;
max-width: 1300px;
padding: 3rem 1rem 3rem;
display: flex;
justify-content: center;
flex-direction: column;
gap: 2rem;
background-color: #fff;
`
export const IntroText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Picture = styled.picture`
width: 100%;
height: 700px;
display: flex;
flex-direction: column;
position: relative;
`