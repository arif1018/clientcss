// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import intouchService from "./intouchService";
// const initialState = {
//   Intouches: [],

//   Intouch: {},

//   isLoading: false,
//   isError: false,
//   isSuccess: false,
//   message: "",
// };

// export const getAllIntouch = createAsyncThunk(
//   "branch/getallbr",
//   async (_, thunkAPI) => {
//     try {
//       return await intouchService.getAllIntouch();
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// const intouchSlice = createSlice({
//   name: "Intouches",
//   initialState,
//   reducers: {
//     saveIntouchForm: (state, action) => {
//       console.log("this is my action", action.payload);
//       state.Intouch = action.payload;
//     },
//     reset: () => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllIntouch.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getAllIntouch.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.branches = action.payload;
//       })
//       .addCase(getAllIntouch.rejected, (state, action) => {
//         state.isSuccess = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });

// export const { reset, saveIntouchForm } = intouchSlice.actions;
// export default intouchSlice.reducer;
