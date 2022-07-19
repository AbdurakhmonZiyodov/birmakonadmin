import { StyleSheet, Dimensions } from "react-native"
const { width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16
    },
    btn: {
        backgroundColor: "#131E3D",
        borderRadius: 5,
        paddingVertical: 10,
        width: 0.4 * width,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#131E3D",
    },
    fullBtn: {
        backgroundColor: "#131E3D",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        paddingVertical: 13,
        width: 0.922 * width,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#131E3D",
        marginTop: 20
    },
    btnText: {
        color: "#fff",
        fontSize: 15
    },
    chats: {
        flex: 1,
        backgroundColor: "#F8F8FA",
        position: 'relative'
    },
    chatItem: {
        paddingTop: 15,
        paddingRight: 17,
        paddingBottom: 25,
        paddingLeft: 13,
        backgroundColor: " rgba(212, 212, 212, 0.5)",
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        marginVertical: 12,
        marginHorizontal: 15
    },
    chatItemText: {
        fontSize: 13,
        color: '#023047'
    },
    chatBottomInput: {
        position: 'absolute',
        paddingVertical: 12,
        bottom: -5,
        width: '100%',
        backgroundColor: '#F8F8FA',
        shadowColor: 'rgba(0, 0, 0)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        elevation: 8,
    }
})