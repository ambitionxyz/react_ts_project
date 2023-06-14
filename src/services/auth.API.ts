import { AxiosInstance } from "axios";
import { USER } from "./constan";
import { axiosInstance } from "./API";

async function loginUser(data: Object) {
  return await axiosInstance.post(USER.LOGIN, data);
}

export { loginUser };
