import { StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        marginTop: -22,
        flexDirection: 'row',
        gap: 4
    },
    Input: {
        backgroundColor: Colors.gray500,
        borderRadius: 6,
        height: 54,
        padding: 16,
        flex: 1,
        fontSize: 16,
        color: '#FFF'
    },
    button: {
        backgroundColor: Colors.blueDark,
        padding: 18,
        borderRadius: 6
    }
})