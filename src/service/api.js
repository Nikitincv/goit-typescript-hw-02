import axios from "axios";
export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=0OYVNsKKdn0HjwHyy_2tQwfFBrfV2F3htpueSYpAooM`
  );
  return data;
};
