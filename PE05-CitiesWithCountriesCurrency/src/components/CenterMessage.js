import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

export default function CenterMessage({ message }) {
  return <View style={styles.container}><Text style={styles.message}>{message}</Text></View>;
}

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 2, borderBottomColor: colors.primary },
  message: { alignSelf: 'center', fontSize: 20 },
});
