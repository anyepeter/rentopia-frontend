import { ThemeProvider } from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DropIcon, EmailIcon, FirstNav, LoginLink, NavContainer, NavLink, PhoneIcon, SecondNav } from "../Styles/navbar/Navbar.styled";
import { theme } from "../Styles/Global.styled";
import  logo  from "../../assets/logo.png"

const Navbar = () => {

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
                   <select>
                         <option>USD</option>
                         <option>CFA</option>
                    </select>
                   </li>
                   <li>
                   <select>
                         <option>EN</option>
                         <option>FN</option>
                    </select>
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
                    <button>Submit property</button>
                </li>
              </LoginLink>
              </div>
            </SecondNav>
        </NavContainer>
         </ThemeProvider>
    )
}

export default Navbar;


