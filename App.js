import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Convertor from './Components/Convertor';
import { MaterialIcons } from '@expo/vector-icons';


var iconSize = 26;

const units = {
  unit: [
    [
      { key: 1, label: "Kilogram", value: "1000" },
      { key: 2, label: "Gram", value: "1" },
      { key: 3, label: "Miligram", value: "0.001" },
      { key: 4, label: "Pound", value: "453.59237" },
      { key: 5, label: "Ounce", value: "28.349523125" }
    ],
    [
      { key: 6, label: "Centimeter", value: "1" },
      { key: 7, label: "Meter", value: "100" },
      { key: 8, label: "Kilometer", value: "100000" },
      { key: 9, label: "Milimeter", value: "0.1" },
      { key: 10, label: "Inch", value: "2.54" },
      { key: 11, label: "Foot", value: "30.48" },
      { key: 12, label: "Yard", value: "91.44" },
      { key: 13, label: "Mile", value: "160934.4" }
    ],
    [
      { key: 14, label: "bit", value: "1" },
      { key: 15, label: "byte", value: "8" },
      { key: 16, label: "kilobit", value: "1024" },
      { key: 17, label: "kilobyte", value: "8192" },
      { key: 18, label: "megabit", value: "1048576" },
      { key: 19, label: "megabyte", value: "8388608" },
      { key: 20, label: "gigabit", value: "1073741824" },
      { key: 21, label: "gigabyte", value: "8589934592" },
      { key: 22, label: "terabit", value: "1099511627776" },
      { key: 23, label: "terabyte", value: "8796093022208" },
      { key: 24, label: "petabit", value: "1125899906842631" },
      { key: 25, label: "petabyte", value: "9007199254740640" },
      { key: 26, label: "exabit", value: "1152921504606851600" },
      { key: 27, label: "exabyte", value: "9223372036854813000" },
    ]

  ]

}

const App = () => {
  const [tabOption, setTabOption] = React.useState(0)

  const tabSelectedColor = option => {
    if (option === tabOption) {
      return "#ffb800"
    } else
      return "#202020"
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{
          fontSize: 30, color: 'white', fontWeight: 'bold', padding: 20
        }}>Unit Convertor</Text>
        <Convertor unit={units.unit[tabOption]} />
        <StatusBar style="light" />
      </View>

      <View style={styles.NavigationContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => setTabOption(0)} style={styles.IconBehave} android_ripple={{ borderless: true, radius: 50 }}>
            <MaterialCommunityIcons name="scale-bathroom" size={iconSize} color={tabSelectedColor(0)} />
          </Pressable>
          <Pressable onPress={() => setTabOption(1)} style={styles.IconBehave} android_ripple={{ borderless: true, radius: 50 }}>
            <MaterialCommunityIcons name="tape-measure" size={iconSize} color={tabSelectedColor(1)} />
          </Pressable>
          <Pressable onPress={() => setTabOption(2)} style={styles.IconBehave} android_ripple={{ borderless: true, radius: 50 }}>
            <MaterialIcons name="sd-storage" size={iconSize} color={tabSelectedColor(2)} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>

  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc700',
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
    backgroundColor: '#E8EAED',
    borderColor: '#d6d6d6',
    borderWidth: 1,
    width: '90%',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    justifyContent: 'space-evenly',
    borderRadius: 40,

  },
  IconBehave: {
    padding: 14,
  },

})
