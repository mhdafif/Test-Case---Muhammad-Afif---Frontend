import React from 'react'

import { CommunityState } from './context/CommunityState';

import Main from './components/Main';

import './styles/styles.css';

const App = () => {
  return (
    <div className="app">
      <CommunityState>
        <Main />
      </CommunityState>
    </div>
  )
}

export default App
