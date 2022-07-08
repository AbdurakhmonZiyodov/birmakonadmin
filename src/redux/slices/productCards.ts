import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import { services } from '../../services'
import { AppDispatch, getStateType } from '../store'
import { statusType } from '../types/statusType'

const initialState = {
    products_list: [],
    currentPage: 1,
    pageCount: 1,
    isNextPagePressed: true,
    products_status: { status: statusType.idle },
    isOneLoading: true,
    visibleModal: false,
    ids: {
        brand_id: undefined,
        category_id: undefined,
        podcategory_id: undefined
    }
}

const productCards = createSlice({
    name: "productCards",
    initialState,
    reducers: {
        productsRequest: (state) => ({
            ...state,
            products_status: {
                status: statusType.pending,
                error: undefined
            }
        }),
        productsSuccess: (state, action: PayloadAction<{ data: any, pageCount: number }>) => ({
            ...state,
            products_list: action.payload.data,
            pageCount: action.payload.pageCount,
            isOneLoading: false,
            products_status: {
                status: statusType.resolved,
                error: undefined
            }
        }),
        productsFailure: (state, action: PayloadAction<any>) => ({
            ...state,
            products_status: {
                status: statusType.rejected,
                error: action.payload
            }
        }),
        pressNextPage: (state: any, action: PayloadAction<{ data: any, pageCount: number; }>) => {
            if (state.currentPage + 1 <= action.payload.pageCount)
                return {
                    ...state,
                    currentPage: state.currentPage + 1,
                    isNextPagePressed: true,

                    products_list: [
                        ...state.products_list,
                        ...action.payload.data
                    ],
                    products_status: { status: statusType.resolved },
                    pageCount: action.payload.pageCount
                }

            return {
                ...state,
                products_status: { status: statusType.resolved },
                isNextPagePressed: false,
                currentPage: state.currentPage + 1,
            }
        },
        deleteProduct: (state, action: PayloadAction<number>) => ({
            ...state,
            products_list: state.products_list
                .filter((p: any) => p?.id !== action.payload)
        }),
        changeVisibleModalProduct: (state, action: PayloadAction<boolean>) => ({
            ...state,
            visibleModal: action.payload
        }),

    }
})

const {
    pressNextPage,
    productsFailure,
    productsRequest,
    productsSuccess,
    deleteProduct,
    changeVisibleModalProduct
} = productCards.actions

const onGetProducts = () => async (dispatch: AppDispatch, getState: getStateType) => {
    dispatch(productsRequest())
    console.log('====================================');
    console.log("productsRequest");
    console.log('====================================');

    try {

        const res = await services.product.getProducts()
        const data = await res.data
        const pageCount = data?._meta?.pageCount

        dispatch(productsSuccess({ data: data.data ?? [], pageCount }))
    } catch (error: any) {
        dispatch(productsFailure(error))
        console.log('====================================');
        console.log("productsFailure");
        console.log('====================================');
        Alert.alert("Не удалось загрузить товары")
        console.log(JSON.stringify(error.response, null, 4));
    }
}

const onDeleteProduct = (id: number) => async (dispatch: AppDispatch) => {
    if (id === null || id === undefined || id < 0) return;
    try {
        const res = await services.product.deleteProduct(id)
        const data = await res.data?.data
        dispatch(deleteProduct(id))

        console.log("delete product success")
    } catch (error) {
        console.log("delete product failure")
        console.log(error)
    }
}

const onLockProduct = (id: number) => async () => {
    if (id === null || id === undefined || id < 0) return;
    try {
        const res = await services.product.blockProduct(id)
        const data = await res.data
        console.log("onLockProduct success")

        return data
    } catch (error) {
        console.log("onLockProduct Failure")
        console.log(error)
    }
}

const onUnlockProduct = (id: number) => async () => {
    if (id === null || id === undefined || id < 0) return;
    let data;
    try {
        const res = await services.product.unlockProduct(id)
        data = await res.data
        console.log("unlock product success")
    } catch (error) {
        console.log("onUnlockProduct Failure")
        console.log(error)
    }

    return data
}

const onPressNextPage = () => async (dispatch: AppDispatch, getState: getStateType) => {

    if (!getState().productCards.isNextPagePressed) return;

    dispatch(productsRequest())
    console.log('====================================');
    console.log("productsRequest");
    console.log('====================================');

    try {

        const res = await services.product.getProducts()
        const data = await res.data
        const pageCount = data?._meta?.pageCount
        dispatch(pressNextPage({ data: data?.data, pageCount: pageCount }))
        console.log('====================================');
        console.log("pressNextPage success");
        console.log('====================================');
    } catch (error) {
        dispatch(productsFailure(error))
        console.log('====================================');
        console.log("productsFailure");
        console.log('====================================');
    }
}
export {
    onGetProducts,
    onDeleteProduct,
    onLockProduct,
    onUnlockProduct,
    onPressNextPage,
    changeVisibleModalProduct
}
export default productCards.reducer