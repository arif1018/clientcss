import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invoiceProfileServices from "./invoiceProfileService";

const initialState = {
  InvoiceProfile: [],
  InvoiceProfileTemp: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const addInvoiceProfileData = createAsyncThunk(
  "InvoiceProfile/add",
  async (invoiceProfileData, thunkAPI) => {
    try {
      const result = await invoiceProfileServices.addInvoiceProfileData(
        invoiceProfileData
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

export const getInvoiceProfileData = createAsyncThunk(
  "InvoiceProfile/get",
  async (_, thunkAPI) => {
    try {
      const result = await invoiceProfileServices.getInvoiceProfileData();
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

const invoiceProfileSlice = createSlice({
  name: "InvoiceProfile",
  initialState,
  reducers: {
    saveInvoiceData: (state, action) => {
      state.InvoiceProfileTemp = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addInvoiceProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addInvoiceProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.InvoiceProfile.push(action.payload);
      })
      .addCase(addInvoiceProfileData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getInvoiceProfileData.fulfilled, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.InvoiceProfile = action.payload;
      });
  },
});

export const { reset, saveInvoiceData } = invoiceProfileSlice.actions;

export default invoiceProfileSlice.reducer;
