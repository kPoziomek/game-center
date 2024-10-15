import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'rsuite/dist/rsuite.min.css';
import {RootComponent} from "./RootComponent.tsx";






createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootComponent>
      <App />
    </RootComponent>
  </StrictMode>
)

