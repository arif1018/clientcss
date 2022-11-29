import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paidLeaveServices from "./paidLeaveServices";

const initialState = {
  paidleave: [],
  paidleaveTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addPaidLeaveData = createAsyncThunk(
  "paidLeave/add",
  async (PaidLeaveData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await paidLeaveServices.addPaidLeaveData(PaidLeaveData);
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

export const getPaidLeaveData = createAsyncThunk(
  "paidLeave/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await paidLeaveServices.getPaidLeaveData();
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

const paidLeaveSlice = createSlice({
  name: "paidLeave",
  initialState,
  reducers: {
    reset: () => initialState,
    addPaidLeave: (state, action) => {
      state.paidleaveTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaidLeaveData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.paidleave = action.payload;
      })
      .addCase(addPaidLeaveData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPaidLeaveData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.paidleave.push(action.payload);
      })
      .addCase(addPaidLeaveData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, addPaidLeave } = paidLeaveSlice.actions;

export default paidLeaveSlice.reducer;

// ,extraReducers: (builder) => {
//     builder
//         .addCase(addPaidLeaveData.pending, (state) => { state.isLoading = true })
//         .addCase(addPaidLeaveData.fulfilled, (state, action) => {
//             state.isLoading = false
//             state.isSuccess = true
//             console.log("action.payload", action.payload)
//             state.paidLeave.push(action.payload)
//         })
//         .addCase(addPaidLeaveData.rejected, (state, action) => {
//             state.isSuccess = false
//             state.isError = true
//             state.message = action.payload
//         })

// .addCase(getAllClients.pending, (state) => { state.isLoading = true })
// .addCase(getAllClients.fulfilled, (state, action) => {
//     state.isLoading = false
//     state.isSuccess = true
//     state.clients = action.payload
// })
// .addCase(getAllClients.rejected, (state, action) => {
//     state.isSuccess = false
//     state.isError = true
//     state.message = action.payload
// })
