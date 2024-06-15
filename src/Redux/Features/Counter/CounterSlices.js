import { createSlice } from "@reduxjs/toolkit"



 const initialState  = {
count: 0
 }


  const counterSlice = createSlice({

    name : "counter",
    initialState,
    reducers :{

        incremnet : (state) => {

            state.count = state.count + 1
        },
        decremnet : (state) => {

            state.count = state.count - 1
        }
    }
  })

  export const {incremnet , decremnet} = counterSlice.actions

  export default counterSlice.reducer