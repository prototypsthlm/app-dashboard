import React from 'react'
import moment from 'moment'
import './footer.scss'

const Footer = () => {
  const date = moment().format('DD MMM')

  return (
    <footer>
      <div className="footer-left-section">
        <div className="navbar-footer-section">
          <a href="https://www.prototyp.se">prototyp</a>
          <div className="navlink-footer-line"></div>
        </div>
      </div>

      <div className="footer-right-section">
        <div className="footer-date-container">
          <div className="footer-date-container-text">
            <p className="footer-date-text">{date}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
