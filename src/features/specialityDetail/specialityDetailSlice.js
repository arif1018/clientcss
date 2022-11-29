import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import specialityDetailServices from "./specialityDetailServices";

const initialState = {
  SpecialityDetail: [],
  SpecialityDetailTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addSpecialityDetailData = createAsyncThunk(
  "SpecialityDetail/add",
  async (SpecialityDetailData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await specialityDetailServices.addSpecialityDetailData(SpecialityDetailData);
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

export const getSpecialityDetailData = createAsyncThunk(
  "SpecialityDetail/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await specialityDetailServices.getSpecialityDetailData();
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

const specialityDetailSlice = createSlice({
  name: "SpecialityDetail",
  initialState,
  reducers: {
    reset: () => initialState,
    saveSpecialityDetailData: (state, action) => {
      state.SpecialityDetailTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getSpecialityDetailData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.SpecialityDetail = action.payload;
    })
      .addCase(addSpecialityDetailData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSpecialityDetailData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.SpecialityDetail.push(action.payload);
      })
      .addCase(addSpecialityDetailData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset,saveSpecialityDetailData } = specialityDetailSlice.actions;

export default specialityDetailSlice.reducer;