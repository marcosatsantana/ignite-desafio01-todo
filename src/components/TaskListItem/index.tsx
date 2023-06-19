import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import Colors from '../Constants/Colors';

type PropsItem = {
    item: {
        id: string;
        title: string;
        done: boolean;
    },
    handleDeleteTask: Function,
    handleCompleteTask: Function
}

export default function TaskListItem({ item, handleDeleteTask, handleCompleteTask }: PropsItem) {
    return (
        <TouchableOpacity onPress={() => handleCompleteTask(item.title)}>
            <View style={styles.container}>
                <View style={styles.taskTextGroup}>
                    <MaterialCommunityIcons name={item.done ? "checkbox-marked-outline" : "square-rounded-outline"} size={24} color={item.done ? Colors.purpleDark : Colors.blue} />
                    <Text style={[styles.textList, {textDecorationLine: item.done ? 'line-through' : 'none', color: item.done ? Colors.gray300 : Colors.white}]}>{item.title}</Text>
                </View>
                <Ionicons name='trash' color='#808080' size={18} onPress={() => handleDeleteTask(item.title)} />
            </View>
        </TouchableOpacity>
    )
};
