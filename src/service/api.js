import axios from "axios";

export const getImages = async (searchTerm = "technology") =>

  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=8000`, {
    headers: {
      Authorization: ''
    }
  });

