import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    const { inputValue, todos } = this.state;
    const trimmedValue = inputValue.trim();

    if (trimmedValue === '') {
      Alert.alert('Input Required', 'Please enter a todo item.');
      return;
    }

    const newTodo = {
      title: trimmedValue,
      todoIndex: todos.length,
      complete: false,
    };

    const updatedTodos = [...todos, newTodo];

    this.setState({
      todos: updatedTodos,
      inputValue: '',
    });

    console.log('Added Todo:', newTodo);
    console.log('Todos Array:', updatedTodos);
  }

  render() {
    const { inputValue } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.content}
        >
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />

          <Button submitTodo={() => this.submitTodo()} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
