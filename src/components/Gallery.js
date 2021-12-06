import React, { useState, useEffect } from 'react';
import { getImages } from "../service/api";
import Pagination from '../layout/Pagination'
import List from './List'
import SearchForm from './Search';
import Alert from '../layout/Alert';


function Gallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [photosPerPage] = useState(20)

  useEffect(() => {      
    loadImages(); 
         
  }, []);

//Load Images
  const loadImages = async (searchTerm) => {
    setLoading(true)  
    const res = await getImages(searchTerm);
    setPhotos(res.data.photos);  
    setLoading(false)    
  };

  // Set Alert
  const showAlert = (msg) => {
    setAlert({ msg });
    setTimeout(() => setAlert(null), 4000);
  };

  //Get current posts
  const indexOfLastPost = currentPage * photosPerPage;
  const indexOfFirstPost = indexOfLastPost - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(photos.length/photosPerPage);
  
  return (
    <>      
      <Alert alert={alert} />
      <SearchForm
        setAlert={showAlert}                   
        loadImages={loadImages}
        photos={photos}
      />
      <List photos={currentPhotos} loading={loading}/> 

      {photos.length >= 1 && <Pagination pages={howManyPages} setCurrentPage={setCurrentPage}/>}

    </>
  );
}

export default Gallery;
