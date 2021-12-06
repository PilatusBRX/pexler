import React from 'react';
import Spinner from './loading.gif'

export const Loading = () => {
  return (
    <div className='loading'>
      <img src={Spinner} alt='Loading...' />
      <h2>Carregando...</h2>
    </div>
  );
};
export default Loading;