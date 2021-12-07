import React from 'react';
import Item from './Item';
import Loading from '../layout/Loading';
const List = ({ photos, loading }) => {  

  if (loading) {
    return <Loading />;
  } else {
    return (
      <section className="gallery">      
      {photos.map((photo, index) => {
          return (                
              <div  key={index} >
                <Item photo={photo} />
            </div>
          )
       })}     
          
      </section> 
    );
   
  }
  
};

export default List
