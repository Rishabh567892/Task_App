import axios from "axios"

const registerUser = async (formData) => {

  try {

    let response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData);

    return response.data;

  } catch (error) {

    return {
      success: false,
      message: "cannot register user",
    };

  }

}

const loginUser = async (formData) => {

  let response;

  try {

    response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData);

  } catch (error) {

    return response = {
      success: false,
      message: error.message || "You are not logged in",
    }

  }

  return response.data;

}

const verifyUser = async () => {

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/verify`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })

    return response.data;

  } catch (error) {
    return {
      success: false,
      message: error.message || "Unauthorized"
    }
  }

}

const deleteUser = async (password) => {

  try {

    let response = await axios.delete(`${import.meta.env.VITE_API_URL}/auth/delete`, {
      data: { password: password },
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
    });

    return response.data;

  } catch (error) {

    return {
      success: false,
      message: error.message || "Your can not be deleted",
    }

  }

}

export { loginUser, registerUser, verifyUser, deleteUser }