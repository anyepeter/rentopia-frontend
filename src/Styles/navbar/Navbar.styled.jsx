import  Styled, { styled }  from "styled-components";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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

export const PhoneIcon = Styled(HiPhone)`
color: ${( {theme }) => theme.colors.primary};
`

export const EmailIcon = Styled(MdEmail)`
color: ${( {theme }) => theme.colors.primary};
`
export const DropIcon = Styled(RiArrowDropDownLine)`
color: ${( {theme }) => theme.colors.primary};
font-size: 2rem;
`

export const SubmitHouse = Styled(Link)`
text-decoration: none;
color: #fff;
`