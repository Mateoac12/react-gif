import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Header } from './components/Header'
import { ScreenContainer } from './components/ScreenContainer'
import { GifContextProvider } from './context/GifsContext'

ReactDOM.render(
  <React.StrictMode>
    <GifContextProvider>
      <Header />
      <ScreenContainer>
        <App />
      </ScreenContainer>
    </GifContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
