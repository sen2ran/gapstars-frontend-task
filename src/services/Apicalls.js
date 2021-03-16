import axios from "axios";

const BASE_URL = "http://localhost:8081/api";

let instance = axios.create({
  baseURL: BASE_URL,
});

export const GetAllImages = async () => {
  try {
    return await instance.get(`/image`);
  } catch (error) {
    return error;
  }
};

export const GetSelectedImages = async () => {
  try {
    return await instance.get(`/image/selectedImage`);
  } catch (error) {
    return error;
  }
};

export const SetSelectedImages = async (payload) => {
  try {
    return await instance.get(`/image/set/${payload.selectedId}`);
  } catch (error) {
    return error;
  }
};
