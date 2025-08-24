import axios from "axios";

// show tasks
axios.get(import.meta.API_URL, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})