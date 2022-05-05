import axios from "../axios-common";


const create = (data) => {
    console.log("users data",data);
  return axios.post("/users", data);
};


const registerService = {
  
  create,
  
};
export default registerService;
