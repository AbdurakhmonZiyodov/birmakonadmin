import React from "react"
import { Alert, Platform } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { baseUrl } from "../api"
import { services } from "../services"
import useRedux from "./useRedux"

const defaultState = {
    login: "",
    name: "",
    phone: "",
    email: "",
    gender: null,
    birthday: null,
    photo: {
    },
    addresses: [],
    date: "",
    last_address: "",
    old_password: "",
    password: "",
    repeat_password: "",
    loading: false
}
const useAccount = () => {

    const [state, setState] = React.useState(defaultState)
    const [auth] = useRedux(({ auth }: any) => auth)

    const accountRequests = {
        getAccountInformation: async () => {
            try {
                const res = await services.profile.profileGet()
                const data = await res.data.data
                setState(s => ({
                    ...s, ...data,
                    old_password: auth?.password,
                    password: auth?.password,
                    repeat_password: auth?.password,
                    photo: { ...s.photo, uri: baseUrl + data.photo }
                }))
            } catch (error) {
                console.log("error get information:", error)
            }
        },

        updateAccountInformation: async () => {
            const formData = new FormData()
            console.log("clicked")
            if (state.password !== state.repeat_password) Alert.alert("Yangi parolni takrorlang");
            if (!state.name) return Alert.alert("ошибка имени пользователя")
            if (!state.phone) return Alert.alert("ошибка phone")
            if (!state.email) return Alert.alert("ошибка email")
            const data = {
                name: state.name,
                phone: state.phone,
                email: state.email,
                password: state.password,
                photo: state.photo
            }

            const appendFormData = (key: string, item: any) => {
                if (key === 'photo' && Object.keys(item).length !== 3) {
                    console.log("photo errror")
                    return;
                }
                if (item === undefined || item === null || item === '') return;
                return formData.append(key, item)
            }

            for (let key in data) {

                appendFormData(key, data[key])
            }

            console.log('====================================');
            console.log(JSON.stringify(formData, null, 4));
            console.log('====================================');

            try {
                setState(s => ({ ...s, loading: true }))
                const res = await services.profile.profileUpdate(formData)
                const data = await res.data
                setState(s => ({ ...s, loading: false }))
                console.log("data:", data)
                Alert.alert("данные обновлены")
            } catch (error) {
                setState(s => ({ ...s, loading: false }))
                Alert.alert("ошибка при вводе данных")
            }
        },

        clearAll: () => {
            setState(defaultState)
        }
    }

    const imageUpdate = async () => {
        try {
            const res: any = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
                selectionLimit: 1,
            })

            setState((s: any) => ({
                ...s, photo: {
                    uri: Platform.OS === 'android' ? res?.assets[0]?.uri : res?.assets[0]?.uri?.replace("file://", ""),
                    type: res?.assets[0]?.type,
                    name: res?.assets[0].fileName
                }
            }))
        } catch (error) {
            console.log("error:", error)
        }
    }

    const onChange = (keyName: string, value: string) => {
        setState(s => ({ ...s, [keyName]: value }))
    }


    return {
        accountRequests,
        user: {
            ...state,
            onChange,
            imageUpdate
        }
    }
}

export default useAccount