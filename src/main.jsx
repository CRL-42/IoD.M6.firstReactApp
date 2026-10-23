import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import './index.css'
import App from './App.jsx'
import ErrorMessage from './ErrorMessage.jsx'

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>,
);