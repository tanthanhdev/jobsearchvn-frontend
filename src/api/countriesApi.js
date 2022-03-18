import axiosClient from "./axiosClient";

const API_URL=process.env.REACT_APP_API_URL;
const countries={
    getAll(){
        return axiosClient.get(API_URL+"/public/countries/"); //{params}
    }, 
    // get(id){
    //     const url=`jobs/${id}`
    //     return axiosClient.get(url)
    // },
    // add(data){
    //     const url='jobs'
    //     return axiosClient.post(url,data)
    // }, 
    // update(data){
    //     const url=`jobs/${data.id}`
    //     return axiosClient.patch(url,data)
    // },
    // remove(id){
    //     const url=`jobs/${id}`
    //     return axiosClient.delete(url)
    // }
}

export default countries ;