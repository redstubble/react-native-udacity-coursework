import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    console.log('Before')
    debugger;
    console.log('After')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Edit App.js to start working on your app!</Text>
        <Text>Then make will automatically reload.</Text>
        <Text>you menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
