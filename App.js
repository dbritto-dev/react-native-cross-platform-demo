import React, { useEffect } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';
import * as Print from './expo-agnostic/expo-print';
import * as Facebook from './expo-agnostic/expo-facebook';

////////////////////////////////////////////////////////////////////////////////////////////////////

import './third-party/facebook-sdk';

////////////////////////////////////////////////////////////////////////////////////////////////////

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
  web: (
    <Text accessibilityRole="button" style={{ color: 'blue' }} onPress={() => location.reload()}>
      Click in this text to reload
    </Text>
  ),
});

function App() {
  useEffect(() => console.log('using hooks'), []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Button
        color="#1877f2"
        title="Facebook login"
        onPress={async () => {
          console.log(await Facebook.logInWithReadPermissionsAsync('2084560051617430'));
        }}
      />
      <Button
        color="#8e44ad"
        title="Print"
        onPress={async () => {
          console.log(await Print.printAsync());
        }}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
