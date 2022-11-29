import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import dropDownServices from "./dropDownService";


const initialState = {
    DropDown: [],
    DropDownTemp: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}

export const addDropDownData = createAsyncThunk("DropDown/add",async(dropDownData, thunkAPI)=>{
    try {
        const result = await dropDownServices.addDropDownData(dropDownData)
        return result
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})

export const getDropDownData = createAsyncThunk("DropDown/get",async(_, thunkAPI)=>{
    try {
        const result = await dropDownServices.getDropDownData()
        return result
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})

const dropDownSlice = createSlice({
    name: "DropDown",
    initialState,
    reducers: {
        reset:() => initialState,
        saveDropDownData: (state, action) => {
            state.DropDownTemp = action.payload;
          },
    },extraReducers:(builder)=>{
        builder
        .addCase(addDropDownData.pending, (state)=>{state.isLoading=true})
        .addCase(addDropDownData.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.DropDown.push(action.payload)
        })
        .addCase(addDropDownData.rejected,(state, action)=>{
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDropDownData.fulfilled,(state, action)=>{
            state.isSuccess = true
            state.isError = false
            state.DropDown = action.payload
        })
    }

})


export const {reset, saveDropDownData} = dropDownSlice.actions

export default dropDownSlice.reducer