import React from 'react';
import './Footer.css'; // Import the CSS file

import itConnect from '../assets/itConnect.png'; // Replace with your actual image path
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer-content'>
        <div className='logo-container'>
          <img src={itConnect} alt='logo' className='logo' />
          <p className='paragraph'>
            Connecting Talent, Igniting Innovation.
          </p>
        </div>
        <div className='links-container'>
          {footerLinks.map((link) => (
            <div key={link.title} className='link-group'>
              <h4 className='link-group-title'>
                {link.title}
              </h4>
              <ul className='link-list'>
                {link.links.map((item, index) => (
                  <li key={item.name} className='link-item'>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='copyright-text'>
          2023 ITConnect. All Rights Reserved.
        </p>
        <div className='social-media-icons'>
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`social-icon ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
