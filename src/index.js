import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider, getMovistarSkin } from '@telefonica/mistica'
import App from './app'

const root = ReactDOM.createRoot(document.getElementById('root'))

const misticaTheme = {
  skin: getMovistarSkin(),
  i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
}

root.render(
  <React.StrictMode>
    <ThemeContextProvider theme={misticaTheme}>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
