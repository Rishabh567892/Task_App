import axios from "axios";

// show tasks
const fetchTasks = async (setTasks) => {

  let response;

  try {
    response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks/show`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })

    // directly changes tasks array
    setTasks(response.data.tasks)

    return response.data

  } catch (error) {

    // sets tasks as a string "Network Error"
    setTasks("Network Error")

    return {
      success: false,
      message: "Please connect to internet"
    }
  }

}

const addTask = async (newTask) => {

  try {

    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/tasks/add`,
      { newTask: newTask },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      }
    )

    return response.data;

  } catch (error) {

    return { success: false, message: 'task cannot be added' }
  }

}

const editTask = async ({ replacementNumber, newTask }) => {

  let response;

  try {
    response = await axios.post(`${import.meta.env.VITE_API_URL}/tasks/edit`,
      {
        replacementNumber: replacementNumber,
        newTask: newTask
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )

    return response.data;

  } catch (error) {
    return {
      success: false,
      message: "task cannot be changed"
    }
  }


}

const deleteTask = async (deleteNumber) => {

  let response;

  try {
    response = await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/delete`,
      {
        data: { deleteTaskNum: deleteNumber },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )

    return response.data;

  } catch (error) {
    return {
      success: false,
      message: "task cannot be deleted"
    }
  }


}

export { fetchTasks, addTask, editTask, deleteTask }