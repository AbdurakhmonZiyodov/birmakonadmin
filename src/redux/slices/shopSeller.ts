import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Alert, Platform } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { baseUrl } from '../../api'
import { services } from '../../services'
import { getStateType } from '../store'
import { statusType } from '../types/statusType'
import { changePasswordAuth } from './auth'

const initialState = {
    isShopUpdate: false,
    isShopUserUdate: false,
    isShopEdit: false,
    isShopUserEdit: false,
    error: undefined,
    data: null,
    userData: null,
    shop: { status: statusType.idle },
    user: { status: statusType.idle },
}

const shopSeller = createSlice({
    name: "shopSeller",
    initialState,
    reducers: {
        shopSellerRequest: (state) => ({
            ...state,
            shop: {
                status: statusType.pending,
                error: undefined
            }
        }),
        shopSellerSuccess: (state: any, action) => ({
            ...state,
            data: {
                ...action.payload
            },
            shop: {
                status: statusType.resolved,
                error: undefined
            }
        }),
        shopSellerFailure: (state, action) => ({
            ...state,
            shop: {
                status: statusType.rejected,
                error: action.payload
            }
        }),
        shopSellerUpdateRequest: state => ({
            ...state,
            isShopUpdate: true
        }),
        shopSellerUpdateFailure: (state, action) => ({
            ...state, isShopUpdate: false,
            error: action.payload
        }),
        shopSellerUpdateSuccess: state => ({
            ...state,
            isShopUpdate: false,
            error: undefined
        }),
        changeShopSellerInput: (state: any, action: PayloadAction<{ key: string; value: string; }>) => {

            if (action.payload.key === 'name') {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        name: action.payload.value
                    }
                }
            }

            return {
                ...state,
                data: {
                    ...state.data,
                    shopSeller: {
                        ...state.data.shopSeller,
                        [action.payload.key]: action.payload.value
                    }
                }
            }
        },
        shopSellerUserRequest: (state) => ({
            ...state,
            user: { status: statusType.pending, error: undefined }
        }),
        shopSellerUserFailure: (state, action) => ({
            ...state,
            user: { status: statusType.rejected, error: action.payload }
        }),
        shopSellerUserSuccess: (state, action) => ({
            ...state,
            userData: action.payload,
            user: { status: statusType.resolved, error: undefined }
        }),
        shopSellerUserUpdateRequest: state => ({
            ...state,
            isShopUserUdate: true,
            error: undefined
        }),
        shopSellerUserUpdateFailure: (state, action) => ({
            ...state,
            error: action.payload,
            isShopUserUdate: false
        }),
        shopSellerUserUpdateSuccess: (state) => ({
            ...state,
            isShopUserUdate: false,
            error: undefined,
        }),
        changeShopSellerUserInput: (state: any, action: PayloadAction<{ key: string; value: string; }>) => ({
            ...state,
            userData: {
                ...state.userData,
                [action.payload.key]: action.payload.value
            }
        }),
        changeShopSellerUserImage: (state: any, action) => ({
            ...state,
            userData: {
                ...state.userData,
                photo: action.payload
            }
        }),
        clearShopSeller: () => initialState,
        shopEditOn: (state) => ({
            ...state,
            isShopEdit: true
        }),
        shopEditOff: (state) => ({
            ...state,
            isShopEdit: false
        }),
        shopUserEditOn: (state) => ({
            ...state,
            isShopUserEdit: true
        }),
        shopUserEditOff: (state) => ({
            ...state,
            isShopUserEdit: false
        }),
    }
})

const {
    shopSellerFailure,
    shopSellerRequest,
    shopSellerSuccess,
    clearShopSeller,
    shopSellerUpdateFailure,
    shopSellerUpdateRequest,
    shopSellerUpdateSuccess,
    changeShopSellerInput,
    shopSellerUserFailure,
    shopSellerUserRequest,
    shopSellerUserSuccess,
    shopSellerUserUpdateFailure,
    shopSellerUserUpdateRequest,
    shopSellerUserUpdateSuccess,
    changeShopSellerUserInput,
    changeShopSellerUserImage,
    shopEditOn,
    shopEditOff,
    shopUserEditOff,
    shopUserEditOn
} = shopSeller.actions

const getShopSeller = () => async (dispatch: any) => {
    dispatch(shopSellerRequest())
    console.log('====================================');
    console.log("shopSellerRequest");
    console.log('====================================');


    try {
        const res = await services.profile.shopGet()
        const data = await res.data?.data

        dispatch(shopSellerSuccess(data))
        console.log('====================================');
        console.log("shopSellerSuccess");
        console.log('====================================');
    } catch (error) {
        dispatch(shopSellerFailure(error))
        console.log('====================================');
        console.log("shopSellerFailure");
        console.log('====================================');
    }
}

