import React from 'react'
import { Alert, Platform } from 'react-native'
import { services } from '../services'
import { launchImageLibrary } from 'react-native-image-picker'
import { baseUrl } from '../api'

import FormDataApi from "form-data"
import { useAppDispatch, useAppSelector } from '../redux/hooks'

const initialState = {
    name: "",
    category: {
        categories_list: [],
        subcategories_list: [],
        subcategories_childs_list: [],
        selected_subcategories_childs: {},
        selected_category: {},
        selected_subcategory: {},
        last_selected_id: null,
        filter: {
            filter_list: [],
            select_filter_list: [],
            selected_select_value: "",
            select_name: "",
            checkbox_filter_list: [],
            checkbox_name: ""
        }
    },
    brand: {
        brand_list: [],
        selected_brand: {}
    },
    weight: "",
    height: "",
    width: "",
    length: "",
    price: "",
    price_old: "",
    price_opt: "",
    price_opt_small: "",
    discount: "",
    discount_active: false,
    discount_opt: "",
    discount_opt_active: false,
    discount_opt_small: "",
    discount_opt_small_active: false,
    count_price: 0,
    count_price1: 0,
    count_price2: 0,
    photo: {},
    gallery: [],
    description: "",
    status: "create", // create or update,
    loading: false
}

