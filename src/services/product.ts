import $api from "../api"
import store from "../redux/store"

const product = {
    create: (data: any) => $api.post('/dashboard/product/create', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }),
    category: () => $api.get(`/dashboard/category?type=product`),
    childCategory: (id: number) => $api.get(`/dashboard/category/sub-category?id=${id}`),
    getAllBreands: () => $api.get(`/dashboard/brand`),
    categoryFilter: (id: number) => $api.get(`/dashboard/category/filter?category_id=${id}`),
    getProducts: () => $api.get('/dashboard/product', {
        params: {
            page: store.getState().productCards.currentPage,
            // brand_id:,
            // category_id
        }
    }),
    getProduct: (id: number) => $api.get(`/dashboard/product/detail?id=${id}`),
    updateProduct: (id: number, data: any) => $api.post(`/dashboard/product/create?id=${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }),
    deleteProduct: (id: number) => $api.post('/dashboard/product/remove', { id }),
    blockProduct: (id: number) => $api.post('/dashboard/product/lock', { product_id: id }),
    unlockProduct: (id: number) => $api.post('dashboard/product/unlock', { product_id: id }),
    measurements: () => $api.get('/dashboard/category?type=unit')

}

export default product