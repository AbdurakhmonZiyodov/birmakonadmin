import { createSlice } from "@reduxjs/toolkit"
import { services } from "../../services"
import { statusType } from "../types/statusType"

const initialState = {
    orders_list: [],
    orders: { status: statusType.idle }
}

const orders = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        ordersRequest: (state) => ({
            ...state,
            orders: { status: statusType.pending, error: undefined }
        }),
        ordersFailure: (state, action) => ({
            ...state,
            orders: { status: statusType.rejected, error: action.payload }
        }),
        ordersSuccess: (state, action) => ({
            ...state,
            orders: { status: statusType.resolved, error: undefined },
            orders_list: action.payload
        }),
        clearOrdersList: (state) => ({
            ...state,
            orders_list: []
        })
    }
})

const {
    ordersFailure,
    ordersRequest,
    ordersSuccess,
    clearOrdersList
} = orders.actions

export const getAllOrders = () => async (dispatch: any) => {
    dispatch(ordersRequest())
    console.log('====================================');
    console.log("ordersRequest");
    console.log('====================================');

    try {
        const res = await services.orders.allOrdersGet()
        const data = await res.data?.data

        dispatch(ordersSuccess(data))
        console.log('====================================');
        console.log("ordersSuccess");
        console.log('====================================');
    } catch (error) {

        dispatch(ordersFailure(error))
        console.log('====================================');
        console.log("ordersFailure");
        console.log('====================================');

        console.log(error)
    }
}

export {
    clearOrdersList
}


export default orders.reducer
