import axios from "../axios-common";
const getAll = () => {

  return axios.get("/customers");
};
const get = (id) => {
  return axios.get(`/customers/${id}`);
};

const create = (data,token) => {
  return axios.post("/customers", data,{headers:{"x-auth-token":token}});
};
const update = (id, data,token) => {
  console.log("customers service id",id);
  return axios.put(`/customers/${id}`, data,{headers:{"x-auth-token":token}});
};
const remove = (id,token) => {
  console.log(id);
  return axios.delete(`/customers/${id}`,{headers:{"x-auth-token":token}});
};

const customerService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default customerService;
