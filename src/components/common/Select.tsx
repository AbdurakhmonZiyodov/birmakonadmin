import React from "react"
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import SelectDropdown from "react-native-select-dropdown"
import { COLORS } from "../../constants/color"

const { width, height } = Dimensions.get('window')

interface Iprops {
    title: string;
    data: any[] | undefined;
    onSelect: any;
    defaultButtonText: string;
    titleHide?: true;
    defaultButtonStyle?: {
        active?: true;
        style?: any;
    };
}
const Select = ({ title, data, onSelect, defaultButtonText, titleHide, defaultButtonStyle }: Iprops) => {

    return (
        <>
            {titleHide ? null : <Text style={styles.text}>{title}</Text>}
            <SelectDropdown
                dropdownStyle={styles.dropdown}
                data={data}
                onSelect={onSelect}
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.text}
                buttonStyle={styles.dropdownButtonStyle}
                buttonTextStyle={defaultButtonStyle?.active ? defaultButtonStyle?.style : styles.dropdownButtonText}
                defaultButtonText={defaultButtonText}
                selectedRowTextStyle={styles.text}
                defaultValue={defaultButtonText}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}
                rowTextForSelection={(item) => {
                    return item
                }}
            />
        </>
    )
}


const styles = StyleSheet.create({
    dropdown: {
        // borderRadius: 4
    },
    dropdownButtonText: { color: '#000', fontSize: 16, textAlign: "left", width: '100%' },
    dropdownRowStyle: {
        backgroundColor: COLORS.white,
        padding: 0,
        margin: 0,
        height: 40,
    },
    dropdownButtonStyle: {
        opacity: 1,
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        height: 40,
        borderColor: COLORS.red,
        borderWidth: 1,
        borderRadius: 10,
        left: 20,
        width: width - 20 * 2,
    },
    text: {
        color: COLORS.grey,
        fontSize: 18,
        marginHorizontal: 18,
        marginVertical: 5,
    },
})

export default Select

