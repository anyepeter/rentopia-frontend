import { ThemeProvider } from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DropIcon,
    EmailIcon,
    FirstNav,
    LoginLink, 
    NavContainer, 
    NavLink, 
    PhoneIcon, 
    SecondNav,
    SubmitHouse
 } from "../../Styles/navbar/Navbar.styled";
import { theme } from "../../Styles/Global.styled";
import  logo  from "../../assets/logo.png";
import { useState } from "react";
import SelectOption from "./selectOption";



const Navbar = () => {

    const [option, setOption] = useState({
        langueage: 'EN'
    })
console.log(option.langueage)
//    const handleOptions = (e) =>{

//     const { name, type, value, checked } = e.target 
//     setOption(prevOption => {
//         return {
//             prevOption,
//             [name]: type === "checkbox" ? checked : value
//         }
//     }) 

//    }

    return(
       <ThemeProvider theme={theme}>
        <NavContainer>
            <FirstNav>
                <div>
                <ul>
                    <li>
                        <PhoneIcon />
                        <span>(+237)-671-326-486</span>
                    </li>
                    <li>
                    <EmailIcon />
                        <span>rentopia@gmail.com</span>
                    </li>
                    <li>
                        <span>Help and Support </span>
                        <DropIcon />
                    </li>
                </ul>
                <ul>
                   <li>
                  <SelectOption name={"currency"} value={"CFA"} 
                  options={[
                    { label: "CFA", value: "CFA" },
                    { label: "USD", value: "USD" },
                  ]} />
                   </li>
                   <li>
                   <SelectOption name={"language"} value={"EN"} 
                  options={[
                    { label: "EN", value: "EN" },
                    { label: "FN", value: "FN" },
                  ]} />
                   </li>
                </ul>
                </div>
            </FirstNav>
            <SecondNav>
                <div>
              <NavLink>
                <li>
                    <a><img src={logo}/></a>
                </li>
                <li>
                    <a>Houses</a>
                </li>
                <li>
                    <a>Property owners</a>
                </li>
                <li>
                    <span>Categories</span>
                     <RiArrowDropDownLine style={{fontSize: "30px",
                    color: "black"}}/>
                </li>
              </NavLink>
              
              <LoginLink>
                <li>
                    <a >Login</a>
                </li>
                <li>/</li>
                <li>
                    <a>Register</a>
                    
                </li>
                <li>
                   <button> <SubmitHouse to="add_house">Submit property</SubmitHouse></button>
                </li>
              </LoginLink>
              </div>
            </SecondNav>
        </NavContainer>
         </ThemeProvider>
    )
}

export default Navbar;


