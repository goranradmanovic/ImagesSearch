import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL

const apiKey = process.env.VUE_APP_API_KEY,
      imageType = process.env.VUE_APP_IMAGE_TYPE,
      imagePretty = process.env.VUE_APP_PRETTY

const fetchAllImages = params => {
    return axios.get(`?key=${apiKey}&image_type=${imageType}&pretty=${imagePretty}&q=${params}`);
};

export default {
    fetchAllImages
}