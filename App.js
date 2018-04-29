import React from 'react'
import AddEntry from './components/AddEntry'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <AddEntry/>
        </View>
      </Provider>
    );
  }
}



