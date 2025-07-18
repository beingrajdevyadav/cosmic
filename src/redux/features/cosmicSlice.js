import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    dob: '',
    lifePathNum: "",
    soulUrgeNum: "",
    destinyNum: "",
    personalityNum: '',
    astroSign: '',

}
const cosmicSlice = createSlice({
    name: "cosmic",
    initialState,

    reducers: {
        setCosmicData: (state, action) => {
            return { ...state, ...action.payload };
        },

        clearCosmicData: () => {
          return  initialState
        },
    },
});

export const { setCosmicData, clearCosmicData } = cosmicSlice.actions;
export default cosmicSlice.reducer;
