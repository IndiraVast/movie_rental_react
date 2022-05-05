import axios from "../axios-common";
const getAll = () => {

  return axios.get("/movies");
};
const get = (id) => {
  return axios.get(`/movies/${id}`);
};
const create = (data,token) => {
  return axios.post("/movies", data,{headers:{"x-auth-token":token}});
};
const update = (id, data,token) => {
  console.log("movies service id",id);
  return axios.put(`/movies/${id}`, data,{headers:{"x-auth-token":token}});
};
const remove = (id,token) => {
  console.log(id);
  return axios.delete(`/movies/${id}`,{headers:{"x-auth-token":token}});
};

const movieService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default movieService;
