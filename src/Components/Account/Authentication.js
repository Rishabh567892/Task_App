import axios from "axios"

const registerUser = async (formData) => {

  let response;

  try {

    response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData);

  } catch (error) {

    response = {
      success: false,
      error: error.message,
      message: "user cannot be created"
    }

  }

  return response;

}

const loginUser = async (formData) => {

  let response;

  try {

    response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData);

  } catch (error) {

    response = {
      success: false,
      error: error.message,
      message: "user cannot login"
    }

  }

  return response;

}

export { loginUser, registerUser }