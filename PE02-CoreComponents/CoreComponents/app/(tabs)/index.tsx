import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CoreComponents = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.logo}
      />

      <View style={styles.inputSection}>
        <Text style={styles.label}>Which course did you like?</Text>

        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Core Requirements{'\n'}(24 Credits)
        </Text>

        <Text style={styles.course}>CS 504 Software Engineering</Text>
        <Text style={styles.course}>CS 506 Programming for Computing</Text>
        <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
        <Text style={styles.course}>CS 533 Computer Architecture</Text>
        <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
        <Text style={styles.course}>
          CS 622 Discrete Math and Algorithms for Computing
        </Text>
        <Text style={styles.course}>
          DS 510 Artificial Intelligence for Data Science
        </Text>
        <Text style={styles.course}>
          DS 620 Machine Learning and Deep Learning
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Depth of Study{'\n'}(6 Credits)
        </Text>

        <Text style={styles.course}>
          CS 624 Full-Stack Development - Mobile App
        </Text>
        <Text style={styles.course}>
          CS 628 Full-Stack Development - Web App
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Capstone{'\n'}(3 Credits)
        </Text>

        <Text style={styles.course}>
          CS 687 Computer Science Capstone
        </Text>
      </View>
    </ScrollView>
  );
};

export default CoreComponents;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: 'white',
  },

  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 24,
    resizeMode: 'contain',
  },

  inputSection: {
    marginBottom: 28,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    fontSize: 16,
  },

  section: {
    marginBottom: 28,
  },

  heading: {
    backgroundColor: 'yellow',
    fontSize: 26,
    fontWeight: 'bold',
    padding: 8,
    marginBottom: 8,
  },

  course: {
    fontSize: 15,
    marginBottom: 6,
  },
});