const updateShopSeller = () => async (dispatch: any, getState: getStateType) => {
    dispatch(shopSellerUpdateRequest())
    console.log('====================================');
    console.log("shopSellerUpdateRequest");
    console.log('====================================');

    const shopData: any = getState().shopSeller.data

    const dataPayload: any = {
        name_ru: shopData?.name,
        name_uz: shopData?.name,
        name_en: shopData?.name,
        description_ru: shopData?.description,
        description_uz: shopData?.description,
        description_en: shopData?.description,
        map_location: shopData?.map_location,
        inn: shopData.shopSeller?.inn,
        account: shopData.shopSeller?.account,
        bank: shopData.shopSeller?.bank,
        address_legal: shopData.shopSeller?.address_legal,
        oked: shopData.shopSeller?.oked,
        okohx: shopData.shopSeller?.okohx,
        mfo: shopData.shopSeller?.mfo,
        contact_user: shopData?.contact_user,
        contact_phone: shopData?.contact_phone
    }

    // create form data
    const formData = new FormData()

    // appendData fc
    const appentData = (key: string, data: any) => {
        const value = data[key]
        if (value === null || value === undefined || value === '' || value < 0) return;

        return formData.append(key, value)
    }

    for (let key in dataPayload) {
        appentData(key, dataPayload)
    }

    try {
        const res = await services.profile.shopUpdate(formData)
        const data = await res.data?.data

        dispatch(shopSellerUpdateSuccess())
        dispatch(shopEditOff())
        console.log('====================================');
        console.log("shopSellerUpdateSuccess")
        console.log('====================================');
        Alert.alert("Ваши данные успешно обновлены")

    } catch (error) {
        dispatch(shopSellerUpdateFailure(error))
        console.log('====================================');
        console.log("shopSeller failure in update");
        console.log('====================================');

        console.log(error)
    }
}

const shopSellerUserImageUpdate = () => async (dispatch: any) => {
    try {
        const res = await launchImageLibrary({
            mediaType: 'photo',
            quality: 1,
            selectionLimit: 1,
        })

        const data = await res.assets ?? []
        if (!data.length) return;

        const payloadData = {
            uri: Platform.OS === 'android' ? data[0]?.uri : data[0]?.uri?.replace("file://", ""),
            type: data[0]?.type,
            name: data[0]?.fileName
        }

        dispatch(changeShopSellerUserImage(payloadData))
    } catch (error) {
        console.log("error:", error)
    }
}

const getShopSellerUser = () => async (dispatch: any, getState: getStateType) => {
    dispatch(shopSellerUserRequest())
    console.log('====================================');
    console.log("shopSellerUserRequest");
    console.log('====================================');

    try {
        const res = await services.profile.profileGet()
        const data = await res.data?.data

        dispatch(shopSellerUserSuccess({
            ...data,
            password: getState().auth?.password,
            old_password: getState().auth?.password,
            repeat_password: getState().auth?.password,
            photo: { uri: baseUrl + data.photo }
        }))
        console.log('====================================');
        console.log("shopSellerUserSuccess");
        console.log('====================================');
    } catch (error) {
        dispatch(shopSellerUserFailure(error))
        console.log('====================================');
        console.log("shopSellerUserFailure");
        console.log('====================================');

        console.log(error)
    }
}

const updateShopSellerUser = () => async (dispatch: any, getState: getStateType) => {
    dispatch(shopSellerUserUpdateRequest())
    console.log('====================================');
    console.log("shopSellerUserUpdateRequest");
    console.log('====================================');



    const userData: any = getState().shopSeller.userData
    const formData = new FormData()

    if (userData?.password !== userData?.repeat_password) Alert.alert("Yangi parolni takrorlang");
    if (!userData?.name) return Alert.alert("ошибка имени пользователя")
    if (!userData?.phone) return Alert.alert("ошибка phone")
    if (!userData?.email) return Alert.alert("ошибка email")

    const dataPayload: any = {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
        password: userData.password,
        photo: userData.photo
    }

    const appendFormData = (key: string, item: any) => {
        if (key === 'photo' && Object.keys(item).length !== 3) return;
        if (item === undefined || item === null || item === '') return;

        return formData.append(key, item)
    }

    for (let key in dataPayload) {
        const item: any = dataPayload[key]
        appendFormData(key, item)
    }

    try {
        const res = await services.profile.profileUpdate(formData)
        const data = await res.data

        Alert.alert("данные обновлены")
        dispatch(shopSellerUserUpdateSuccess())
        dispatch(changePasswordAuth(dataPayload.password))
        dispatch(shopUserEditOff())
        console.log('====================================');
        console.log("shopSellerUserUpdateSuccess");
        console.log('====================================');
    } catch (error) {
        Alert.alert("ошибка при вводе данных")
        dispatch(shopSellerUserUpdateFailure(error))
        console.log('====================================');
        console.log("shopSellerUserUpdateFailure");
        console.log('====================================');

        console.log(error)
    }
}


export {
    getShopSeller,
    updateShopSeller,
    clearShopSeller,
    changeShopSellerInput,
    getShopSellerUser,
    updateShopSellerUser,
    changeShopSellerUserInput,
    shopSellerUserImageUpdate,
    shopEditOn,
    shopUserEditOn
}
export default shopSeller.reducer