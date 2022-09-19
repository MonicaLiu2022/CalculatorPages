import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function History({ route, navigation }) {

    const { _data } = route.params;

    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList
                data={_data}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        width: 200,
        borderColor: 'gray',
        borderWidth: 1
    }
});
