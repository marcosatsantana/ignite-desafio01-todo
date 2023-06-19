import { Alert, FlatList, Text, View } from "react-native";
import StatusTaskList from "../StatusTaskList";
import { styles } from "./styles";
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import TaskListItem from "../TaskListItem";
import InputText from "../InputText";
import moment from "moment";

interface Task {
    id: string;
    title: string;
    done: boolean;
}
export function TasksList() {
    const [task, setTask] = useState<Task[]>([]);

    function handleAddTask(taskNew: string) {

        const generateId = () => {
            return moment().format('YYYYMMDDHHmmss');
        };

        setTask([
            ...task,
            { id: generateId(), title: taskNew, done: false },
        ]);
    }
    function handleCompleteTask(taskNew: string) {
        setTask((prevState) =>
            prevState.map((task) =>
                task.title === taskNew ? { ...task, done: task.done === true ? false : true } : task
            )
        );
    }

    function handleDeleteTask(taskOld: string) {
        Alert.alert('Remover', `Deseja remover task "${taskOld}" ?`, [
            {
                text: 'Sim',
                onPress: () => setTask(prevState => prevState.filter(task => task.title !== taskOld))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <>
            <InputText handleAddTask={handleAddTask} />
            <View style={styles.container}>
                <StatusTaskList createdCount={task.length} completedTask={task.filter(taskFiltred => taskFiltred.done == true).length}/>
                <FlatList
                    data={task}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TaskListItem item={item} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmpty}>
                            <FontAwesome5 name="clipboard-list" size={54} color="#808080" />
                            <Text style={[styles.textEmptyListTitle, { paddingTop: 16 }]}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.textEmptyListBody}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </>
    )
};
