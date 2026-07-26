import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#efefef"
      style={styles.button}
      onPress={submitTodo}
    >
      <Text style={styles.submit}>Submit</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  button: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  submit: {
    fontSize: 16,
    color: '#555555',
  },
});

export default Button;
