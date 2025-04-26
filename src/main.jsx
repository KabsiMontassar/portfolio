import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import './i18n/config'

import './index.css'  
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  storageManager: {
    get: () => localStorage.getItem('chakra-ui-color-mode'),
    set: (value) => localStorage.setItem('chakra-ui-color-mode', value),
  }
}

const theme = extendTheme({ config })

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
