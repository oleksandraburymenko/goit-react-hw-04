import axios from "axios";

const API_KEY = "FV-IXsvTWQUIcJZN4jiYPpjIP1-ms4LDiDS-P3Ttxq0";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos/";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      orientation: "landscape",
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};