import { toast } from "react-hot-toast";
import axios, { Axios, AxiosResponse } from "axios";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}

interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const { data }: AxiosResponse<FetchImagesResponse> = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=0OYVNsKKdn0HjwHyy_2tQwfFBrfV2F3htpueSYpAooM`
  );
  return data;
};
