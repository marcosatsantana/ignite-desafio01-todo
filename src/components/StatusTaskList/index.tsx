import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function StatusTaskList({createdCount, completedTask}) {
    return (
        <View style={styles.container}>
            <View style={styles.controlerCountTask}>
                <Text style={styles.taskCountTextCreated}>Criadas
                </Text>
                <Text style={styles.taskCountNumber}>{createdCount}</Text>
            </View>
            <View style={styles.controlerCountTask}>
                <Text style={styles.taskCountTextFinalized}>Concluidas
                </Text>
                <Text style={styles.taskCountNumber}>{completedTask}</Text>
            </View>
        </View>
    )
};
