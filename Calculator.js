import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function Calculator({ navigation }) {

    const [a, setNumbera] = useState(0);
    const [b, setNumberb] = useState(0);
    const [data, setData] = useState([]);
    const [Result, setResult] = useState('');

    const buttonPlus = () => {
        setResult(parseInt(a) + parseInt(b));
        setData([...data, a + " + " + b + " = " + (parseInt(a) + parseInt(b))]);
    };

    const buttonMinus = () => {
        setResult(a - b);
        setData([...data, a + " - " + b + " = " + (a - b)]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>Result: {Result}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={a => setNumbera(a)}
                    value={a}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={b => setNumberb(b)}
                    value={b}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={buttonPlus}
                    title="+"
                />
                <Button
                    onPress={buttonMinus}
                    title="-"
                />
                <Button
                    onPress={() => navigation.navigate('History', { _data: data })}
                    title="HISTORY"
                />
            </View>
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
