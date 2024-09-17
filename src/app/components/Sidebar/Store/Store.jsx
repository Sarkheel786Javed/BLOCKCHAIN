import { configureStore } from '@reduxjs/toolkit'
import SideBarSlice from '../Slice/SidebarSlice'
export default configureStore({
  reducer: {
    Sidebar: SideBarSlice
  },
})