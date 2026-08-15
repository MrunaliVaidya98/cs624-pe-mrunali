import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function City({ route }) {
  const city = route.params?.city;
  return <View style={styles.details}><Text style={styles.title}>{city?.city}</Text><Text style={styles.subtitle}>{city?.country}</Text></View>;
}

function CitiesStack({ cities }) {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.primary }, headerTintColor: '#fff' }}>
      <Stack.Screen name="Cities">{(props) => <Cities {...props} cities={cities} />}</Stack.Screen>
      <Stack.Screen name="City" component={City} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const addCity = (city) => setCities((items) => [...items, city]);
  const addCountry = (country) => setCountries((items) => [...items, country]);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 11 } }}>
        <Tab.Screen name="CitiesNav" options={{ title: 'Cities', headerShown: false }}>
          {(props) => <CitiesStack {...props} cities={cities} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">{(props) => <AddCity {...props} addCity={addCity} />}</Tab.Screen>
        <Tab.Screen name="Countries">{(props) => <Countries {...props} countries={countries} />}</Tab.Screen>
        <Tab.Screen name="AddCountry">{(props) => <AddCountry {...props} addCountry={addCountry} />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  details: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '600' },
  subtitle: { marginTop: 5, fontSize: 18, color: '#666' },
});
