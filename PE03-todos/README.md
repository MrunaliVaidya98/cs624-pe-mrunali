# Input

The application accepts a todo description from the user through a React Native TextInput component. The entered text is stored in the inputValue state variable. The Input component receives inputValue and inputChange from the parent App component as props. When the user types, onChangeText sends the latest value to the inputChange method.

# Process

When the user presses the Submit button, the submitTodo method checks whether the input is empty. A valid input is converted into a todo object containing a title, todoIndex, and complete status. The spread operator creates a new array containing the existing todos and the newly created item. React then updates the todos array using setState and clears the text field.

# Output

The application displays a heading, text input, and Submit button. Each submitted item is stored in the todos array and logged in the GitHub Codespaces terminal. The terminal output shows the title, index, completion value, and updated array, confirming that the program processed the input successfully.
