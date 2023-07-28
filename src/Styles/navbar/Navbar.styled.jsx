import  Styled, { styled }  from "styled-components";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export const NavContainer = Styled.header`

width: 100%;
min-width: 200px;
height: auto;
font-family: ${( {theme }) => theme.fonts.primary};
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
`
export const FirstNav = Styled.div`
width: 100%;
background-color: ${( {theme }) => theme.colors.secondary};
display: grid;
place-items: center;
color: #fff;
font-size: 0.9rem;
padding: 0 1rem;
div {
     display: flex;
     width: 100%;
     max-width: 1300px;   
     justify-content: space-between;
     hight: 50px;
     padding: 10px 0;
ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    justify-content: center;

    li {
        cursor: pointer;
        display: flex;
        gap: 0.2rem;
        align-items: center;
        height: 20px;

    span {
        margin-bottom: 0.1rem;
    }

    select {
        background-color: ${( {theme }) => theme.colors.secondary};
        color: #fff;
        font-family: ${( {theme }) => theme.fonts.primary};
        font-size: 13px;
        border: none;
    }
}
}
`

export const SecondNav = Styled.div`    
display: grid;
place-items: center;
width: 100%;
padding: 0 1rem;

div {
    display: flex;
    width: 100%;
    max-width: 1300px;
    justify-content: space-between;
    align-items: center;
    font-size:15px;
    
       li{
         display: flex;
         align-items: center;
        }
}
`
export const NavLink = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items: center;
`

export const LoginLink = styled.ul`
    display: flex;
    gap: 0.3rem;
    li{
        display: flex;
        align-items: center;
        button {
            background-color: ${( {theme }) => theme.colors.primary};
            padding: 15px;
            border: none;
            font-family: ${( {theme }) => theme.fonts.primary};
            font-size: 14px;
            color: #fff;
            margin-left:1rem; 
        }
    }
`

export const PhoneIcon = Styled(PhoneOutlinedIcon)`
color: ${( {theme }) => theme.colors.primary};
`

export const EmailIcon = Styled(MailOutlineOutlinedIcon)`
color: ${( {theme }) => theme.colors.primary};
`
export const DropIcon = Styled(KeyboardArrowDownOutlinedIcon)`
color: ${( {theme }) => theme.colors.primary};
font-size: 2rem;
`