import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi atque quia officia id voluptatibus vel, laboriosam reiciendis alias, ea, pariatur dolor ab quam accusamus. Quibusdam autem sed aspernatur numquam distinctio</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>6385385552</li>
                        <li>tomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="footer-copyrights">
                CopyRight 2024 @ tomato.com - All Right Reserved
            </div>
        </div>
    )
}

export default Footer