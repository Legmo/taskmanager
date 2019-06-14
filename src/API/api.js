import * as axios from "axios";
import StringEncodingToRFC3986 from "../Components/Helpers/StringEncodingToRFC3986/StringEncodingToRFC3986";
const md5 = require('js-md5');

const axiosBase = axios.create({
  baseURL: "https://uxcandy.com/~shapoval/test-task-backend/"
})

export const tasksAPI = {
  getTasksWithSort([currentPage="", sortField="", sortDirection=""] = []) {
    return axiosBase.get(`?developer=Name&page=${currentPage}&sort_field=${sortField}&sort_direction=${sortDirection}`)
        .then(response => response.data)
  },

  postTaskStatus([id="", status=""] = []) {
    let token = "beejee";
    let requestWithoutSignature = "status=" + StringEncodingToRFC3986(status) + "&token=" + StringEncodingToRFC3986(token);

    let params = new FormData();
    params.append("status", status);
    params.append("token", token);
    params.append("signature", md5(requestWithoutSignature));

    return axiosBase.post(`edit/${id}/?developer=Name`, params)
  },

  postTaskText([id="", text=""] = []) {
    let token = "beejee";
    let requestWithoutSignature = "text=" + StringEncodingToRFC3986(text) + "&token=" + StringEncodingToRFC3986(token);

    let params = new FormData();
    params.append("text", text);
    params.append("token", token);
    params.append("signature", md5(requestWithoutSignature));

    return axiosBase.post(`edit/${id}/?developer=Name`, params)
  },

  /*
  postTaskChanges([id="", status="", text=""] = []) {
    let token = "beejee";
    let requestWithoutSignature = "status=" + StringEncodingToRFC3986(status) + "&text=" + StringEncodingToRFC3986(text) + "&token=" + StringEncodingToRFC3986(token);

    let params = new FormData();
    params.append("status", status);
    params.append("text", text);
    params.append("token", token);
    params.append("signature", md5(requestWithoutSignature));

    return axiosBase.post(`edit/${id}/?developer=Name`, params)
  },
*/

  postNewTask([username="", email="", text=""] = []) {
    let url = `create?developer=Name`;
    let params = new FormData();
    params.append("username", username);
    // params.append("email",    email);
    params.append("text",     text);

    return axiosBase.post(url, params)
  },
}

export const pagesAPI = {
  getURL(pageNumber, sortField, sortDirection) {
    let url = `?developer=Name&page=${pageNumber}&sort_field=${sortField}&sort_direction=${sortDirection}`
    return axiosBase.get(url)
  }
}