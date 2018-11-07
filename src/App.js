import './App.scss'
import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './redux/reducers';
import {MainLayout} from './layout'

const store = createStore(
  reducers,
  composeWithDevTools()
)

const App = () => <Provider store={store}>
    <div className="App">
      <MainLayout />
    </div>
  </Provider>

export default App
