import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import regionServices from "./regionServices";

const initialState = {
  Region: [],
  RegionTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addRegionData = createAsyncThunk(
  "Region/add",
  async (regionData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await regionServices.addRegionData(regionData);
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

export const getRegionData = createAsyncThunk(
  "Region/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await regionServices.getRegionData();
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

const RegionSlice = createSlice({
  name: "Region",
  initialState,
  reducers: {
    reset: () => initialState,
    saveRegionData: (state, action) => {
      state.RegionTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addRegionData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRegionData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Region.push(action.payload);
      })
      .addCase(addRegionData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRegionData.fulfilled, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.Region = action.payload;
      })
  },
});

export const { reset,saveRegionData } = RegionSlice.actions;

export default RegionSlice.reducer;
