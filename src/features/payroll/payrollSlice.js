import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import payrollServices from "./payrollServices";

const initialState = {
  Payroll: [],
  PayrollTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addPayRollData = createAsyncThunk(
  "Payroll/add",
  async (payrollData, thunkAPI) => {
    try {
      const result = await payrollServices.addPayRollData(payrollData);
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

export const getPayRollData = createAsyncThunk(
    "Payroll/get",
    async (_, thunkAPI) => {
      try {
        const result = await payrollServices.getPayRollData();
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



const payrollSlice = createSlice({
  name: "Payroll",
  initialState,
  reducers: {
    reset: () => initialState,
    savePayrollData: (state, action) => {
      state.PayrollTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPayRollData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Payroll = action.payload;
      })
      .addCase(addPayRollData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPayRollData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Payroll.push(action.payload);
      })
      .addCase(addPayRollData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, savePayrollData } = payrollSlice.actions;

export default payrollSlice.reducer;
