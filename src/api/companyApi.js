import axiosClient from "./axiosClient";

const API_URL=process.env.REACT_APP_API_URL;
const companyApi={
    getAll(){
        return axiosClient.get(API_URL+"/public/employers/"); //{params}
    }, 
    // get(id){
    //     const url=`companys/${id}`
    //     return axiosClient.get(url)
    // },
    // add(data){
    //     const url='companys'
    //     return axiosClient.post(url,data)
    // }, 
    // update(data){
    //     const url=`companys/${data.id}`
    //     return axiosClient.patch(url,data)
    // },
    // remove(id){
    //     const url=`companys/${id}`
    //     return axiosClient.delete(url)
    // }
}

export default companyApi ;