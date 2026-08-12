import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image
                accessibilityLabel="Profile avatar"
                style={styles.cardImage}
                source={require('../../assets/images/user.png')}
              />
            </View>

            <Text style={styles.name}>Mrunali Vaidya</Text>
            <Text style={styles.occupation}>React Native Developer</Text>

            <Text style={styles.description}>
              Mrunali is a software developer who enjoys creating clean,
              responsive mobile applications. She uses JavaScript and React
              Native to build user-friendly experiences for iOS, Android, and
              the web.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  cardContainer: {
    alignItems: 'center',
    borderColor: '#111827',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    minHeight: 460,
    paddingHorizontal: 28,
    paddingBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#111827',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
  },

  cardImage: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },

  name: {
    marginTop: 22,
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },

  occupation: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#eaf4ff',
    textAlign: 'center',
  },

  description: {
    marginTop: 22,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: 'white',
  },
});
