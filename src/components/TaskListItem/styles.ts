import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.gray500,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 4,
        borderWidth: 1,
        borderColor: '#333333'
    },
    taskTextGroup:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textList:{
        color: '#FFF',
        padding: 12
    }
})