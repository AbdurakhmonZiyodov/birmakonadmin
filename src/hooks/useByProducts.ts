import React from 'react'
import { Alert } from 'react-native';
import { services } from '../services'

const initialState: any = [];
const useByProducts = () => {

    const [data, setData] = React.useState(initialState)
    const [loading, setLoading] = React.useState(false)
    const requests = {
        getAllOrders: async () => {
            try {
                const res = await services.orders.allOrdersGet()
                const data = await res.data?.data
                setData(() => (data))
                setLoading(false)
            } catch (error) {
                setLoading(false)
                Alert.alert(error.message)
                console.log("error", error)
            }
        },
        clearAll: async () => {
            await setData(() => (initialState))
        }
    }

    return {
        requests,
        data,
        setData,
        loading
    }
}

export default useByProducts