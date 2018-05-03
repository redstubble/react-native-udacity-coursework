import React from 'react'
import AddEntry from './components/AddEntry'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import configureStore from './components/configureStore'

const store = configureStore()

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }}/>
          <History />
        </View>
      </Provider>
    )
  }
}



