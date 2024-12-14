import { useContext, useState } from 'react'
import blueGradient from '../assets/Dashboard_gradient_dark.png'
import logo from '../assets/Logo.png'
import { ProfileIcon } from '../Icons/ProfileIcon'
import { ArrowRight } from '../Icons/ArrowRight'
import { Hr } from './Hr'
import { CardIcon } from '../Icons/CardIcon'
import { NameIcon } from '../Icons/NameIcon'
import { MailIcon } from '../Icons/MailIcon'
import { AdultIcon } from '../Icons/AdultIcon'
import { LeftArrow } from '../Icons/LeftArrow'
import { auth } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'
import { BarChart } from './BarChart'
import { PieChart } from './PieChart'
import { WatchHistory } from './WatchHistory'
import { DateGrid } from './DateGrid'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { Spinner } from './Spinner'

export const Dashboard = () => {

  const [showProfiles, setShowProfiles] = useState(false)
  const {user, setUser} = useContext(UserContext)
  console.log(user)
  const navigate = useNavigate()
  const [showSpinner, setShowSpinner] = useState(false)

  const logOut = async () => {
    setShowSpinner(true)
    try {
      setTimeout( async () => {
        await signOut(auth)
        navigate('/')
      }, 1000);
    }
    catch (error) {
      console.log("Sign out request exited with error: ", error)
      setShowSpinner(false)
    }
  }


  return (
    <div
      className='w-screen h-screen border-[#7790ae92]'
      style={{
        background: `url(${blueGradient}) no-repeat center/cover`
      }}
    >
      <div className='w-full h-full max-h-screen overflow-hidden'>
        <header className='bg-[#0000007a] backdrop-blur-xl px-16 pt-6 pb-4'>
          <h1 className='text-white font-medium text-7xl flex items-center gap-5'>
            <p>Your</p>
            <img src={logo} className='w-[11%] mt-[5px]' />
            <p>Profile Statistics</p>
          </h1>
        </header>
        <main className='flex w-full px-16 pt-8 gap-8'>

          <div className='min-w-[25%] bg-[#52545f2d] rounded-3xl py-6 pb-6 mb-24 max-h-full overflow-y-hidden no-scrollbar relative transition-all duration-500 ease-linear'>

            <div className={`${showProfiles ? 'opacity-0' : 'opacity-100'} transition-all duration-500 ease-linear pb-20`}>
              <div className='flex flex-col items-center pb-5'>

                <img
                  src={user.profiles[user.profileSelected].photoURL}
                  className='w-6/12 rounded-[10px]'
                />

                <h1 className='text-neutral-200 font-medium text-[2.5rem] cursor-pointer'>{"Hi, " + user.profiles[user.profileSelected].name}</h1>

                <p className='flex flex-row items-center text-neutral-400 font-medium text-lg hover:cursor-pointer gap-2 '>
                  <ProfileIcon />
                  {user.profileSelected == 1 ? 'Primary Profile' : 'Secondary Profile'}
                </p>

                <div
                  className='flex items-center bg-neutral-800/40 pl-4 py-2 rounded-full relative mt-8 hover:bg-neutral-800/50 hover:cursor-pointer hover:scale-[1.02] transition-all duration-500 ease-linear'
                  style={{
                    boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.5), 0 5px 10px rgba(0, 0, 0, 0.3)"
                  }}
                  onClick={() => setShowProfiles(true)}
                >
                  {
                    user.profiles.map((profile, index) => (index > 0) && (
                      <img
                        src={profile.photoURL}
                        className={`w-9 rounded-full border-[2px] border-[#989898] ${(() => {
                          if (index == 1) return 'z-10'
                          if (index == 2) return 'z-20 -translate-x-3'
                          if (index == 3) return 'z-30 -translate-x-5'
                          if (index == 4) return 'z-40 -translate-x-7'
                          if (index == 5) return 'z-50 -translate-x-9'
                        })()
                          }`}
                      />
                    ))
                  }
                  <p className='absolute right-2'> <ArrowRight /> </p>
                </div>
              </div>
              <Hr title={"Account Details"} />
              <div className='px-8 pt-5 flex flex-col gap-1'>
                <p className='flex items-center text-neutral-400 gap-3 font-medium text-[1.09rem]'>
                  <NameIcon />
                  {user.profiles[user.profileSelected].name}
                </p>
                <p className='flex items-center text-neutral-400 gap-3 font-medium text-[1.09rem]'>
                  <MailIcon />
                  {user.email}
                </p>
                <p className='flex items-center text-neutral-400 gap-3 font-medium text-[1.09rem]'>
                  <CardIcon />
                  Premium 4K + HDR Plan
                </p>
                <p className='flex items-center text-neutral-400 gap-3 font-medium text-[1.09rem]'>
                  <AdultIcon />
                  Adult Profile
                </p>
              </div>

              <button
                className='bg-neutral-300 py-3 w-full font-bold text-xl absolute bottom-0 text-black hover:bg-neutral-400 transition-all duration-300 ease-linear'
                onClick={logOut}
              >Log Out</button>

            </div>
            <div className={`bg-[#52545f2d] w-full h-full rounded-3xl transition-all duration-300 ease-linear absolute top-0 z-50 ${showProfiles ? 'opacity-100' : '-translate-x-[450px] opacity-0'}`}>
              <header className='flex items-center gap-3 border-b-[1px] border-slate-600/100'>
                <p
                  className='hover:cursor-pointer hover:bg-slate-200/10 transition-all duration-300 ease-linear px-7 pt-7 pb-6'
                  onClick={() => setShowProfiles(false)}
                > <LeftArrow /> </p>
                <h1 className='text-white font-medium text-3xl'>Profiles</h1>
              </header>
              <div className='py-2'>
                {
                  user.profiles.map((profile, index) => {
                    return (index > 0) && (
                      <div
                        className='w-full px-4 py-1 relative'
                        onClick={() => {
                          setUser({
                            ...user,
                            profileSelected: index
                          })
                          setShowProfiles(false)
                        }}
                      >

                        <div className={`rounded-2xl py-3 px-4 flex w-full items-center gap-5 transition-all duration-500 ease-linear ${index == user.profileSelected ? 'bg-black/30 hover:cursor-not-allowed scale-[0.95]' : 'cursor-pointer hover:bg-neutral-700/20 hover:backdrop-blur-2xl hover:scale-[0.97]'} `}>

                          <img
                            src={profile.photoURL}
                            className='w-[20%] rounded-xl'
                          />

                          <div className='relative flex-grow'>

                            <h1 className='font-medium text-3xl text-white'>{profile.name}</h1>
                            {
                              (index == user.profileSelected) && <h3 className='text-[#126bfa] font-medium text-lg'>Selected</h3>
                            }
                            {
                              (index != user.profileSelected) && <p className='absolute top-1 right-2'> <ArrowRight /> </p>
                            }
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 max-h-[850px]'>
            <div className='w-full flex max-h-[57%] rounded-2xl gap-6 items-start'>
              <BarChart data={user.profiles[user.profileSelected].watchedHours} />
              <WatchHistory data={user.profiles[user.profileSelected].watchHistory} />
            </div>
            <div className='w-full flex gap-6 box-border'>
              <PieChart data={user.profiles[user.profileSelected].genres} />
              <DateGrid unavailableDateStrings={user.profiles[user.profileSelected].activeDays}/>
            </div>
            {
              (showSpinner) && <Spinner />
            }
          </div>
        </main>
      </div>
    </div>
  )
}