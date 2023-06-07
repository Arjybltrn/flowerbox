import React from 'react'
import '../styles.css'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <img className="footer-logo" src="https://i.imgur.com/KxfWH9J.png" alt='...' />
            <span>FLOWERBOX / EST 2023 </span>
        </div>

        <div>
            <h2>customer service</h2>
                <ul>
                    <li>SATISFACTION COMMITMENT</li>
                    <li>DELIVER POLICIES</li>
                    <li>CANCELLATIONS</li>
                    <li>RETURN POLOCIES</li>
                </ul>
        </div>

        <div>
            <h2>flowerbox</h2>
                <ul>
                    <li>TERMS OF SERVICE</li>
                    <li>PRIVACY POLOCY</li>
                    <li>CAREER OPPORTUNITIES</li>
                    <li>MORE INFORMATION</li>
                </ul>

        </div>
    </div>
  )
}

export default Footer