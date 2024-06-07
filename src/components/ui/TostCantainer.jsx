// components/ToastContainer.js

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {
  return (
    <div className='relative z-50'>
      <ToastContainer />
    </div>
  )
}

export default Toast
