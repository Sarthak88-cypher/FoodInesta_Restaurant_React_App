import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  timeout: 3000,
});

async function getFour() {
  try {
    const response = await api.get("table4");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getTwo() {
  try {
    const response = await api.get("table2");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function postFour(payload) {
  try {
    const response = await api.post("table4", payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function postTwo(payload) {
  try {
    const response = await api.post("table2", payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteTwo(payload) {
    try {
      const response = await api.delete(`table2/${payload}`, payload);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteFour(payload) {
    try {
      const response = await api.delete(`table4/${payload}`, payload);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


export { getFour, getTwo, postFour, postTwo, deleteTwo, deleteFour };
