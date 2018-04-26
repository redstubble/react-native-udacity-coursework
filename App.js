import React from 'react'
import AddEntry from './components/AddEntry'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'


export default class App extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#D4271B'>
          <Text style={styles.btnText}>TouchableHighlight</Text>
        </TouchableHighlight>
        {/* <AddEntry /> */}
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback  onPress={this.handlePress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableNativeFeedback 
          background={TouchableNativeFeedback.SelectableBackground()}
          >
          <View style={styles.btn}>
            <Text style={styles.btnText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
  ,
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
})



