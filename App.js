import React from 'react'
import AddEntry from './components/AddEntry'
import { View } from 'react-native'


export default class App extends React.Component {

  render() {
    return (
      <View>
        <AddEntry/>
      </View>
    );
  }
}



