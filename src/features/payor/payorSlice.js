import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import payorServices from "../payor/payorService";

const initialState = {
  Payor: [],
  PayorTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addPayorData = createAsyncThunk(
  "Payor/add",
  async (payorData, thunkAPI) => {
    try {
      const result = await payorServices.addPayorData(payorData);
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

export const getPayorData = createAsyncThunk(
  "Payor/get",
  async (_, thunkAPI) => {
    try {
      const result = await payorServices.getPayorData();
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

const payorSlice = createSlice({
  name: "Payor",
  initialState,
  reducers: {
    reset: () => initialState,
    savePayorData: (state, action) => {
      state.PayorTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPayorData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Payor = action.payload;
      })
      .addCase(addPayorData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPayorData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Payor.push(action.payload);
      })
      .addCase(addPayorData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, savePayorData } = payorSlice.actions;

export default payorSlice.reducer;
