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

    setTasks(response.data.tasks)

  } catch (error) {
    setTasks(error.message)
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
    return { data: { success: false, message: 'something went wrong' } }
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
  } catch (error) {
    response = {
      data: {
        ...error.response.data,
        message: "task cannot be changed"
      }
    }
  }

  return response.data;

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
  } catch (error) {
    response = {
      data: {
        ...error.response.data,
        success: false,
        message: "task cannot be deleted"
      }
    }
  }

  return response.data;

}

export { fetchTasks, addTask, editTask, deleteTask }