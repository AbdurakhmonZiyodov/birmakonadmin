import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Switch,
    Image,
    ActivityIndicator
} from 'react-native';
import Header from '../../../../components/Header';
import { COLORS } from '../../../../constants/color';
import { styles } from './style';
import { MinIcon, PlusIcon } from '../../../../assets/icons/icon';
import Checkbox from '../../../../components/common/Checkbox';
import Select from '../../../../components/common/Select';
import Loading from '../../../../loading/Loading';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
    ProductAsyncRequests,
    selectCategory,
    changeInput,
    selectSubCategory,
    selectSubChildCategory,
    selectBrand,
    deleteMainPicture,
    deleteGalleryPicturesItem,
    incrementCount,
    decrementCount,
    toggleCheckbox,
    selectFilterSelect,
    clearRequest,
    selectMeasurementsItem
} from '../../../../redux/slices/product';

const Productcards2View = ({ navigation }: any) => {
    const { params }: any = useRoute()
    const dispatch: any = useAppDispatch()
    const productState = useAppSelector(({ product }) => product)

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            dispatch(clearRequest())
        });

        return unsubscribe;
    }, [navigation]);

    React.useEffect(() => {
        dispatch(ProductAsyncRequests.onGetCategories())
        dispatch(ProductAsyncRequests.onGetBrands())
        dispatch(ProductAsyncRequests.onGetMeasurements())

        return () => {
            dispatch(clearRequest())
        }
    }, [])



    if (productState.loading && productState.productId && productState.status === 'create') return <Loading title='товар загружается' />
    if (productState.loading && productState.status === 'create') return <Loading title='создается новый продукт' />
    if (productState.loading && productState.status === 'update') return <Loading title='продукт обновляется' />

    // Render
    function renderName() {
        return (
            <>
                <Text style={styles.text}>Наименование</Text>
                <TextInput
                    placeholderTextColor={COLORS.black}
                    keyboardType="default"
                    style={styles.input2}
                    value={productState.name}
                    onChangeText={(value) => dispatch(changeInput({ key: 'name', value }))}
                />
            </>
        )
    }

    function renderUnitMeasurements() {
        return (
            <>
                <Select
                    data={productState.measurements?.unit_measurements_list.map(({ name }) => name)}
                    title={'Ед изменения'}
                    defaultButtonText={productState.status === 'create' ? 'Выбрать изменения' : productState.measurements?._selected_item?.name}
                    onSelect={(selectedName: any) => {
                        const selectedItem = productState.measurements?.unit_measurements_list.find(i => i.name === selectedName)
                        dispatch(selectMeasurementsItem(selectedItem))
                    }}
                />
            </>
        )
    }

    function renderCategory() {
        return (
            <>
                <Select
                    data={productState.category.categories_list.map((i: any) => i?.name)}
                    title={'Категорию'}
                    defaultButtonText={productState.status === 'create' ? 'Выбрать категорию' : productState.category?.selected_category?.name}
                    onSelect={(selectedName: any) => {
                        const selectedItem: any = productState.category.categories_list.find((i: any) => i?.name === selectedName)
                        // dispatch(ProductAsyncRequests.onGetCategories())
                        dispatch(selectCategory({ selected_category: selectedItem, last_selected_id: selectedItem?.id }))
                        dispatch(ProductAsyncRequests.onGetSubCategories(selectedItem?.id))
                    }}
                />

                {
                    productState.category.selected_category?.name && productState.category.subcategories_list.length > 0 ? (
                        <Select
                            data={productState.category.subcategories_list.map((i: any) => i?.name)}
                            title={'Подкатегория'}
                            defaultButtonText={productState.status === 'create' ? `Выбрать подкатегорию` : productState.category?.selected_subcategory?.name}
                            onSelect={(selectedName: any) => {
                                const selectedItem: any = productState.category.subcategories_list.find((i: any) => i?.name === selectedName)
                                dispatch(selectSubCategory({ selected_category: selectedItem, last_selected_id: selectedItem?.id, subcategories_childs_list: selectedItem?.childs }))
                                dispatch(ProductAsyncRequests.onGetCategoriesFilter())
                            }}
                        />
                    ) : null
                }

                {
                    productState.category.selected_subcategory?.name && productState.category.subcategories_childs_list.length > 0 ? (
                        <Select
                            data={productState.category.subcategories_childs_list.map((i: any) => i?.name)}
                            title={'Подкатегория'}
                            defaultButtonText={productState.status === 'create' ? `Выбрать подкатегорию` : productState.category?.selected_subcategories_childs?.name}
                            onSelect={(selectedName: any) => {
                                const selectedItem: any = productState.category.subcategories_childs_list.find((i: any) => i?.name === selectedName)
                                dispatch(selectSubChildCategory({ selected_category: selectedItem, last_selected_id: selectedItem?.id }))
                            }}
                        />
                    ) : null
                }
            </>
        )
    }


    function renderDimensions() {
        return (
            <View style={{ marginVertical: 10, paddingHorizontal: 8 }}>
                <Text style={styles.text}>Габариты</Text>
                <View style={styles.gabariti}>

                    <View style={{ width: '50%' }}>
                        <Text style={{ ...styles.text, fontSize: 15, color: "#000" }}>Вес (грамм):</Text>
                        <TextInput
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            style={[styles.input2, { marginHorizontal: 10 }]}
                            value={productState.weight}
                            onChangeText={(value) => dispatch(changeInput({ key: 'weight', value }))}
                        />
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text style={{ ...styles.text, fontSize: 15, color: "#000" }}>Высота (см.):</Text>
                        <TextInput
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            style={[styles.input2, { marginHorizontal: 10 }]}
                            value={productState.height}
                            onChangeText={value => dispatch(changeInput({ key: 'height', value }))}
                        />
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text style={{ ...styles.text, fontSize: 15, color: "#000" }}>Ширина (см.):</Text>
                        <TextInput
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            style={[styles.input2, { marginHorizontal: 10 }]}
                            value={productState.width}
                            onChangeText={value => dispatch(changeInput({ key: 'width', value }))}
                        />
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text style={{ ...styles.text, fontSize: 15, color: "#000" }}>Длина (см.):</Text>
                        <TextInput
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            style={[styles.input2, { marginHorizontal: 10 }]}
                            value={productState.length}
                            onChangeText={value => dispatch(changeInput({ key: 'length', value }))}
                        />
                    </View>
                </View>
            </View>
        )
    }


    function renderBrand() {
        return (
            <>
                <Select
                    data={productState.brand.brand_list.map((i: any) => i?.name)}
                    title={'Бренды:'}
                    defaultButtonText={productState.status === 'create' ? 'Выбрать бренд' : productState.brand?.selected_brand?.name}
                    onSelect={(selectedName: any) => {
                        const selectedItem: any = productState.brand.brand_list.find((i: any) => i?.name === selectedName)
                        dispatch(selectBrand(selectedItem))
                    }}
                />
            </>
        )
    }

    function renderDiscription() {
        return (
            <>
                <Text style={styles.text}>Описание</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholderTextColor={COLORS.black}
                    value={productState.description}
                    onChangeText={value => dispatch(changeInput({ key: "description", value }))}
                />
            </>
        )
    }

    function renderImagePicker() {
        return (
            <>
                {/* Photo */}
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.text}>Главное фото:</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>

                        {
                            Object.keys(productState.photo).length ? (
                                <TouchableOpacity onPress={() => dispatch(deleteMainPicture())}>
                                    <Image source={{ uri: productState.photo?.uri }} style={styles.imagePicker} />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderColor: COLORS.gray,
                                        borderWidth: 1
                                    }}
                                    onPress={() => dispatch(ProductAsyncRequests.onUpdatePhoto())}
                                >
                                    <PlusIcon fill={COLORS.gray} />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>

                {/* Galery */}
                {/* <View style={{ marginTop: 15 }}>
                    <Text style={styles.text}>Галарея фото товара:</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginLeft: 15 }}>
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                width: 80,
                                height: 80,
                                borderRadius: 10,
                                marginRight: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                borderColor: COLORS.gray,
                                borderWidth: 1
                            }}
                            onPress={() => dispatch(ProductAsyncRequests.onUpdateGallery())}
                        >
                            <PlusIcon fill={COLORS.gray} />
                        </TouchableOpacity>

                        {
                            productState.gallery.map((i, index) => (
                                <TouchableOpacity
                                    key={index.toString()}
                                    onPress={() => dispatch(deleteGalleryPicturesItem(index))}>
                                    <Image

                                        source={{ uri: i?.uri }}
                                        style={styles.imagePicker}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View> */}

            </>
        )
    }

    function renderAR() {
        return (
            <>
                <Text style={styles.text}>AR Qo'shish</Text>
                <View style={styles.addAr}>
                    <Text />
                </View>
            </>
        )
    }

    function renderMoneys() {
        return (
            <>
                <View style={{ ...styles.moneyBox, flexWrap: 'wrap', marginBottom: 20 }}>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.text}>Цена:</Text>
                        <TextInput
                            style={{ ...styles.input2, marginHorizontal: 5 }}
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            value={productState.price}
                            onChangeText={value => dispatch(changeInput({ key: "price", value }))}
                        />
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Text style={styles.text}>Старая цена:</Text>
                        <TextInput
                            style={{ ...styles.input2, marginHorizontal: 5 }}
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            value={productState.price_old}
                            onChangeText={value => dispatch(changeInput({ key: "price_old", value }))}
                        />
                    </View>

                    <View style={{ flexDirection: "row", width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                        <Text style={styles.text} >За кол-во:</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity style={styles.minus} onPress={() => dispatch(incrementCount("count_price"))}>
                                <MinIcon fill={COLORS.white} />
                            </TouchableOpacity>
                            <View style={styles.topBottom}>
                                <Text style={styles.numberColor}>{productState.count_price ?? 0} шт</Text>
                            </View>
                            <TouchableOpacity style={styles.plus} onPress={() => dispatch(decrementCount("count_price"))}>
                                <PlusIcon fill={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Скидка (%):</Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#fff' }}
                                thumbColor={productState.discount_active ? COLORS.orange : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                style={{ marginRight: 30 }}
                                value={productState.discount_active}
                                onChange={() => dispatch(ProductAsyncRequests.toggleSwitch("discount_active"))}
                            />
                        </View>

                        <TextInput
                            style={{ ...styles.input2, marginHorizontal: 5 }}
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            value={productState.discount}
                            onChangeText={value => dispatch(changeInput({ key: "discount", value }))}
                        />
                    </View>

                </View>

                {/* ===========цена 2============== */}
                <View style={{ ...styles.moneyBox, flexWrap: 'wrap', marginBottom: 20 }}>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.text}>Цена (оптом):</Text>
                        <TextInput
                            style={{ ...styles.input2, marginHorizontal: 5 }}
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            value={productState.price_opt}
                            onChangeText={value => dispatch(changeInput({ key: "price_opt", value }))}
                        />
                    </View>

                    <View style={{ flexDirection: "row", width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Опт кол-во (шт):</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity style={styles.minus} onPress={() => dispatch(incrementCount("count_price1"))}>
                                <MinIcon fill={COLORS.white} />
                            </TouchableOpacity>
                            <View style={styles.topBottom}>
                                <Text style={styles.numberColor}>{productState.count_price1} шт</Text>
                            </View>
                            <TouchableOpacity style={styles.plus} onPress={() => dispatch(decrementCount("count_price1"))}>
                                <PlusIcon fill={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Скидка (%):</Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#fff' }}
                                thumbColor={productState.discount_opt_active ? COLORS.orange : '#f4f3f4'}
                                value={productState.discount_opt_active}
                                onChange={() => dispatch(ProductAsyncRequests.toggleSwitch('discount_opt_active'))}
                                ios_backgroundColor="#3e3e3e"
                                style={{ marginRight: 30 }}
                            />
                        </View>

                        <TextInput
                            style={{ ...styles.input2, marginHorizontal: 5 }}
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            value={productState.discount_opt}
                            onChangeText={value => dispatch(changeInput({ key: "discount_opt", value }))}
                        />
                    </View>

                </View>

                {/* ===========цена 3============== */}
                <View style={{ ...styles.moneyBox, flexWrap: 'wrap', marginBottom: 20 }}>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.text}>Цена (малый опт):</Text>
                        <TextInput
                            style={{ ...styles.input2, marginHorizontal: 5 }}
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            value={productState.price_opt_small}
                            onChangeText={value => dispatch(changeInput({ key: "price_opt_small", value }))}
                        />
                    </View>

                    <View style={{ flexDirection: "row", width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Опт мал кол-во (шт):</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity style={styles.minus} onPress={() => dispatch(incrementCount("count_price2"))}>
                                <MinIcon fill={COLORS.white} />
                            </TouchableOpacity>
                            <View style={styles.topBottom}>
                                <Text style={styles.numberColor}>{productState.count_price2} шт</Text>
                            </View>
                            <TouchableOpacity style={styles.plus} onPress={() => dispatch(decrementCount("count_price2"))}>
                                <PlusIcon fill={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Скидка (%):</Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#fff' }}
                                thumbColor={productState.discount_opt_small_active ? COLORS.orange : '#f4f3f4'}
                                value={productState.discount_opt_small_active}
                                onChange={() => dispatch(ProductAsyncRequests.toggleSwitch("discount_opt_small_active"))}
                                ios_backgroundColor="#3e3e3e"
                                style={{ marginRight: 30 }}
                            />
                        </View>

                        <TextInput
                            style={{ ...styles.input2, marginHorizontal: 5 }}
                            placeholderTextColor={COLORS.black}
                            keyboardType="numeric"
                            value={productState.discount_opt_small}
                            onChangeText={(value) => dispatch(changeInput({ key: "discount_opt_small", value }))}
                        />
                    </View>

                </View>
            </>
        )
    }



    function renderCharacteristics() {
        return (
            <View>
                {
                    productState.category.filter?.checkbox_filter_list?.length ? (
                        <>
                            <Text style={styles.text}>{productState.category.filter.checkbox_name}:</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    productState.category.filter.checkbox_filter_list.map((i: any) => (
                                        <Checkbox
                                            key={i?.id}
                                            checked={i?.selected}
                                            title={i?.value}
                                            onPress={() => dispatch(toggleCheckbox(i?.id))}
                                        />
                                    ))
                                }
                            </ScrollView>
                        </>
                    ) : null
                }

                {
                    productState.category?.filter?.select_filter_list?.length ? (
                        <>
                            <Select
                                title={productState.category.filter.select_name}
                                data={productState.category.filter.select_filter_list.map((i: any) => i?.value)}
                                onSelect={(selectedValue: string) => {
                                    dispatch(selectFilterSelect(selectedValue))
                                }}
                                defaultButtonText={productState.status === 'create' ? `Выбрать ${productState.category.filter.select_name}` : productState.category.filter.selected_select_value}
                            />
                        </>
                    ) : null
                }

            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>

            <Header title={productState.status === 'create' ? 'Карточки товаров' : 'Изменить товаров'} />
            <ScrollView>

                {/* Render Name */}
                {renderName()}

                {/* Render Brand */}
                {renderBrand()}

                {/* Render Category */}
                {renderCategory()}

                {/* Render UnitMeasurements*/}
                {renderUnitMeasurements()}

                {/* Render Unit change */}
                {/* {renderUnitChange()} */}

                {/* Render Dimensions */}
                {renderDimensions()}

                {/* Render money discount count */}
                {renderMoneys()}



                {/* Render Discription */}
                {renderDiscription()}

                {/* Render Image picker */}
                {renderImagePicker()}

                {/* Render AR */}
                {renderAR()}

                {/* Render Characteristics */}
                {renderCharacteristics()}

                <View style={styles.saveBtnBox}>
                    <TouchableOpacity
                        style={styles.saveBtn}
                        activeOpacity={0.8}
                        onPress={() => dispatch(ProductAsyncRequests.onSave())}
                    >
                        {
                            productState.loading ? <ActivityIndicator /> : <Text style={styles.saveText}>Сохранить</Text>
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};




export default Productcards2View;
