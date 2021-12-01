import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';

const WeightScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* <Text>This is {route.params.name}'s profile</Text>; */}
                <Text style={{ fontSize: 30, color: 'white' }}>Boom</Text>
                <StatusBar style="light" />
            </View>
        </SafeAreaView>
    );
};

export default WeightScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
