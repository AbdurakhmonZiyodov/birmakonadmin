import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { services } from '../../services'
import { launchImageLibrary } from 'react-native-image-picker'
import { baseUrl } from '../../api'
import { AppDispatch, getStateType } from '../store'
import { ProductState } from '../types/product'
import { statusType } from '../types/statusType'
import { Alert, Platform } from 'react-native'
import { navigatRequest } from '../../routes/RootNavigation'
import { onGetProducts } from './productCards'

const initialState: ProductState = {
    productId: null,
    name: "",
    category: {
        categories_list: [],
        subcategories_list: [],
        subcategories_childs_list: [],
        selected_subcategories_childs: {},
        selected_category: {},
        selected_subcategory: {},
        last_selected_id: null,
        categories_status: { status: statusType.idle },
        subcategories_status: { status: statusType.idle },
        filter: {
            filter_list: [],
            filter_status: { status: statusType.idle },
            select_filter_list: [],
            select_filter_status: { status: statusType.idle },
            selected_select_value: "",
            select_name: "",
            checkbox_filter_list: [],
            checkbox_filter_status: { status: statusType.idle },
            checkbox_name: "",
            input_filter: {}
        }
    },
    brand: {
        brand_list: [],
        selected_brand: {},
        brand_status: { status: statusType.idle }
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
    measurements: {
        _selected_item: {},
        unit_measurements_list: []
    },
    colors: {
        _select_color: {},
        color_list: []
    },
    description: "",
    status: "create", // create or update,
    loading: false,
    error: undefined,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        incrementCount: (state: any, action: PayloadAction<string>) => {
            if (state[action.payload] - 1 >= 0)
                return {
                    ...state,
                    [action.payload]: state[action.payload] - 1
                }
            return state
        },
        decrementCount: (state: any, action: PayloadAction<string>) => ({
            ...state,
            [action.payload]: state[action.payload] + 1
        }),
        toggleSwitch: (state: any, action: PayloadAction<string>) => ({
            ...state,
            [action.payload]: !state[action.payload]
        }),
        changeInput: (state, action: PayloadAction<{ key: string; value: string | number; }>) => ({
            ...state,
            [action.payload.key]: action.payload.value
        }),
        mainPicture: (state, action: PayloadAction<any>) => ({
            ...state,
            photo: action.payload
        }),
        galleryPictures: (state: any, action: PayloadAction<any>) => ({
            ...state,
            gallery: [...state.gallery, ...action.payload]
        }),
        deleteMainPicture: (state) => ({
            ...state,
            photo: {}
        }),
        deleteGalleryPicturesItem: (state, action: PayloadAction<number>) => ({
            ...state,
            gallery: state.gallery.filter((_, index) => index !== action.payload)
        }),
        toggleCheckbox: (state, action: PayloadAction<number>) => ({
            ...state,
            category: {
                ...state.category,
                filter: {
                    ...state.category.filter,
                    checkbox_filter_list: [
                        ...state.category.filter.checkbox_filter_list
                    ]
                        .map(i => i?.id !== action.payload ? i : { ...i, selected: !i.selected })
                }
            }
        }
        ),
        categoriesRequest: (state) => ({
            ...state,
            category: {
                ...state.category, categories_status:
                    { status: statusType.pending, error: undefined }
            }
        }),
        categoriesSuccess: (state, action) => ({
            ...state,
            category: {
                ...state.category,
                categories_list: [...action.payload],
                categories_status: {
                    status: statusType.resolved, error: undefined
                }
            }
        }),
        categoriesFailure: (state, action) => ({
            ...state,
            category: {
                ...state.category,
                categories_status: {
                    status: statusType.rejected, error: action.payload
                }
            }
        }),
        subcategoriesRequest: (state) => ({
            ...state,
            category: {
                ...state.category,
                subcategories_status: {
                    status: statusType.pending, error: undefined
                }
            }
        }),
        subcategoriesSuccess: (state, action) => ({
            ...state,
            category: {
                ...state.category,
                subcategories_list: [...action.payload],
                subcategories_status: {
                    status: statusType.resolved, error: undefined
                }
            }
        }),
        subcategoriesFailure: (state, action) => ({
            ...state,
            category: {
                ...state.category,
                subcategories_status: {
                    status: statusType.rejected, error: action.payload
                }
            }
        }),
        categoreFilterRequest: (state) => ({
            ...state,
            category: {
                ...state.category,
                filter: {
                    ...state.category.filter,
                    filter_status: {
                        status: statusType.pending, error: undefined
                    }
                }
            }
        }),
        categoreFilterSuccess: (state, action) => ({
            ...state,
            category: {
                ...state.category,
                filter: {
                    ...state.category.filter,
                    ...action.payload,
                    filter_status: {
                        status: statusType.resolved, error: undefined
                    }
                }
            }
        }),
        categoreFilterFailure: (state, action) => ({
            ...state,
            category: {
                ...state.category,
                filter: {
                    ...state.category.filter,
                    filter_status: {
                        status: statusType.rejected, error: action.payload
                    }
                }
            }
        }),
        brandRequest: (state) => ({
            ...state,
            brand: {
                ...state.brand,
                brand_status: {
                    status: statusType.pending, error: undefined
                }
            }
        }),
        brandSuccess: (state, action) => ({
            ...state,
            brand: {
                ...state.brand,
                brand_list: [...action.payload],
                brand_status: {
                    status: statusType.resolved, error: undefined
                }
            }
        }),
        brandFailure: (state, action) => ({
            ...state,
            brand: {
                ...state.brand,
                brand_status: {
                    status: statusType.rejected, error: action.payload
                }
            }
        }),
        clearProductState: () => (initialState),
        onSaveRequest: (state) => ({
            ...state,
            loading: true
        }),
        onSaveSuccess: (state) => ({
            ...state,
            loading: false
        }),
        onSaveFailure: (state, action) => ({
            ...state,
            loading: false,
            error: action.payload
        }),
        selectCategory: (state, action: PayloadAction<{ selected_category: any; last_selected_id: number; }>) => ({
            ...state,
            category: {
                ...state.category,
                subcategories_list: [],
                subcategories_childs_list: [],
                selected_category: action.payload.selected_category,
                last_selected_id: action.payload.last_selected_id
            }
        }),
        selectSubCategory: (state, action: PayloadAction<{ selected_category: any; last_selected_id: number; subcategories_childs_list: any; }>) => ({
            ...state,
            category: {
                ...state.category,
                selected_subcategory: action.payload.selected_category,
                subcategories_childs_list: [...action.payload.subcategories_childs_list],
                last_selected_id: action.payload.last_selected_id
            }
        }),
        selectSubChildCategory: (state, action: PayloadAction<{ selected_category: any; last_selected_id: number; }>) => ({
            ...state,
            category: {
                ...state.category,
                selected_subcategories_childs: action.payload.selected_category,
                last_selected_id: action.payload.last_selected_id
            }
        }),
        selectFilterSelect: (state, action: PayloadAction<string>) => ({
            ...state,
            category: {
                ...state.category,
                filter: {
                    ...state.category.filter,
                    selected_select_value: action.payload
                }
            }
        }),
        selectBrand: (state, action: PayloadAction<any>) => ({
            ...state,
            brand: {
                ...state.brand,
                selected_brand: action.payload
            }
        }),
        onUpdateRequest: (state, action: PayloadAction<number>) => ({
            ...state,
            loading: true,
            productId: action.payload
        }),
        onUpdateSuccess: (state, action: PayloadAction<any>) => ({
            ...state,
            status: "update",
            loading: false,
            ...action.payload,
        }),
        onUpdateFailure: (state, action) => ({
            ...state,
            error: action.payload,
            loading: false
        }),
        measurementsSuccess: (state: any, action) => ({
            ...state,
            measurements: {
                ...state.measurements,
                unit_measurements_list: action.payload
            }
        }),
        selectMeasurementsItem: (state: any, action) => ({
            ...state,
            measurements: {
                ...state.measurements,
                _selected_item: action.payload
            }
        }),
        colorSuccess: (state, action) => ({
            ...state,
            colors: {
                ...state.colors,
                color_list: action.payload
            }
        }),
        selectColor: (state, action) => ({
            ...state,
            colors: {
                ...state.colors,
                _select_color: action.payload
            }
        })
    }
})


