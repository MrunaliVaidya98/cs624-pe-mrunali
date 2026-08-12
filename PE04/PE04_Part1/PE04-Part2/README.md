# Input

The application uses six profile records as input. Each record contains a name, occupation, profile description, and image. The image is stored locally in the assets/images folder. A tap on a card is also treated as input because it changes which profile is expanded.

# Process

React Native maps the six profile objects into reusable cards. Flexbox uses `flexDirection: 'row'` and `flexWrap: 'wrap'` to arrange the cards as a gallery. The selected card ID is stored in state. When a thumbnail is tapped, conditional styles enlarge that card while the remaining cards stay small. Tapping the expanded card again returns it to thumbnail size.

# Output

The output is a gallery containing six Profile Cards. Initially all cards appear as thumbnails. When the user taps a thumbnail, that profile expands and displays a larger image, name, occupation, and description. The layout demonstrates responsive Flexbox organization and interactive expand/collapse behavior.

## Screenshot Note

The included PNGs are representative preview screenshots generated from the implementation. For final submission, replace them with screenshots captured from your actual Expo/Expo Go runtime if required by your instructor.
