import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        paddingVertical: 32,
        borderBottomColor: '#808080',
        marginBottom: 20
    },
    taskCountTextCreated: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 14
    },
    taskCountTextFinalized: {
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 14
    },
    taskCountNumber: {
        color: '#FFF',
        backgroundColor: '#333333',
        padding: 6,
        marginHorizontal: 4,
        width: 30,
        height: 30,
        borderRadius: 12,
        textAlign: 'center',
      },
    controlerCountTask:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})