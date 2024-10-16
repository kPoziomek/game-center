import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'rsuite/dist/rsuite.min.css';
import './index.css'
import {ThemeProvider} from "./ThemeProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)

