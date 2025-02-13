import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="container">
        <GifListContainer />
      </div>
    </div>
  )
}

export default App
