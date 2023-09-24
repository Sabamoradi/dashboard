import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


export interface State {
    Click_Btn: boolean;
    
};
const initialState: State = {
    Click_Btn:false
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        set_ClickBtn:(state,action)=>{
            state.Click_Btn = action.payload
        }
    },
});

export const {
    set_ClickBtn
} = customerSlice.actions;

export const selectBS_HcpFilter = (state: RootState) => state.customer.Click_Btn;

export default customerSlice.reducer;