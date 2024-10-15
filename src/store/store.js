import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from '../store/cartSlicer'

const store = configureStore({
    reducer:{
        cart:cartSlicer,
    }
})
export default store;