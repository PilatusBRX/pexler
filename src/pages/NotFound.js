import React from 'react';
const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>
        O termo ou a página que está procurando não existe.
      </h1>
      <a href="/" back-to-home>
        <i className='fa fa-home'></i> Voltar para home
      </a>
    </div>
  );
};

export default NotFound;
