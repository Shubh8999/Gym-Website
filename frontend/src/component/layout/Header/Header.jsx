import React from "react";
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/logo2.png";

const options = {
    burgerColorHover: "#b02a57",
    logo,
    logoBorderRadius: "20px",
    logoWidth: "100px",
    logoHeight: "100px",
    navColor1: "#EEE2DC",
    logoHoverSize: "10px",
    logoHoverColor: "#b02a57",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "#b02a57",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#741e3a",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "#b02a57",
    searchIconColor: "#b02a57",
    cartIconColor: "#b02a57",
    profileIconColorHover: "#741e3a",
    searchIconColorHover: "#741e3a",
    cartIconColorHover: "#741e3a",
    cartIconMargin: "1vmax",
  };
  
const Header = () => {
    return <ReactNavbar {...options}/>;
};

export default Header;

