import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

export default function AddCity({ addCity, navigation }) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const submit = () => {
    if (!city.trim() || !country.trim()) return Alert.alert('Missing information', 'Please complete the form.');
    addCity({ id: uuid.v4(), city: city.trim(), country: country.trim(), locations: [] });
    setCity(''); setCountry(''); navigation.navigate('CitiesNav', { screen: 'Cities' });
  };
  return <View style={styles.container}><Text style={styles.heading}>Cities</Text><TextInput placeholder="City name" value={city} onChangeText={setCity} style={styles.input}/><TextInput placeholder="Country name" value={country} onChangeText={setCountry} style={styles.input}/><TouchableOpacity onPress={submit} style={styles.button}><Text style={styles.buttonText}>Add City</Text></TouchableOpacity></View>;
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', backgroundColor: colors.primary }, heading: { color: '#fff', fontSize: 40, marginBottom: 10, alignSelf: 'center' }, input: { height: 50, margin: 10, paddingHorizontal: 8, backgroundColor: '#fff' }, button: { height: 50, margin: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#666' }, buttonText: { color: '#fff', fontSize: 18 } });
