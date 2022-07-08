import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Pressable } from 'react-native'
import { ChevronDownIcon } from '../../../../../assets/icons/icon'
import Icon from 'react-native-vector-icons/Entypo';
import { styles as btnStyle } from "../style"
import { Transition, Transitioning } from 'react-native-reanimated'
const { width, height } = Dimensions.get('screen')
interface IProps {
    data: string[],
    onSelect: (selectItem: string) => void;
    defaultValue: string;
}
const SortModal = ({ data, defaultValue, onSelect }: IProps) => {
    const [visible, setVisible] = React.useState(false)
    const [selectItem, setSelectItem] = React.useState(defaultValue)
    const ref = React.useRef(null)

    const transition = (
        <Transition.Together>
            <Transition.In type="fade" durationMs={1000} />
            <Transition.Change />
            <Transition.Out type='fade' durationMs={1000} />
        </Transition.Together>
    )

    const toggleVisible = () => {
        ref.current?.animateNextTransition()
        setVisible(s => !s)
    }

    const closeVisible = () => {
        ref.current?.animateNextTransition()
        setVisible(false)

    }


    const onSelectHandler = (value: string) => {
        closeVisible()
        onSelect(value)
        setSelectItem(value)
    }



    return (
        <Transitioning.View style={{ zIndex: 2 }} ref={ref} transition={transition}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={toggleVisible}
                    activeOpacity={0.8}
                    style={[btnStyle.innerView, {
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        justifyContent: 'space-between'
                    }]}
                >
                    <Text style={btnStyle.innerText}>{selectItem}</Text>
                    <View style={{
                        transform: [{ rotate: visible ? '180deg' : '0deg' }],
                        alignItems: "center",
                        justifyContent: "flex-end"
                    }}>
                        <ChevronDownIcon />
                    </View>
                </TouchableOpacity>
                <View
                    style={
                        [styles.root, visible ? {
                            maxHeight: data.length * 45
                        } : { maxHeight: 0 }]}
                >
                    <ScrollView showsVerticalScrollIndicator={true}>
                        {
                            data?.map((value: string, index) => (
                                <TouchableOpacity
                                    onPress={() => onSelectHandler(value)} key={index.toString()}
                                    style={styles.selectItem}
                                >
                                    <Text style={styles.selectItemText}>{value}</Text>
                                    <Text style={{ color: "#fff" }}>
                                        {value === selectItem ? <Icon color={"#fff"} name='check' size={20} /> : ""}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </Transitioning.View>
    )
}

export default SortModal

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#131E3D",
        marginHorizontal: 2,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        position: 'absolute',
        width: '98.8%',
        top: '100%',
        zIndex: 23
    },
    selectItem: { paddingVertical: 10, paddingHorizontal: 20, justifyContent: "space-between", flexDirection: "row" },
    selectItemText: { color: "#fff", fontSize: 14 }
})