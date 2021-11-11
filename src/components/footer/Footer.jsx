import React from 'react'

import Facebook from '../simbols/face-02.png'
import Instagram from '../simbols/insta-02.png'
import Twitter from '../simbols/twitter-02.png'

import '../footer/Footer.css'


export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footerE">       
                    <h4 className="logofooter">&lt;FOOD/DEV&gt;</h4>
                </div>
                
                <div className="footerD">
                    <a href="#"><img src={Instagram} alt="Logo instagram" width='20px' /></a>
                    <a href="#"><img src={Twitter} alt="Logo twitter" width='20px'/></a>
                    <a href="#"><img src={Facebook} alt="Logo facebook" width='20px'/></a>
                </div>
            </footer>
        </div>
    )
}
