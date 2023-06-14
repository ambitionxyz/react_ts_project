const axios = require("axios").default;
import { assign } from "lodash";
import i18next from "i18next";
import JSONBig from "json-bigint";

import { STORAGE, getLocalStorage } from "../untils";
import { BASE_API_URL } from "./constan";

//config instance axios
class AxiosClient {
  axiosClient;
  constructor() {
    this.axiosClient = axios.create({
      baseURL: BASE_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getLocalStorage(STORAGE.USER_TOKEN),
      },
      timeout: 30000,
    });
  }

  setHeader = async (userToken = null) => {
    this.axiosClient.defaults.headers.Authorization = `Bearer ${userToken}`;
  };

  async getExistTokenOnLocalStorage() {
    const userToken: any = await getLocalStorage(STORAGE.USER_TOKEN);
    if (userToken) {
      this.setHeader(userToken);
    }
  }

  get = async (resource: String, config = {}) => {
    return this.axiosClient.get(resource, {
      ...assign(config, { headers: this.axiosClient.defaults.headers }),
    });
  };

  post = async (resource: String, data: any, config = {}) =>
    this.axiosClient.post(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    );

  update = async (resource: String, data: any, config = {}) =>
    this.axiosClient.put(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    );

  put = async (resource: String, data: any, config = {}) =>
    this.axiosClient.put(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    );

  patch = async (resource: String, data: any, config = {}) =>
    this.axiosClient.patch(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    );

  delete = async (resource: String, data: any, config = {}) =>
    this.axiosClient.delete(`${resource}`, {
      data,
      ...assign(config, { headers: this.axiosClient.defaults.headers }),
    });
}

export const axiosInstance = new AxiosClient();
export default AxiosClient;
