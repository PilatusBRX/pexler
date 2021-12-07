import React, {createContext, useState, useEffect} from 'react';
import { getImages } from "../service/api";

export const GalleryContext = createContext();

const GalleryContextProvider = (props) => {
   
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null);  
    const [currentPage, setCurrentPage] = useState(1);
    const [photosPerPage] = useState(20);  


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
        <GalleryContext.Provider value={{
            loadImages,
            photos,
            loading,
            showAlert,
            alert,
            currentPhotos,
            howManyPages,
            setCurrentPage
        }}>
            {props.children}
        </GalleryContext.Provider>
    )
}

export default GalleryContextProvider;