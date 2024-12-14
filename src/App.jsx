import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { LoginPage } from './Components/LoginPage'
import { Dashboard } from './Components/Dashboard'
import { NextUIProvider } from '@nextui-org/system'
import { createContext, useState } from 'react'

export const UserContext = createContext()

const App = () => {

  const [user, setUser] = useState(null)
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      path: 'dashboard',
      caseSensitive: false,
      element: <Dashboard />
    }
  ])

  return (

    <NextUIProvider>
      <main className='dark'>
        <UserContext.Provider value={{user, setUser}}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </main>
    </NextUIProvider>

  )
}

export default App
