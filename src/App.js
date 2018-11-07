import './App.scss'
import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
import {MainLayout} from './layout'

const App = () => <Provider store={createStore(reducers)}>
    <div className="App">
      <MainLayout />
    </div>
  </Provider>

export default App