const useProductscards2 = () => {
    const [state, setState] = React.useState(initialState)
    // const dispatch = useAppDispatch()
    // const {} = useAppSelector(({product}) => product)



    const increment = (keyName: string) => {
        setState((s: any) => {
            if (s[keyName] - 1 >= 0)
                return { ...s, [keyName]: s[keyName] - 1 }
            return s
        })
    }

    const decrement = (keyName: string) => {
        setState((s: any) => {
            return { ...s, [keyName]: s[keyName] + 1 }
        })
    }

    const toggleSwitch = (keyName: string) => {
        setState((s: any) => ({ ...s, [keyName]: !s[keyName] }))
    }

    const update_photo = async () => {
        try {
            const res = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
                selectionLimit: 1
            })

            const data: any = (await res?.assets) ?? []
            if (data.length)
                setState(s => ({ ...s, photo: { ...s.photo, uri: Platform.OS === 'android' ? data[0]?.uri : data[0]?.uri.replace("file://", ""), type: data[0]?.type, name: data[0]?.fileName } }))
        } catch (error) {
            console.log(error)
        }
    }

    const photo_delete = () => setState(s => ({ ...s, photo: {} }))

    const update_gallery = async () => {
        try {
            const res = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
                selectionLimit: 15
            })

            const data = (await res?.assets) ?? []

            function setItem(item: any) {
                return {
                    uri: Platform.OS === 'android' ? item?.uri : item?.uri.replace("file://", ""),
                    type: item?.type,
                    name: item?.fileName
                }
            }

            if (data.length)
                setState((s: any) => ({ ...s, gallery: [...s.gallery, ...data.map((item) => setItem(item))] }))
        } catch (error) {
            console.log(error)
        }
    }

    const gallery_item_delete = (id: number) => setState(s => ({ ...s, gallery: s.gallery.filter((_, index) => index !== id) }))

    const toggleCheckbox = (id: number) => {
        setState((s: any) => (
            {
                ...s,
                category: {
                    ...s.category,
                    filter: {
                        ...s.category.filter,
                        checkbox_filter_list: s.category.filter.checkbox_filter_list.map((i: any) => i?.id !== id ? i : { ...i, selected: !i.selected })
                    }
                }
            }))
    }

    const requests = {
        onSave: async () => {
            const form = new FormData()
            const data = {
                name_ru: state.name ?? "",
                name_uz: state.name ?? "",
                name_en: state.name ?? "",
                description_ru: state.description ?? "",
                description_uz: state.description ?? "",
                description_en: state.description ?? "",
                composition_ru: 'Состав',
                composition_en: 'Состав',
                composition_uz: 'Состав',
                recommendation_ru: 'Рекомендации',
                recommendation_uz: 'Рекомендации',
                recommendation_en: 'Рекомендации',
                credit_label: 'кредит до 50 млн. сум',
                price: state.price ?? null,
                price_old: state.price_old ?? null,
                price_opt: state.price_opt ?? null,
                price_opt_small: state.price_opt_small ?? null,
                discount: state.discount_active ? state.discount : null,
                discount_small_count: state.discount_opt_small_active ? state.discount_opt_small : null,
                discount_big_count: state.discount_opt_active ? state.discount_opt : null,
                count_price: state.count_price ?? null,
                count_price1: state.count_price1 ?? null,
                count_price2: state.count_price2 ?? null,
                brand_id: state.brand.selected_brand?.id ?? null,
                category_id: state.category.last_selected_id ?? null,
                photo: { ...state.photo, uri: state.photo?.uri?.split(baseUrl).join("") } ?? null,
                stock_id: 2,
                weight: state.weight ?? null,
                height: state.height ?? null,
                width: state.width ?? null,
                length: state.length ?? null
            }

            const appentForm = (key: string, item: any) => {
                if (item === undefined || item === null || item === '') {
                    return;
                }
                if (key === 'photo' && Object.keys(item).length < 3) {
                    return;
                }
                return form.append(key, item)
            }

            for (let key in data) {
                const item = data[key]
                appentForm(key, item)
            }

            // galery upload
            for (let i = 0; i < state.gallery.length; i++) {
                if (Object.keys(state.gallery[i]).length === 3)
                    form.append(`gallery[${i}]`, { ...state.gallery[i], uri: state.gallery[i].uri.split(baseUrl).join("") })
            }

            // filters append
            const checkboxId = state.category.filter.filter_list.find((i: any) => i.type === 'checkbox')?.id
            const selectId = state.category.filter.filter_list.find((i: any) => i.type === 'select')?.id

            // checkbox list append form data
            if (checkboxId) {
                for (let item of state.category.filter.checkbox_filter_list) {
                    if (item.selected) {
                        form.append(`filter[${checkboxId}]`, item.id)
                    }
                }
            }

            // select item append form data
            if (selectId) {
                if (state.category.filter.select_filter_list.length) {
                    const itemId = state.category.filter.select_filter_list.find(s => s.value === state.category.filter.selected_select_value)?.id
                    if (itemId) {
                        form.append(`filter[${selectId}]`, itemId)
                    }
                }
            }


            // requiere

            if (!state.category.last_selected_id) return Alert.alert('Выберите категорию')
            if (!state.name) return Alert.alert("введите Наименование")
            if (!state.price) return Alert.alert('введите цена')
            if (!state.description) return Alert.alert('введите описание')

            // --------


            setState(s => ({ ...s, loading: true }))
            try {
                let res;
                if (state.status === 'create') {
                    res = await services.product.create(form)
                    Alert.alert("был создан новый продукт")
                }
                if (state.status === 'update') {
                    console.log("<<<<<<<<<<form>>>>>>>>>>>>>>>>>")
                    console.log("form:", JSON.stringify(form, null, 4))
                    console.log("<<<<<<<<<<form>>>>>>>>>>>>>>>>>")
                    res = await services.product.updateProduct(state?.productId, form)
                    Alert.alert('Ваша информация успешно обновлена')
                }
                console.log('====================================');
                console.log("success:", res.data);
                console.log('====================================');
                setState((s) => ({ ...initialState, category: s.category, brand: s.brand }))

            } catch (error) {
                setState(s => ({ ...s, loading: false }))
                Alert.alert("Ошибка!")

                console.log("errro bu:", JSON.stringify(error.response, null, 4))
            }
        },
        category: {
            categories_get: async () => {
                try {
                    const res = await services.product.category()
                    const data: any = await res.data?.data
                    setState((s: any) => ({ ...s, category: { ...s.category, categories_list: [...data] } }))
                } catch (error) {
                    console.log(error)
                }
            },
            subcategories_get: async (id: number) => {
                try {
                    const res = await services.product.childCategory(id)
                    const data = await res.data?.data
                    setState((s: any) => ({ ...s, category: { ...s.category, subcategories_list: [...data] } }))
                } catch (error) {
                    console.log("error:", error)
                }
            },
            filter_get: async () => {
                try {
                    const id = Number(state.category.last_selected_id)
                    const res = await services.product.categoryFilter(id)
                    const data = await res.data?.data ?? []
                    const checkbox = [...data].find(i => i?.type === 'checkbox')
                    const select = [...data].find(i => i?.type === 'select')

                    setState((s: any) => ({
                        ...s,
                        category: {
                            ...s.category,
                            filter: {
                                filter_list: data,
                                checkbox_filter_list: checkbox?.childs?.map((i: any) => ({ ...i, selected: false })),
                                checkbox_name: checkbox?.name,
                                select_filter_list: select?.childs,
                                select_name: select?.name
                            }
                        }
                    }))
                } catch (error) {
                    console.log('error:', error)
                }
            }
        },
        clearAll: async () => {
            await setState(() => initialState)
        },
        brand: {
            brands_get: async () => {
                try {
                    const res = await services.product.getAllBreands()
                    const data = await res.data?.data
                    setState((s: any) => ({ ...s, brand: { ...s.brand, brand_list: [...data] } }))
                } catch (error) {
                    console.log("error:", error)
                }
            }
        }
    }


    // Update Product Измените продукта

    async function UpdateProduct(id: number) {
        setState(s => ({ ...initialState, loading: true, status: 'update', productId: id }))
        try {
            const res = await services.product.getProduct(id)
            const data = await res.data?.data
            setState(s => ({
                ...s,
                loading: false,
                name: data?.name ?? "",
                price: String(data?.price ?? ""),
                price_old: String(data?.price_old ?? ""),
                price_opt: String(data?.price_opt ?? ""),
                price_opt_small: String(data?.price_opt_small ?? ""),
                weight: String(data?.weight ?? ""),
                height: String(data?.height ?? ""),
                width: String(data?.width ?? ""),
                length: String(data?.length ?? ""),
                discount: String(data?.discount ?? ""),
                discount_active: !!data?.discount,
                discount_opt_active: !!data?.discount_big_count,
                discount_opt: String(data?.discount_big_count ?? ""),
                discount_opt_small: String(data?.discount_small_count ?? ""),
                discount_opt_small_active: !!data?.discount_small_count,
                count_price: data?.count_price ?? 0,
                count_price1: data?.count_price1 ?? 0,
                count_price2: data?.count_price2 ?? 0,
                photo: {
                    uri: baseUrl + data?.photo,
                },
                description: data?.description,
                gallery: data?.gallery.map((img: any) => ({ uri: baseUrl + img })),
                brand: {
                    ...s.brand,
                    selected_brand: data?.brand
                },
                category: {
                    ...s.category,
                    last_selected_id: data?.category?.id,
                    selected_category: data?.category_full_array[0],
                    selected_subcategory: data?.category_full_array[1],
                    selected_subcategories_childs: data?.category_full_array[2]
                }
            }))
        } catch (error) {
            console.log("update errrorrr::", error)
        }
    }


    return {
        state,
        setState,
        increment,
        decrement,
        toggleSwitch,
        requests,
        img_controll: {
            update_photo,
            update_gallery,
            gallery_item_delete,
            photo_delete
        },
        toggleCheckbox,
        UpdateProduct
    }
}

export default useProductscards2