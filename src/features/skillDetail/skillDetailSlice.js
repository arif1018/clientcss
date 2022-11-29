import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import skillDetailServices from "./skillDetailServices";

const initialState = {
  SkillDetail: [],
  SkillDetailTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addSkillDetailData = createAsyncThunk(
  "SkillDetail/add",
  async (SkillDetailData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await skillDetailServices.addSkillDetailData(SkillDetailData);
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


export const getSkillDetailData = createAsyncThunk(
  "SkillDetail/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await skillDetailServices.getSkillDetailData();
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

const skillDetailSlice = createSlice({
  name: "SkillDetail",
  initialState,
  reducers: {
    reset: () => initialState,
    saveSkillDetailData: (state, action) => {
      state.SkillDetailTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getSkillDetailData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.SkillDetail = action.payload;
    })
      .addCase(addSkillDetailData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSkillDetailData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.SkillDetail.push(action.payload);
      }) 
      .addCase(addSkillDetailData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset,saveSkillDetailData } = skillDetailSlice.actions;

export default skillDetailSlice.reducer;