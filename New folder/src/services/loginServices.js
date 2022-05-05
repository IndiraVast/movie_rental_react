import axios from "../axios-common";


const create = (data) => {
    console.log("users data",data);
  return axios.post("/logins", data);
};

const loginService = {
  create,
};
export default loginService;
