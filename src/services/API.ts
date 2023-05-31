const axios = require("axios").default;
import i18next from "i18next";
import JSONBig from "json-bigint";

import { STORAGE, getLocalStorage } from "../untils";

//config instance axios
class AxiosClient {
  axiosClient;
  constructor() {
    this.axiosClient = axios.create({
      // baseURL: BASE_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getLocalStorage(STORAGE.USER_TOKEN),
      },
      timeout: 30000,
    });
  }
}
