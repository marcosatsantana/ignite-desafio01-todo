import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../Constants/Colors';

export default function InputText({ handleAddTask }) {
    const [newTask, setNewTask] = useState<string>('');
    const [presIn, setPresIn] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Adicione uma nova tarefa'
                style={[styles.Input, { borderWidth: presIn ? 2 : 0, borderColor: Colors.purple }]}
                onChangeText={setNewTask}
                placeholderTextColor='#808080'
                value={newTask}
                onFocus={() => setPresIn(true)}
                onBlur={() => setPresIn(false)}
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
