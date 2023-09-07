import React from 'react';
import { clients } from '../constants';
import './Clients.css'; // Make sure to adjust the path to your CSS file

const Clients = () => {
  return (
    <section className='clients-section'>
      <div className='clients-container'>
        {clients.map((client) => (
          <div key={client.id} className='client-item'>
            <img
              src={client.logo}
              alt='client'
              className='client-logo'
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
