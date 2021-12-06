import React from 'react'

const Item = (props) => {
    return (    
      <figure className="item">            
       <img src={props.photo.src.portrait} alt={props.photo.src.portrait}/>
       <figcaption>               
           <a href={props.photo.photographer_url} target="_blank" rel="noopener noreferrer"><i className="fas fa-user"></i>{props.photo.photographer}</a>              
           <a href={`https://www.pexels.com/photo/${props.photo.id}/download/`}><i className="fas fa-cloud-download-alt"></i></a>
           
       </figcaption>            
   </figure>          
   
      );
    };

export default Item