const {
    incrementCount,
    decrementCount,
    toggleSwitch,
    mainPicture,
    galleryPictures,
    deleteMainPicture,
    deleteGalleryPicturesItem,
    toggleCheckbox,
    categoriesRequest,
    categoriesSuccess,
    categoriesFailure,
    subcategoriesRequest,
    subcategoriesSuccess,
    subcategoriesFailure,
    categoreFilterRequest,
    categoreFilterSuccess,
    categoreFilterFailure,
    onSaveRequest,
    onSaveSuccess,
    onSaveFailure,
    brandFailure,
    brandRequest,
    brandSuccess,
    selectCategory,
    changeInput,
    selectSubCategory,
    selectSubChildCategory,
    selectBrand,
    selectFilterSelect,
    onUpdateFailure,
    onUpdateRequest,
    onUpdateSuccess,
    clearProductState,
    measurementsSuccess,
    selectMeasurementsItem,
    colorSuccess,
    selectColor
} = productSlice.actions

const returnImgData = (item: any) => ({
    uri: Platform.OS === 'android' ? item?.uri : item?.uri.replace("file://", ""),
    type: item?.type,
    name: item?.fileName
})

const ProductAsyncRequests = {
    onSave: () => async (dispatch: AppDispatch | any, getState: getStateType) => {
        console.log('====================================');
        console.log("onSave pressed");
        console.log('====================================');

        // data create
        const data: any = {
            name_ru: getState().product.name,
            name_uz: getState().product.name,
            name_en: getState().product.name,
            description_ru: getState().product.description,
            description_uz: getState().product.description,
            description_en: getState().product.description,
            composition_ru: 'Состав',
            composition_en: 'Состав',
            composition_uz: 'Состав',
            recommendation_ru: 'Рекомендации',
            recommendation_uz: 'Рекомендации',
            recommendation_en: 'Рекомендации',
            credit_label: 'кредит до 50 млн. сум',
            price: getState().product.price,
            price_old: getState().product.price_old,
            price_opt: getState().product.price_opt,
            price_opt_small: getState().product.price_opt_small,
            discount: getState().product.discount_active ? getState().product.discount : null,
            discount_small_count: getState().product.discount_opt_small_active ? getState().product.discount_opt_small : null,
            discount_big_count: getState().product.discount_opt_active ? getState().product.discount_opt : null,
            count_price: getState().product.count_price,
            count_price1: getState().product.count_price1,
            count_price2: getState().product.count_price2,
            brand_id: getState().product.brand.selected_brand?.id,
            category_id: getState().product.category.last_selected_id,
            gallery: { ...getState().product.photo, uri: getState().product.photo?.uri?.split(baseUrl).join("") },
            stock_id: 2,
            weight: getState().product.weight,
            height: getState().product.height,
            width: getState().product.width,
            length: getState().product.length,
            unit_id: getState().product.measurements?._selected_item?.id,
        }

        // create form data
        const formData = new FormData()

        // appent form data func
        const appendFormData = (key: string, item: any) => {
            if (item === undefined || item === null || item === '') return;
            if (key === 'gallery' && Object.keys(item).length < 3) return;
            return formData.append(key, item)
        }

        // append data in formData
        for (let key in data) {
            const item = data[key]

            // appending
            appendFormData(key, item)
        }

        // galery pictures append form data
        const galerys = getState().product.gallery
        for (let index = 0; index < galerys.length; index++) {
            const itemKeyLength = Object.keys(galerys[index]).length
            if (itemKeyLength === 3) {
                const item = { ...galerys[index], uri: galerys[index]?.uri?.split(baseUrl).join('') }
                formData.append(`gallery[${index}]`, item)
            }
        }

        // category filter checkbox and select
        const checkboxId = getState().product.category.filter.filter_list.find((i: any) => i.type === 'checkbox')?.id
        const selectId = getState().product.category.filter.filter_list.find((i: any) => i.type === 'select')?.id

        if (checkboxId) {
            for (let item of getState().product.category.filter.checkbox_filter_list) {
                if (item.selected) {
                    formData.append(`filter[${checkboxId}]`, item.id)
                }
            }
        }

        // select item append formData data
        if (selectId) {
            if (getState()?.product?.category?.filter?.select_filter_list?.length) {
                const itemId = getState().product.category.filter.select_filter_list.find(s => s.value === getState().product.category.filter.selected_select_value)?.id
                if (itemId) {
                    formData.append(`filter[${selectId}]`, itemId)
                }
            }
        }

        formData.append("colors[0]", 5)

        // requiere
        if (!getState().product.category.last_selected_id) return Alert.alert('Выберите категорию')
        if (!getState().product.name) return Alert.alert("введите Наименование")
        if (!getState().product.price) return Alert.alert("введите цена")
        if (!getState().product.description) return Alert.alert("введите описание")

        dispatch(onSaveRequest())
        console.log('====================================');
        console.log("onSaveRequest", JSON.stringify(formData, null, 4));
        console.log('====================================');
        const status = getState().product.status
        try {
            let res;

            if (status === 'create') {
                res = await services.product.create(formData)
                const data = await res.data?.data

                // getProductsRequest
                dispatch(onGetProducts())
                Alert.alert("был создан новый продукт")

            }

            if (status === 'update') {
                const id: any = getState().product.productId
                if (id !== null) {
                    formData.append('product_id', id)
                    const res = await services.product.create(formData)
                    const data = await res.data?.data
                    // getProductsRequest
                    dispatch(onGetProducts())
                    Alert.alert('Ваша информация успешно обновлена')
                }

                console.log('====================================');
                console.log("onEditSuccess");
                console.log('====================================');
            }

            dispatch(onSaveSuccess())
            dispatch(clearRequest())
            console.log('====================================');
            console.log("onSaveSuccess");
            console.log('====================================');

            navigatRequest.goBack()

        } catch (error) {
            dispatch(onSaveFailure(error))
            console.log('====================================');
            console.log("onSaveFailure");
            console.log('====================================');
            Alert.alert("Ошибка сервера")

            console.log(JSON.stringify(error.response, null, 4));
        }
    },
    onUpdatePhoto: () => async (dispatch: AppDispatch) => {
        try {
            const res = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
                selectionLimit: 1
            })
            const data: any = (await res?.assets) ?? []
            console.log(data);


            if (data.length)
                dispatch(mainPicture(returnImgData(data[0])))

        } catch (error) {
            console.log(error)
        }
    },
    onUpdateGallery: () => async (dispatch: AppDispatch) => {
        try {
            const res = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
                selectionLimit: 15
            })
            const data = (await res?.assets) ?? []
            if (data.length) {
                const payloadData = [
                    ...data
                ].map(item => returnImgData(item))
                dispatch(galleryPictures(payloadData))
            }
        } catch (error) {
            console.log(error)
        }
    },
    onGetCategories: () => async (dispatch: AppDispatch) => {
        dispatch(categoriesRequest())
        console.log('====================================');
        console.log("categoriesRequest");
        console.log('====================================');

        try {
            const res = await services.product.category()
            const data: any = await res.data?.data

            dispatch(categoriesSuccess(data))
            console.log('====================================');
            console.log("categoriesSuccess");
            console.log('====================================');
        } catch (error) {
            dispatch(categoriesFailure(error))
            console.log('====================================');
            console.log("categoriesFailure");
            console.log('====================================');

            console.log(error)
        }
    },
    onGetSubCategories: (id: number) => async (dispatch: AppDispatch) => {
        dispatch(subcategoriesRequest())
        console.log('====================================');
        console.log("subcategoriesRequest");
        console.log('====================================');

        try {
            const res = await services.product.childCategory(id)
            const data = await res.data?.data

            dispatch(subcategoriesSuccess(data))
            console.log('====================================');
            console.log("subcategoriesSuccess");
            console.log('====================================');
        } catch (error) {
            dispatch(subcategoriesFailure(error))
            console.log('====================================');
            console.log("subcategoriesFailure");
            console.log('====================================');
        }
    },
    onGetCategoriesFilter: () => async (dispatch: AppDispatch, getState: getStateType) => {
        const id = getState().product.category.last_selected_id
        if (id === null) return;

        dispatch(categoreFilterRequest())
        console.log('====================================');
        console.log("categoreFilterRequest");
        console.log('====================================');

        try {

            const res = await services.product.categoryFilter(id)
            const data = await res.data?.data ?? []
            const checkbox = [...data].find(i => i?.type === 'checkbox')
            const select = [...data].find(i => i?.type === 'select')
            const input = data?.find(i => i?.type === 'input')

            const payloadData = {
                filter_list: data,
                checkbox_filter_list: checkbox?.childs?.map((i: any) => ({ ...i, selected: false })),
                checkbox_name: checkbox?.name,
                select_filter_list: select?.childs,
                select_name: select?.name,
                input_filter: input
            }

            dispatch(categoreFilterSuccess(payloadData))
            console.log('====================================');
            console.log("categoreFilterSuccess");
            console.log('====================================');
        } catch (error) {
            dispatch(categoreFilterFailure(error))
            console.log('====================================');
            console.log("categoreFilterFailure");
            console.log('====================================');
        }
    },
    onGetBrands: () => async (dispatch: AppDispatch) => {
        dispatch(brandRequest())
        console.log('====================================');
        console.log('categoreFilterRequest');
        console.log('====================================');

        try {
            const res = await services.product.getAllBreands()
            const data = await res.data?.data

            dispatch(brandSuccess(data))
            console.log('====================================');
            console.log("brandSuccess");
            console.log('====================================');
        } catch (error) {
            dispatch(brandFailure(error))
            console.log('====================================');
            console.log("brandFailure");
            console.log('====================================');
        }
    },
    toggleSwitch: (keyName: string) => async (dispatch: AppDispatch) => {
        dispatch(toggleSwitch(keyName))
    },
    onUpdateProduct: (id: number) => async (dispatch: AppDispatch, getState: getStateType) => {
        if (id === null || id === undefined || id < 0) return;
        dispatch(onUpdateRequest(id))
        console.log('====================================');
        console.log("onUpdateRequest");
        console.log('====================================');
        console.log("id", id)
        try {

            const res = await services.product.getProduct(id)
            const data = await res.data?.data

            const payloadData = {
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
                    ...getState().product.brand,
                    selected_brand: data?.brand
                },
                category: {
                    ...getState().product.category,
                    last_selected_id: data?.category?.id,
                    selected_category: data?.category_full_array[0],
                    selected_subcategory: data?.category_full_array[1],
                    selected_subcategories_childs: data?.category_full_array[2]
                },
                measurements: {
                    _selected_item: data?.unit,
                    unit_measurements_list: []
                },


            }

            dispatch(onUpdateSuccess(payloadData))
            console.log('====================================');
            console.log("onUpdateSuccess");
            console.log('====================================');
        } catch (error) {
            console.log(error)

            dispatch(onUpdateFailure(error))
            console.log('====================================');
            console.log("onUpdateFailure");
            console.log('====================================');
        }
    },
    onGetMeasurements: () => async (dispatch: AppDispatch) => {
        try {
            const res = await services.product.measurements()
            const data = await res.data?.data

            dispatch(measurementsSuccess(data))
        } catch (error) {
            console.log(error)
        }
    },
    onGetColors: () => async (dispatch: AppDispatch) => {
        try {
            const res = await services.product.colors()
            const data = await res.data.data
            console.log('====================================');
            console.log("colors success");
            console.log('====================================');
            dispatch(colorSuccess(data))
        } catch (error) {
            console.log(error)
        }
    }
}

const clearRequest = () => async (dispatch: any) => {
    dispatch(clearProductState())
    dispatch(ProductAsyncRequests.onGetCategories())
    dispatch(ProductAsyncRequests.onGetBrands())
    dispatch(ProductAsyncRequests.onGetMeasurements())
}

export {
    ProductAsyncRequests,
    incrementCount,
    decrementCount,
    deleteMainPicture,
    deleteGalleryPicturesItem,
    toggleCheckbox,
    clearRequest,
    selectCategory,
    changeInput,
    selectSubCategory,
    selectSubChildCategory,
    selectBrand,
    selectFilterSelect,
    selectMeasurementsItem,
    selectColor
}

export default productSlice.reducer