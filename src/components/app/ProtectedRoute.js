import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../../utils/auth'

const ProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace('/login')
      }
    }, [])

    return isAuthenticated() ? <WrappedComponent {...props} /> : null
    //   <div className='h-screen'>loading.................</div>
  }
}

export default ProtectedRoute
