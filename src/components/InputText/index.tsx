import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons'

export default function InputText({ handleAddTask }) {
    const [newTask, setNewTask] = useState<string>('');

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Adicione uma nova tarefa'
                style={styles.Input}
                onChangeText={setNewTask}
                placeholderTextColor='#808080'
                value={newTask}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
                handleAddTask(newTask)
                setNewTask('')
            }}>
                <Ionicons name='add-circle-outline' size={18} color='white' />
            </TouchableOpacity>
        </View>
    )
};
