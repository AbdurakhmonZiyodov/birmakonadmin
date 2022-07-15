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
import AntIcon from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'
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
    selectMeasurementsItem,
    selectColor,
    selectCurrency,
    changeFilterInput,
    deleteCharacteristic,
    addCharacteristic,
    changeCharacteristic,
    getAllCategory
} from '../../../../redux/slices/product';

const Productcards2View = ({ navigation }: any) => {
    const dispatch: any = useAppDispatch()
    const productState = useAppSelector(({ product }) => product)

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            dispatch(clearRequest())
        });

        return unsubscribe;
    }, [navigation]);

    React.useEffect(() => {
        dispatch(getAllCategory())

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
                <Text style={styles.text}>Наименованиe(ru)</Text>
                <TextInput
                    placeholderTextColor={COLORS.black}
                    keyboardType="default"
                    style={styles.input2}
                    value={productState.name_ru}
                    onChangeText={(value) => dispatch(changeInput({ key: 'name_ru', value }))}
                />

                <Text style={styles.text}>Наименованиe(uz)</Text>
                <TextInput
                    placeholderTextColor={COLORS.black}
                    keyboardType="default"
                    style={styles.input2}
                    value={productState.name_uz}
                    onChangeText={(value) => dispatch(changeInput({ key: 'name_uz', value }))}
                />

                <Text style={styles.text}>Наименованиe(en)</Text>
                <TextInput
                    placeholderTextColor={COLORS.black}
                    keyboardType="default"
                    style={styles.input2}
                    value={productState.name_en}
                    onChangeText={(value) => dispatch(changeInput({ key: 'name_en', value }))}
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

    function renderColors() {
        return (
            <>
                <Select
                    data={productState.colors?.color_list?.map((i) => i?.name)}
                    title={'Выберите цвета'}
                    defaultButtonText={productState.status === 'create' ? 'Выберите цвета' : productState.colors?._select_color?.name}
                    onSelect={(selectedName: any) => {
                        const selectedColorItem = productState.colors?.color_list?.find(color => color?.name === selectedName)
                        dispatch(selectColor(selectedColorItem))
                    }}
                />
            </>
        )
    }

    function renderAmount() {
        return (
            <>
                <Text style={styles.text}>Количество на складе</Text>
                <TextInput
                    placeholderTextColor={COLORS.black}
                    keyboardType="numeric"
                    style={styles.input2}
                    value={productState.amount}
                    onChangeText={(value) => dispatch(changeInput({ key: 'amount', value }))}
                />
            </>
        )
    }

    function renderCategory() {
        return (
            <View style={{ marginBottom: 30 }}>
                <Select
                    data={productState.category.categories_list.map((i: any) => i?.name)}
                    title={'Категорию'}
                    defaultButtonText={productState.status === 'create' ? 'Выбрать категорию' : productState.category?.selected_category?.name}
                    onSelect={(selectedName: any) => {
                        const selectedItem: any = productState.category.categories_list.find((i: any) => i?.name === selectedName)
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


                <>
                    {
                        productState.category.filter.filter_list.filter(fc => fc.type === 'select').map(c => (
                            <Select
                                key={c.id}
                                title={c?.name}
                                data={c?.childs.map(i => i.value)}
                                onSelect={(selectedValue: string) => {
                                    const vIndex = [...c?.childs].findIndex(i => i.value === selectedValue)
                                    dispatch(selectFilterSelect({ index: vIndex, select_id: c.id }))
                                }}
                                defaultButtonText={productState.status === 'create' ? `Выбрать ${c?.name}` : productState.category.filter.selected_select_value}
                            />
                        ))
                    }

                    {
                        productState.category.filter.filter_list.filter(fc => fc.type === 'checkbox').map(c => (
                            <View key={c.id}>
                                <Text style={styles.text}>{c.name}</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {
                                        c.childs.map((i: any) => (
                                            <Checkbox
                                                key={i?.id}
                                                checked={i?.selected}
                                                title={i?.value}
                                                onPress={() => dispatch(toggleCheckbox(i?.id))}
                                            />
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        ))
                    }

                    {
                        productState.category.filter.filter_list.filter(fc => fc.type === 'input').map(c => (
                            <View key={c.id}>
                                <Text style={styles.text}>{c?.name}</Text>
                                <TextInput
                                    placeholderTextColor={COLORS.black}
                                    keyboardType="default"
                                    style={styles.input2}
                                    value={c.value}
                                    onChangeText={(value) => dispatch(changeFilterInput({ id: c.id, value }))}
                                />
                            </View>
                        ))
                    }
                </>

            </View>
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

    function renderCurrency() {
        return (
            <View style={{ marginBottom: 30 }}>
                <Select
                    data={productState.currency?.currency_list?.map((i: any) => i?.name)}
                    title={'Валюта:'}
                    defaultButtonText={productState.status === 'create' ? 'Выбрать валюта' : productState.currency?._select_currency?.name}
                    onSelect={(selectedName: any) => {
                        const selectedItem: any = productState.currency?.currency_list?.find((i: any) => i?.name === selectedName)
                        dispatch(selectCurrency(selectedItem))
                    }}
                />
            </View>
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
                    multiline={true}
                    onChangeText={value => dispatch(changeInput({ key: "description", value }))}
                />
            </>
        )
    }

    function renderImagePicker() {
        return (
            <>
                {/* Galery */}
                <View style={{ marginTop: 15 }}>
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
                </View>

            </>
        )
    }

    function renderAR() {
        return (
            <>
                <Text style={styles.text}>AR/VR</Text>
                <TextInput
                    style={styles.input2}
                    placeholderTextColor={COLORS.black}
                />
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
                                <Text style={styles.numberColor}>{productState.count_price ?? 0} {productState.measurements?._selected_item?.name?.replace('.', '') ?? "шт"}</Text>
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
                        <Text style={styles.text}>Опт кол-во ({productState.measurements?._selected_item?.name?.replace('.', '') ?? "шт"}):</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity style={styles.minus} onPress={() => dispatch(incrementCount("count_price1"))}>
                                <MinIcon fill={COLORS.white} />
                            </TouchableOpacity>
                            <View style={styles.topBottom}>
                                <Text style={styles.numberColor}>{productState.count_price1} {productState.measurements?._selected_item?.name?.replace('.', '') ?? "шт"}</Text>
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
                        <Text style={styles.text}>Опт мал кол-во ({productState.measurements?._selected_item?.name?.replace('.', '') ?? "шт"}):</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity style={styles.minus} onPress={() => dispatch(incrementCount("count_price2"))}>
                                <MinIcon fill={COLORS.white} />
                            </TouchableOpacity>
                            <View style={styles.topBottom}>
                                <Text style={styles.numberColor}>{productState.count_price2} {productState.measurements?._selected_item?.name?.replace('.', '') ?? "шт"}</Text>
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
            <View style={{ marginTop: 20 }}>
                <Text style={{ ...styles.text, fontWeight: "500" }}>Характеристики</Text>


                {
                    productState.characteristic.characteristic_list.map((ci) => (
                        <View key={ci.id}>
                            <Text style={styles.text}>Введите ключ</Text>
                            <TextInput
                                style={styles.input2}
                                placeholderTextColor={COLORS.black}
                                value={ci.key}
                                onChangeText={value => dispatch(changeCharacteristic({ id: ci.id, key: 'key', value }))}
                            />

                            <Text style={styles.text}>Введите значение</Text>
                            <TextInput
                                style={styles.input2}
                                placeholderTextColor={COLORS.black}
                                value={ci.value}
                                onChangeText={value => dispatch(changeCharacteristic({ id: ci.id, key: 'value', value }))}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    paddingRight: 20
                                }}
                            >
                                <TouchableOpacity onPress={() => dispatch(deleteCharacteristic(ci.id))}>
                                    <AntIcon name="delete" size={25} color={"#000"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => dispatch(addCharacteristic())}>
                                    <IonIcon name="add" size={30} color={"#000"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }

            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>

            <Header title={productState.status === 'create' ? 'Карточки товаров' : 'Изменить товаров'} />
            <ScrollView>

                {/* 1 */}
                {/* Render Name */}
                {renderName()}

                {/* 2 */}
                {/* Render Brand */}
                {renderBrand()}

                {/* 3 */}
                {/* Render UnitMeasurements*/}
                {renderUnitMeasurements()}

                {/* 4 */}
                {/* Render Currency */}
                {renderCurrency()}

                {/* 5 */}
                {/* Render Category */}
                {renderCategory()}

                {/* 6 */}
                {/* Render money discount count */}
                {renderMoneys()}

                {/* 7 */}
                {/* Render Dimensions */}
                {renderDimensions()}

                {/* 8 */}
                {/* Render Colors */}
                {renderColors()}

                {/* 9 */}
                {/* Render Amount */}
                {renderAmount()}


                {/* 10 */}
                {/* Render Discription */}
                {renderDiscription()}

                {/* 11 */}
                {/* Render Image picker */}
                {renderImagePicker()}

                {/* 12 */}
                {/* Render AR */}
                {renderAR()}

                {/* 13 */}
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
