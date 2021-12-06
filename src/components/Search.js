import React, {useState} from 'react';

const SearchForm = ({loadImages, setAlert}) => {
    const [searchTerm, setSearchTerm] = useState('');    


    const handleInput = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {      
      e.preventDefault(); 
      if (searchTerm === '' || searchTerm === null) {
        setAlert('Preencha o campo de busca!');
      }
       else {      
        loadImages(searchTerm);
        setSearchTerm([]);
        
      }
    } 
    return (
      <div className='search-section'>
        <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          placeholder="Buscar fotos grátis"
          value={searchTerm}
          onChange={handleInput}  
          autoComplete="off"       
           /> 
          <i className="fas fa-search"></i>     
      </form>
      </div>
    )
}
export default SearchForm