import React from 'react';
import Header from '../../components/Header';
import { View } from 'react-native';
import { styles } from './styles';
import { TasksList } from '../../components/TasksList';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <TasksList />
        </View>
    )
};
