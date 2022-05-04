import axios from "axios";
import axiosClient from "./axiosClient";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { setMessage } from "../slices/message";
import authHeaderFile from "services/auth-header-file";
import authHeader from "services/auth-header";
const API_URL = process.env.REACT_APP_API_URL;

const memberApi = {
  getMember() {
    return axiosClient.get(API_URL + "/members/");
  },
  update(data) {
    return axios
      .patch(API_URL + "/members/", data, { headers: authHeader() })
      .then((response) => {
        if (response) {
          return response;
        }
      })
      .catch((error) => {
        console.log("error");
      });
  },

  // get(){
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
};
export const update_member = createAsyncThunk(
  "members/update",
  async (data, thunkAPI) => {
    try {
      const response = await memberApi.update(data);
      thunkAPI.dispatch(setMessage(response.data && response.data.message));
      console.log('khong vao ak?')
      return response;
    } catch (error) {
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export default memberApi;
