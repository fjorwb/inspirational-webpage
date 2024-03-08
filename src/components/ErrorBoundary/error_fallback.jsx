/* eslint-disable react/prop-types */

export function ErrorFallback({ error }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback
