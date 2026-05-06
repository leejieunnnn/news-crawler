import { useState } from 'react'
import SignupPage from './pages/SignupPage'
import MainPage from './pages/MainPage'
import './index.css'

export default function App() {
  // 'signup' | 'main'
  const [page, setPage] = useState('signup')

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', minHeight: '100vh' }}>
      {page === 'signup' ? (
        <SignupPage onSignup={() => setPage('main')} />
      ) : (
        <MainPage />
      )}
    </div>
  )
}