import PropTypes from 'prop-types'

export function ErrorFallback({ error }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
}

export default ErrorFallback
