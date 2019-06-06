import * as axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://uxcandy.com/~shapoval/test-task-backend/"
})

export const tasksAPI = {
  getTasksWithSort(currentPage, sortField, sortDirection) {
    return axiosBase.get(`?developer=Name&page=${currentPage}&sort_field=${sortField}&sort_direction=${sortDirection}`)
        .then(response => response.data)
  }
}
