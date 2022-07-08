import { useState } from "react"
import { services } from "../services"

interface idsTypes {
    brand_id: number | undefined;
    category_id: number | undefined;
    podcategory_id: number | undefined;
}

const initialCategory = { category_data: [], podcategory_data: [], child_podcategory_data: [] }
const useProducts = () => {

    const [product, setProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [loading, setLoading] = useState(false)
    const [brand, setBrand] = useState([])
    const [category, setCategory] = useState(initialCategory)
    const [ids, setIds] = useState<idsTypes>({ brand_id: undefined, category_id: undefined, podcategory_id: undefined })



    const loadMorePage = () => {
        setCurrentPage(currentPage => currentPage + 1)
    }

    const request = {
        getAll: async () => {
            try {
                setLoading(true)
                const res = await services.product.getProducts(currentPage, ids.brand_id, ids.category_id)
                const data: any = await res.data
                setProduct((s: any) => ([...data?.data]))
                setPageCount(data?._meta?.pageCount)
                setLoading(false)
            } catch (error) {
                console.log("error", error)
            }
        },
        deleteItem: async (id: number) => {
            try {
                const res = await services.product.deleteProduct(id)
                setProduct(product => product.filter(pro => pro?.id !== id))
            } catch (error) {
                console.log("error:", error)
            }
        },
        getAllbrands: async () => {
            try {
                const res = await services.product.getAllBreands()
                const data = await res.data?.data
                setBrand(data ?? [])
            } catch (error) {
                console.log(error)
            }
        },
        getAllCategory: async () => {
            try {
                const res = await services.product.category()
                const data = await res.data?.data
                setCategory(s => ({ category_data: data ?? [], podcategory_data: [], child_podcategory_data: [] }))
            } catch (error) {
                console.log(error)
            }
        },
        getPodcategory: async (num: number) => {
            if (typeof num !== 'number') return;
            try {
                const res = await services.product.childCategory(num)
                const data = await res.data?.data
                setCategory(s => ({ ...s, podcategory_data: [...data], child_podcategory_data: [] }))
            } catch (error) {
                console.log(error)
            }
        }
    }

    return {
        product,
        request,
        loadMorePage,
        currentPage,
        pageCount,
        loading,
        brand,
        category,
        setIds,
        ids,
        setCategory
    }
}

export default useProducts