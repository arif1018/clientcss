import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import burderGroupServices from "./burderGroupServices";

const initialState = {
  BurdenGroup: [],
  BurdenGroupTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addburdernGroupData = createAsyncThunk(
  "BurdernGroup/add",
  async (burdernGroupData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await burderGroupServices.addburdernGroupData(
        burdernGroupData
      );
      return result;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const getburdernGroupData = createAsyncThunk(
  "BurdernGroup/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await burderGroupServices.getburdernGroupData();
      return result;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const

const burdernGroupSlice = createSlice({
  name: "BurdernGroup",
  initialState,
  reducers: {
    reset: () => initialState,
    saveburdernGroupData: (state,action)=>{
        state.BurdenGroupTemp = action.payload
    }
  },
    extraReducers: (builder) => {
      builder
      .addCase(getburdernGroupData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.BurdenGroup = action.payload;
      })
        .addCase(addburdernGroupData.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addburdernGroupData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.BurdenGroup.push(action.payload);
        })
        .addCase(addburdernGroupData.rejected, (state, action) => {
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
        });
    },
});

export const { reset ,saveburdernGroupData} = burdernGroupSlice.actions;

export default burdernGroupSlice.reducer;
