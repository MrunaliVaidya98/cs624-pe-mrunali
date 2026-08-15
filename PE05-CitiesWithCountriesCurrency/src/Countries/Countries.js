import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default function Countries({ countries }) {
  return <ScrollView contentContainerStyle={!countries.length && styles.fill}><View style={!countries.length && styles.empty}>
    {!countries.length && <CenterMessage message="No saved countries!" />}
    {countries.map((item) => <View key={item.id} style={styles.row}><Text style={styles.name}>{item.country}</Text><Text style={styles.detail}>{item.currency}</Text></View>)}
  </View></ScrollView>;
}

const styles = StyleSheet.create({ fill: { flexGrow: 1 }, empty: { flex: 1, justifyContent: 'center' }, row: { padding: 10, borderBottomWidth: 2, borderBottomColor: colors.primary }, name: { fontSize: 20 }, detail: { color: 'rgba(0,0,0,.5)' } });
