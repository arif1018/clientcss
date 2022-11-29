import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mailingLabelServices from "./mailingLabelServices";

const initialState = {
  MailingLabel: [],
  MailingLabelTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addMailingLabelData = createAsyncThunk(
  "MailingLabelData/add",
  async (mailingLabelDataData, thunkAPI) => {
    try {
      const result = await mailingLabelServices.addMailingLabelData(
        mailingLabelDataData
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

export const getfuncMailingLabelData = createAsyncThunk(
  "MailingLabelData/get",
  async (_, thunkAPI) => {
    try {
      const result = await mailingLabelServices.getMailingLabelData();
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

const mailingLabelSlice = createSlice({
  name: "MailingLable",
  initialState,
  reducers: {
    reset: () => initialState,
    saveMailingLabelData: (state, action) => {
      state.MailingLabelTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getfuncMailingLabelData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.MailingLabel = action.payload;
      })
      .addCase(addMailingLabelData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMailingLabelData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.MailingLabel.push(action.payload);
      })
      .addCase(addMailingLabelData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, saveMailingLabelData } = mailingLabelSlice.actions;

export default mailingLabelSlice.reducer;
