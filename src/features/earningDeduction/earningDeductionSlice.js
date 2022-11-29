import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import earningDeductionServices from './earningDeductionService'

const initialState = {
    earningDatas: [],
    earningDataTemp:{},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "" 
}

export const addEarningDeductionData = createAsyncThunk("EarningDeduction/add",async(earningDeductionData, thunkAPI)=>{
    try {
        const result = await earningDeductionServices.addEarningDeductionData(earningDeductionData)
        return result
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})

export const getEarningDeductionData = createAsyncThunk("EarningDeduction/get",async(_, thunkAPI)=>{
    try {
        const result = await earningDeductionServices.getEarningDeductionData()
        return result
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})

const earningDeductionSlice = createSlice({
    name: "EarningDeduction",
    initialState,
    reducers: {
        reset:() => initialState,
        saveEarningDeductionData: (state, action) => {
            state.earningDataTemp = action.payload;
          },
    },extraReducers:(builder)=>{
        builder
        .addCase(addEarningDeductionData.pending, (state)=>{state.isLoading=true})
        .addCase(addEarningDeductionData.fulfilled, (state, action)=>{
            console.log(action.payload)
            state.isLoading = false
            state.isSuccess = true
            state.earningDatas.push(action.payload)
        })
        .addCase(addEarningDeductionData.rejected,(state, action)=>{
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        
        .addCase(getEarningDeductionData.fulfilled,(state, action)=>{
            state.isSuccess = true
            state.isError = false
            state.earningDatas = action.payload
        });
    }
})

export const {reset, saveEarningDeductionData} = earningDeductionSlice.actions

export default earningDeductionSlice.reducer