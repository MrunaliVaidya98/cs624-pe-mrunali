# Input

The application accepts information through the AddCity and AddCountry screens. On the AddCountry screen, the user enters a country name and its currency in two text fields. The application checks both values before accepting the form. If either field is empty, an alert asks the user to complete the required information.

# Process

After validation, the application creates a country object containing a unique identifier, country name, and currency. The AddCountry component passes this object to the addCountry function in App.js. The function uses an immutable state update to add the object to the countries array. React then renders the updated interface. Navigation moves the user to the Countries tab after a successful submission.

# Output

The Countries screen displays every saved country and its currency. When no entries exist, it displays “No saved countries!” Four bottom tabs allow the user to move among Cities, AddCity, Countries, and AddCountry while the application is running.

## Run

```bash
npm install
npx expo start --tunnel --clear
```
