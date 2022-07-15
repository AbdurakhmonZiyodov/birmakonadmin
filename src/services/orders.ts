import $api from "../api"




export default {
    allOrdersGet: () => $api.get("/dashboard/order"),
    pendingGet: () => $api.get('/dashboard/order?status=0'),
    acceptedGet: () => $api.get('/dashboard/order?status=1'),
    canceledGet: () => $api.get('/dashboard/order?status=2'),
    delivery: () => $api.get('/dashboard/order?status=3'),
    confirmationPending: () => $api.get('/dashboard/order?status=9')
}