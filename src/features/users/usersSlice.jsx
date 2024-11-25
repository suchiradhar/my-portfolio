import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "John Doe" },
    { id: "1", name: "Jane Smith" },
    { id: "2", name: "Alice Brown" },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {} // You can leave this empty if you don't need to modify users
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;