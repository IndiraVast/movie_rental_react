import axios from "axios";
const getAll =() => {
    return axios.get("/rentals");
};
const get = (id) =>{
    return axios.get(`/rentals/${id}`);

}
const create = (data) =>{
    return axios.post(`/rentals`,data);

}
const patch = (id,data) =>{
    return axios.patch(`/rentals/${id}`,data);

}
const remove = (id)=>{
    return axios.delete(`/rentals/${id}`);

};

const rentalServices = {
    getAll,
    get,
    create,
    patch,
    remove,
};

export default rentalServices;