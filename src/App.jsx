import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './toolkit/store'

function App() {

  return (
    <Provider store={store}>
      <div className=''>
        <Header />
        <Body />
      </div>
    </Provider>
  )
}

export default App
