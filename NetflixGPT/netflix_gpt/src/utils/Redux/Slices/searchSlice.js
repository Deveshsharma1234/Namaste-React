import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: null,
    reducers: {
        setSearch: (state, action) => {
            return action.payload;
        },
        clearSearch: (state, acton) => {
            return null
        }

    }
})
export const { setSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;