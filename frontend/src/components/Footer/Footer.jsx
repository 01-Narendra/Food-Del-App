import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nulla tenetur ratione porro harum dignissimos unde dolorem aperiam eveniet sit, sint modi et deserunt culpa, numquam veritatis reiciendis quibusdam dolor!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-25-5285-9562</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">
            Copyright &copy; {currentYear} Tomato.com. All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer