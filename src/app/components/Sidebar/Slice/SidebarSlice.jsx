import { createSlice } from '@reduxjs/toolkit'


export const SidebarSlice = createSlice({
  
  name: 'Sidebar',
  initialState: {
    value: window.innerWidth <= 767 ? true : false,
  },
  reducers: {
    isSidebarOpen: (state) => {
      state.value = true
    },
    isSidebarClose: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { isSidebarOpen, isSidebarClose } = SidebarSlice.actions

export default SidebarSlice.reducer