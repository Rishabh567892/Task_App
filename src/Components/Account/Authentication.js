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
      error: error.message || "You are not logged in",
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
      message: "user is not logged in"
    }
  }

}

export { loginUser, registerUser, verifyUser }