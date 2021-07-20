import React, {useState} from 'react';
import { NavWrapper, NavLogo, NavLogoLink, NavLinksButton, NavSideBarIcon, NavMenu, NavLinks } from './NavbarStyle';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button/Button';

function Navbar() {

    const [click, setClick] = useState(false);

    const HandleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <NavWrapper>

                    <NavSideBarIcon onClick={HandleClick}>
                        { click ? <FaTimes/> : <FaBars/> }
                    </NavSideBarIcon>

                    <NavLogo>
                        <NavLogoLink to="/" onClick={closeMobileMenu}>
                            MEDCARE
                        </NavLogoLink>
                    </NavLogo>

                    <NavMenu>
                        <li className={click ? 'NavMenuActive' : 'NavMenu'}>
                            <NavLinks to="/doctor" onClick={closeMobileMenu}>
                                Find your Doctor
                            </NavLinks>

                            <NavLinks to="/services" onClick={closeMobileMenu}>
                                Services
                            </NavLinks>

                            <NavLinks to="/news" onClick={closeMobileMenu}>
                                MedNews
                            </NavLinks>

                            <NavLinks to="/about" onClick={closeMobileMenu}>
                                About Us
                            </NavLinks>

                        </li>

                        <NavLinksButton to="/signin">
                            <Button buttonStyle='btn--outline' buttonSize='btn--small'>
                                Sign in
                            </Button>
                        </NavLinksButton>

                        <NavLinksButton to="/signup">
                            <Button buttonStyle='btn--solid' buttonSize='btn--small'>
                                Sign up
                            </Button>
                        </NavLinksButton>
                    </NavMenu>

            </NavWrapper>
        </>
    )
}

export default Navbar;
