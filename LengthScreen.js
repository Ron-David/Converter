import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';

const LengthScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ fontSize: 30, color: 'white' }}>LengthScreen</Text>
                <StatusBar style="light" />
            </View>

            <View style={styles.NavigationContainer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => navigation.navigate('Profile', { name: 'Jane' })} style={styles.IconBehave} android_ripple={{ borderless: true, radius: 50 }}>
                        <MaterialCommunityIcons name="scale-bathroom" size={iconSize} color="#202020" />
                    </Pressable>
                    <Pressable onPress={() => console.log("prsss")} style={styles.IconBehave} android_ripple={{ borderless: true, radius: 50 }}>
                        <FontAwesome5 name="tape" size={iconSize} color="#202020" />
                    </Pressable>
                    <Pressable onPress={() => console.log("prsss")} style={styles.IconBehave} android_ripple={{ borderless: true, radius: 50 }}>
                        <MaterialCommunityIcons name="speedometer" size={iconSize} color="#202020" />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LengthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center'
    },
    NavigationContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 40,
    },
    NavBar: {
        flexDirection: 'row',

        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40,

    },
    IconBehave: {
        padding: 14,
    },
    // NavigationItem: {

    //   flex: 0.3,
    //   backgroundColor: '#fff',
    //   borderWidth: 0.2,
    //   margin: 1,
    //   borderTopLeftRadius: 10,
    //   borderTopRightRadius: 10,
    //   borderBottomRightRadius: 10,
    //   borderBottomLeftRadius: 10,
    // },
})
