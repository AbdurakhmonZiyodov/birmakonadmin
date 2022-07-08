import React from 'react'
import { Alert } from 'react-native'
import { services } from '../services'

const defaultState = {
    user: {

    },
    shopSeller: {

    },
    loading: false
}

const useShopDanniy = () => {

    const [state, setState] = React.useState(defaultState)


    const requests = {
        getMagazinDanny: async () => {
            try {
                const res = await services.profile.shopGet()
                const data = await res.data.data
                setState(s => ({ ...s, ...data }))
            } catch (error) {
                console.log(error)
            }
        },
        clearAll: () => {
            setState(defaultState)
        },
        updateMagazinDanny: async () => {
            const form = new FormData()
            const data = {
                name_ru: state?.name,
                name_uz: state?.name,
                name_en: state?.name,
                description_ru: state?.description,
                description_uz: state?.description,
                description_en: state?.description,
                map_location: state?.map_location,
                inn: state.shopSeller?.inn,
                account: state.shopSeller?.account,
                bank: state.shopSeller?.bank,
                address_legal: state.shopSeller?.address_legal,
                oked: state.shopSeller?.oked,
                okohx: state.shopSeller?.okohx,
                mfo: state.shopSeller?.mfo,
                contact_user: state?.contact_user,
                contact_phone: state?.contact_phone
            }

            for (let key in data) {
                form.append(key, data[key])
            }

            console.log("form:::", form)

            try {
                setState(s => ({ ...s, loading: true }))
                const res = await services.profile.shopUpdate(form)
                console.log('====================================');
                console.log("success:", res.data);
                console.log('====================================');
                setState(s => ({ ...s, loading: false }))
                Alert.alert("данные обновлены")
            } catch (error) {
                setState(s => ({ ...s, loading: false }))
                Alert.alert('ошибка при вводе данных')
                console.log('====================================');
                console.log("error:", error)
                console.log('====================================');
            }
        }
    }

    return {
        state,
        setState,
        requests
    }
}

export default useShopDanniy