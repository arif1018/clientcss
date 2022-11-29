import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import holidayServices from "./holidayServices";

const initialState = {
  Holiday: [],
  HolidayTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addholidayData = createAsyncThunk(
  "Holiday/add",
  async (holidaData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await holidayServices.addholidaData(holidaData);
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

export const getholidayData = createAsyncThunk(
  "Holiday/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await holidayServices.getholidaData();
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

const holidaySlice = createSlice({
  name: "holiday",
  initialState,
  reducers: {
    reset: () => initialState,
    saveHolidayData: (state, action) => {
      state.HolidayTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getholidayData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Holiday = action.payload;
    })
      .addCase(addholidayData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addholidayData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Holiday.push(action.payload);
      })
      .addCase(addholidayData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset,saveHolidayData } = holidaySlice.actions;

export default holidaySlice.reducer;
