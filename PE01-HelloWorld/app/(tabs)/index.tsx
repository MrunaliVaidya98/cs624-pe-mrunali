import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mrunali Vaidya</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 8,
  },
});
