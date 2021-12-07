import React, {useContext } from 'react';
import {GalleryContext} from '../contexts/GalleryContext';
import Pagination from '../layout/Pagination'
import List from './List'
import SearchForm from './Search';
import Alert from '../layout/Alert';
import NotFound from '../pages/NotFound';


const  Gallery = () => {

  const {
      photos,
      alert,
      loadImages,
      showAlert,
      loading,
      currentPhotos,
      howManyPages,
      setCurrentPage         
      } = useContext(GalleryContext);

  
  return (
    <>      
      <Alert alert={alert} />
      <SearchForm
        setAlert={showAlert}                   
        loadImages={loadImages}
        photos={photos}
      />
      
     <List photos={currentPhotos} loading={loading}/>
      {photos.length === 0 && <NotFound/>}
      {photos.length >= 1 && <Pagination pages={howManyPages} setCurrentPage={setCurrentPage}/>}

    </>
  );
}

export default Gallery;

