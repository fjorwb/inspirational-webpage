import loadergif from '../../assets/loader.gif'

// import '../../styles/loader.css'

export function Loader() {
  return (
    <div>
      <img
        src={loadergif}
        alt='loader'
      />
    </div>
  )
}

export default Loader
