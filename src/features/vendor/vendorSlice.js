import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import vendorServices from "./vendorService";

const initialState = {
  Vendor: [],
  VendorTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addVendorData = createAsyncThunk(
  "Vendor/add",
  async (vendorData, thunkAPI) => {
    try {
      const result = await vendorServices.addVendorData(vendorData);
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

export const getVendorData = createAsyncThunk(
  "Vendor/get",
  async (_, thunkAPI) => {
    try {
      const result = await vendorServices.getVendorData();
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

const vendorSlice = createSlice({
  name: "Vendor",
  initialState,
  reducers: {
    reset: () => initialState,
    saveVendorData: (state, action) => {
      state.VendorTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVendorData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Vendor = action.payload;
      })
      .addCase(addVendorData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addVendorData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Vendor.push(action.payload);
      })
      .addCase(addVendorData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, saveVendorData } = vendorSlice.actions;

export default vendorSlice.reducer;
