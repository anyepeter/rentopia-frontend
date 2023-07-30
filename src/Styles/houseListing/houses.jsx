import  Styled, { styled }  from "styled-components";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RoomIcon from '@mui/icons-material/Room';

export const HouseStyle = styled.div`
display: flex;
flex-direction: column;
gap: 0.2rem;
box-shadow: 4px 5px 11px -3px rgba(245,245,245,1);
-webkit-box-shadow: 4px 5px 11px -3px rgba(245,245,245,1);
-moz-box-shadow: 4px 5px 11px -3px rgba(245,245,245,1);
`
export const ImageContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;
transition: .5s ease all;
img{
    width: 100%;
    filter: brightness(60%);
    transition: .5s ease all;
}
img:hover{
    transform: scale(1.2);
}
h3{
    position: absolute;
    top: 4%;
    right: 3%;
    background-color: black;
    color: #fff;
    line-height: 20px;
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 15px;
    font-family: ${( {theme }) => theme.fonts.primary};
    font-weight: 400;
    background-color: #0D1532;
}
p{
    position: absolute;
    top: 84%;
    left: 3%;
    font-size: 28px;
    font-family: ${( {theme }) => theme.fonts.primary};
    color: #46c788;
}
`
export const HouseLocation = styled.div`
padding: 1.5rem 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
h2{
    font-family: ${( {theme }) => theme.fonts.secondary};
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;

}
div{
    display: flex;
    align-items:center;
    gap: 0.2rem;
    font-family: ${( {theme }) => theme.fonts.primary};
    p{
        color: rgb(116, 119, 123);
    }
}
`

export const HouseFeature = styled.ul`
display: flex;
list-style: none;
padding: 1.5rem 1rem;
justify-content: space-between;
background-color: #F5F5F5;
font-family: ${( {theme }) => theme.fonts.primary};
align-item: center;
li{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .3rem;
    p{
        font-size: 15px;
    }
    a{
        color: #46c788;
    }
}
`


export const StarReview = Styled(StarBorderOutlinedIcon)`
position: absolute;
top: 82%;
right: 2%;
font-size: 38px;
color: #fff;

`

export const BsGeoAlt = Styled(RoomIcon)`
color: #46c788;
`

export const BsPerson = Styled(PersonIcon)`
color: #46c788;
`

export const HouseOwner = styled.ul`
background-color: #fff;
padding: 1.9rem 1rem;
display: flex;
justify-content: space-between;
font-family: ${( {theme }) => theme.fonts.primary};
list-style: none;
li{
    display: flex;
    align-items: center;
    gap: .3rem;
    
  
}
`

export const Calender = Styled(CalendarMonthOutlinedIcon)`
color: #46c788;
`