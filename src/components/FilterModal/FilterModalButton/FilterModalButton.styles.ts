import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    button: {
        backgroundColor: "#131E3D",
        borderColor: "rgba(137, 137, 0.6)",
        borderRadius: 5,
        flex: 1,
        minHeight: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10
    },
    activeIcon: {
        transform: [{
            rotate: '180deg'
        }]
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
        color: "#fff"
    },
})