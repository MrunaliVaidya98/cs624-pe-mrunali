# Input
In the CoreComponents mobile app, a TextInput control is used to take information from the user. Into that field, the user may enter a preferred MSCS class name or its course identifier, for instance CS624. From the assets folder, the app loads an icon file stored on the device. Within the code itself, the program keeps the course titles and their groupings.

# Process
A React Native functional component written as an arrow function powers the app. Vertical scrolling for the display is provided by a ScrollView. Layout is arranged with View elements for the entry section and the course group areas. Headings and course details are rendered using Text elements. The Image element presents the bundled icon, and the TextInput element captures the user’s chosen course. Reusable formatting is set up with StyleSheet, covering spacing, outlines, type sizing, positioning, color choices, and overall arrangement.

# Output
On screen, the icon appears along with a field to enter a favorite course, plus eight required core classes, two depth-study classes, and a single capstone class. Category sections are divided by headings in yellow. Users are able to type in the field and scroll across the full set of courses.