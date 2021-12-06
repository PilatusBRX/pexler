import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>
        O termo ou a página que está procurando não existe
      </h2>
      <Link to='/' back-to-home>
        <i className='fa fa-home'></i> Voltar para home
      </Link>
    </div>
  );
};

export default NotFound;
