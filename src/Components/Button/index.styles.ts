import { StyleSheet } from "react-native";

const ButtonStyles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        marginVertical: 3,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    buttonTitle: {
        color: "#000",
        fontSize: 15,
        fontWeight: '400',
    },
    buttonImg: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
})

export default ButtonStyles;