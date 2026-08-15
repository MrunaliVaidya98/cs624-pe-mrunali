import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

export default function AddCountry({ addCountry, navigation }) {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const submit = () => {
    if (!country.trim() || !currency.trim()) return Alert.alert('Missing information', 'Please enter a country and currency.');
    addCountry({ id: uuid.v4(), country: country.trim(), currency: currency.trim() });
    setCountry(''); setCurrency(''); navigation.navigate('Countries');
  };
  return <View style={styles.container}><Text style={styles.heading}>Countries</Text><TextInput placeholder="Country name" value={country} onChangeText={setCountry} style={styles.input}/><TextInput placeholder="Currency" value={currency} onChangeText={setCurrency} style={styles.input}/><TouchableOpacity onPress={submit} style={styles.button}><Text style={styles.buttonText}>Add Country</Text></TouchableOpacity></View>;
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', backgroundColor: colors.primary }, heading: { color: '#fff', fontSize: 40, marginBottom: 10, alignSelf: 'center' }, input: { height: 50, margin: 10, paddingHorizontal: 8, backgroundColor: '#fff' }, button: { height: 50, margin: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#666' }, buttonText: { color: '#fff', fontSize: 18 } });
