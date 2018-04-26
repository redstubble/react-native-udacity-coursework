import React from 'react'
import AddEntry from './components/AddEntry'
import {
  Text,
  View,
  StyleSheet,
  Slider
} from 'react-native'


export default class App extends React.Component {
  state = {
    value: 0
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          step={1}
          minimumValue={-10}
          maximumValue={10}
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />
        <Text>
          Value: {this.state.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})



