import { services } from "../services";
import React, { useState } from 'react'

const initialState = {
    pending: null,
    accepted: null,
    canceled: null,
    delivery: null,
    confirmationPending: null
}

const useMyOrders = () => {
    const [state, setState] = useState(initialState)

    async function onPending() {
        try {
            const res = await services.orders.pendingGet()
            const data = await res.data
            setState(oldState => ({ ...oldState, pending: data }))
        } catch (error) {
            console.log(error)
        }
    }

    async function onAccepted() {
        try {
            const res = await services.orders.acceptedGet()
            const data = await res.data
            setState(oldState => ({ ...oldState, accepted: data }))
        } catch (error) {
            console.log(error)
        }
    }

    async function onCanceled() {
        try {
            const res = await services.orders.canceledGet()
            const data = await res.data
            setState(oldState => ({ ...oldState, canceled: data }))
        } catch (error) {
            console.log(error)
        }
    }

    async function OnDelivery() {
        try {
            const res = await services.orders.delivery()
            const data = await res.data
            setState(oldState => ({ ...oldState, delivery: data }))
        } catch (error) {
            console.log(error)
        }
    }

    async function onConfirmationPending() {
        try {
            const res = await services.orders.confirmationPending()
            const data = await res.data
            setState(oldState => ({ ...oldState, confirmationPending: data }))
        } catch (error) {
            console.log(error)
        }
    }

    const onGetAllStatus = async () => {
        try {
            await onPending()
            await onAccepted()
            await onCanceled()
            await OnDelivery()
            await onConfirmationPending()
        } catch (error) {
            console.log(error)
        }
    }

    return { state, onGetAllStatus }
}

export default useMyOrders

