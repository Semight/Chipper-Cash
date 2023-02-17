import React from "react";
import Burger from "./Burger";
import { StyledNavBar, FlexBar } from "./NavBar.styled";
import Image from "../../assets/logo-chipper.svg";


const NavBar = () => {

    return (
        <StyledNavBar>
            <FlexBar>
                <div className="logo">
                    <img src={Image} alt="Chipper-cash logo" />
                    </div> 
                <Burger />
            </FlexBar>
      </StyledNavBar>
    );
}
export default NavBar;