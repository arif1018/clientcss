import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import credentialsServices from "./credentialsServices";

const initialState = {
  Credentials: [],
  CredentialsTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addCredentialsData = createAsyncThunk(
  "Credentials/add",
  async (credenttialData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await credentialsServices.addCredentialsData(
        credenttialData
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

export const getCredentialsData = createAsyncThunk(
  "Credentials/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await credentialsServices.getCredentialsData();
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

const credentialsSlice = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    reset: () => initialState,
    saveCredentialsData: (state, action) => {
      state.CredentialsTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCredentialsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Credentials = action.payload;
    })
      .addCase(addCredentialsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCredentialsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Credentials.push(action.payload);
      })
      .addCase(addCredentialsData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, saveCredentialsData } = credentialsSlice.actions;

export default credentialsSlice.reducer;
