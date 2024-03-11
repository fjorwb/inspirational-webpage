/* eslint-disable react/prop-types */
import close from '../../assets/close.png'
import '../../styles/modal.css'

export const Modal = ({ children, closeModal }) => {
  // const txt = isOpen ? '.is-open' : ''

  const handleModalClick = (e) => e.stopPropagation()

  return (
    <div className='modal-container'>
      {/* <article
        // className='modal txt'
        // className='modal'
        onClick={closeModal}
      > */}
      <div
        className='modal'
        onClick={handleModalClick}
      >
        <div
          className='modal-close'
          onClick={closeModal}
        >
          <img
            // className='modal-close-img'
            src={close}
            alt='close'
          />
        </div>
        {children}
      </div>
      {/* </article> */}
    </div>
  )
}

export default Modal
