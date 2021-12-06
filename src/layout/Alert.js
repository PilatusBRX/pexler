import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className='alert'>
        <i class="fa fa-info-circle" aria-hidden="true"></i>
        <span> {alert.msg}</span>
      </div>
    )
  );
};
export default Alert;