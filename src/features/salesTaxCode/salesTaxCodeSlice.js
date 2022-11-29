import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import salesTaxCodeServices from "./salesTaxCodeServices";

const initialState = {
  SalesTaxCode: [],
  SalesTaxCodeTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addSalesTaxCodeData = createAsyncThunk(
  "SalesTaxCodeData/add",
  async (SalesTaxCodeData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await salesTaxCodeServices.addSalesTaxCodeData(SalesTaxCodeData);
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

export const getSalesTaxCodeData = createAsyncThunk(
  "SalesTaxCodeData/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await salesTaxCodeServices.getSalesTaxCodeData();
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

const salesTaxCodeSlice = createSlice({
  name: "SalesTaxCodeData",
  initialState,
  reducers: {
    reset: () => initialState,
    saveSalesTaxCodeData: (state, action) => {
      state.SalesTaxCodeTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSalesTaxCodeData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSalesTaxCodeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.SalesTaxCode.push(action.payload);
      })
      .addCase(addSalesTaxCodeData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSalesTaxCodeData.fulfilled, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.SalesTaxCode = action.payload;
      })
  },
});

export const { reset,saveSalesTaxCodeData } = salesTaxCodeSlice.actions;

export default salesTaxCodeSlice.reducer;