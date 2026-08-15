import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default function Cities({ cities, navigation }) {
  return <ScrollView contentContainerStyle={!cities.length && styles.fill}><View style={!cities.length && styles.empty}>
    {!cities.length && <CenterMessage message="No saved cities!" />}
    {cities.map((item) => <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('City', { city: item })}><View style={styles.row}><Text style={styles.name}>{item.city}</Text><Text style={styles.detail}>{item.country}</Text></View></TouchableWithoutFeedback>)}
  </View></ScrollView>;
}

const styles = StyleSheet.create({ fill: { flexGrow: 1 }, empty: { flex: 1, justifyContent: 'center' }, row: { padding: 10, borderBottomWidth: 2, borderBottomColor: colors.primary }, name: { fontSize: 20 }, detail: { color: 'rgba(0,0,0,.5)' } });
