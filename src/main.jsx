import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ErrorBoundary } from 'react-error-boundary'

import { Provider } from 'react-redux'
import { store } from './store/store.js'

import App from './App.jsx'

// import ErrorFallback from './components/ErrorBoundary/error_fallback.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
)
