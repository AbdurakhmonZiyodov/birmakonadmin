import $api from "../api"




export default {
    allOrdersGet: () => $api.get("/dashboard/order")
}