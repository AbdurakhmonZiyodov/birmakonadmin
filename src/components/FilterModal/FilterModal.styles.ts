import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    activeContainer: {
        ...StyleSheet.absoluteFillObject,
    },

    rootModal: {
        padding: 0,
        margin: 0
    },
    modalView: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: height * 0.4,
        paddingTop: 34,
        paddingBottom: 10
    },
    line: {
        backgroundColor: "#131E3D",
        height: 7,
        width: 120,
        borderRadius: 2,
        position: 'absolute',
        left: width / 2 - 60
    }
})