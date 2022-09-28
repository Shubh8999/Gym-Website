import React from 'react'
import playStore from "../../../images/playstore1.png"
import appStore from "../../../images/Appstore1.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Gym Equipments.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; SKAM</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/SKAM">Instagram</a>
        <a href="http://youtube.com/SKAM">Youtube</a>
        <a href="http://instagram.com/SKAM">Facebook</a>
      </div>
    </footer>
  )
}

export default Footer