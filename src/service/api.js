import axios from "axios";

export const getImages = async (searchTerm = "technology") =>

  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=8000`, {
    headers: {
      Authorization: '563492ad6f9170000100000166d19607da664d19a6493eb705c5244a'
    }
  });

