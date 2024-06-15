import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/Counter/CounterSlices"

const store = configureStore({

    reducer:{
        counter: counterReducer
    }
})

export default store