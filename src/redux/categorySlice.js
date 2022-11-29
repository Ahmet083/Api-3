import { createSlice } from "@reduxjs/toolkit";


const initialState = null


const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducer: {
        setCategory: (state, action) => {
            console.log("SET CATEGORY ACTION",  action.payload )
           
            state.categories = action.payload

            return action.payload
        }
    }
})

export const {setCategory} = categorySlice.actions

export default categorySlice.reducer