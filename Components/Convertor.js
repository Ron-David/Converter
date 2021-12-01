import React from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Convertor = ({ unit }) => {
    const [number1, onChangeNumber1] = React.useState(0);
    const [selectedValue1, setSelectedValue1] = React.useState("1");
    const [number2, onChangeNumber2] = React.useState(0);
    const [selectedValue2, setSelectedValue2] = React.useState("1");

    const handleSwitch = () => {
        setSelectedValue1(selectedValue2)
        setSelectedValue2(selectedValue1)
        onChangeNumber1(number2)
        onChangeNumber2(number1)
    }


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { onChangeNumber1(text), onChangeNumber2(String((Number(text) * Number(selectedValue1)) / Number(selectedValue2))) }}
                    value={number1.toString()}
                    placeholder="Number"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { onChangeNumber2(text), onChangeNumber1(String((Number(text) * Number(selectedValue1)) / Number(selectedValue2))) }}
                    value={number2.toString()}
                    placeholder="Number"
                    keyboardType="numeric"
                />

            </View>
            <View style={{ alignItems: 'center', alignItems: 'center' }}>
                <Pressable onPress={() => handleSwitch()}>
                    <MaterialCommunityIcons name="swap-horizontal" size={35} color="black" />
                </Pressable>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Picker
                    style={styles.picker}
                    selectedValue={selectedValue1}
                    onValueChange={(itemValue) => { setSelectedValue1(itemValue), onChangeNumber2(String((Number(number1) * Number(itemValue)) / Number(selectedValue2))) }}
                >

                    {unit.map(picker => {
                        return <Picker.Item key={picker.key} label={picker.label} value={picker.value} />
                    })}
                </Picker>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue) => { setSelectedValue2(itemValue), onChangeNumber2(String((Number(number1) * Number(selectedValue1)) / Number(itemValue))) }}
                >
                    {unit.map(picker => {
                        return <Picker.Item key={picker.key} label={picker.label} value={picker.value} />
                    })}
                </Picker>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: '75%',
        justifyContent: 'center',
        borderColor: '#d6d6d6',
        borderWidth: 1,

    },
    picker: {
        width: 150,
        margin: 12,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: '#d6d6d6',

    },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: '#d6d6d6',

    },
});

export default Convertor;