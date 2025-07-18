import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    dob:'',
    lifePathNum: "",
    soulUrgeNum:"",
    destinyNum:"",
    personalityNum:'',
    astroSign:'',

}
const cosmicSlice = createSlice({
    name : "cosmic",

})