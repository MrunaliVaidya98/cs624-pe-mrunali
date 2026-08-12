# Input

The application receives profile information defined inside the React Native component. The input includes a user image, the user’s name, occupation, and a short professional description. These values are presented through one Image component and three Text components. The profile image is stored locally under the assets/images directory and loaded with require().

# Process

The program uses nested View components to build the Profile Card. React Native StyleSheet objects control alignment, color, borders, spacing, typography, and card dimensions. The image is placed inside a circular container by using equal width and height values with a borderRadius equal to half of the container size. Flexbox centers the card on the screen. Separate text styles distinguish the name, occupation, and description. SafeAreaView keeps the interface inside the device’s safe display area.

# Output

The output is a centered blue Profile Card with rounded corners and a circular avatar. Beneath the image, the card displays the user’s name, occupation, and a readable profile description. The final interface demonstrates reusable React Native styling for images, text, spacing, borders, and layout.
