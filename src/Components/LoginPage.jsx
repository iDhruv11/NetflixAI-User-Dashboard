import { useAsyncError, useNavigate } from 'react-router-dom'
import redGradient from '../assets/login_gradient.jpg'
import { Login } from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../firebaseConfig'
import { useContext, useEffect, useState } from 'react'
import { Spinner } from './Spinner'
import { doc, getDoc } from 'firebase/firestore'
import { UserContext } from '../App'

export const LoginPage = () => {

    const navigate = useNavigate()
    const [showSpinner, setShowSpinner] = useState(false)
    const {setUser} = useContext(UserContext)

    useEffect(() => {

        onAuthStateChanged(auth, async (user) => {

            if (user) {

                console.log("successfull Login")

                try {

                    const userDoc = await getDoc(doc(db, 'users', user.uid))

                    if (userDoc.exists()) {

                        const { email, emailVerified, profiles, profileSelected = 1 } = userDoc.data()
                        setUser({
                            email,
                            emailVerified,
                            profiles,
                            profileSelected
                        })
                    }

                    navigate('/dashboard')

                } catch (error) {

                    console.log("Error fetching User info form FireStore : ", error)

                }


            } else {
                console.log("user signed out")
                navigate('/')
            }
        })
    }, [])



    return (
        <div className=" w-screen h-screen">
            <img
                src={redGradient}
                className="w-full h-full"
                alt="background gradient login card"
            />
            <div className='w-full h-full absolute left-0 top-0 z-10'>
                <Login setShowSpinner={setShowSpinner} />
            </div>
            <h1 className='absolute top-[600px] left-[740px] text-neutral-500 pt-10 text-3xl uppercase bg-neutral-700'>THISISLONGENOUGHLINETO</h1>
            {
                (showSpinner) && <Spinner />
            }
        </div>
    )
}