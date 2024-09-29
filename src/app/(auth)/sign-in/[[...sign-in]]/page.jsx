import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='h-screen flex flex-row justify-center items-center w-full'>
       <div className='w-1/2 flex  justify-center h-screen mx-4'>
        <Image src={"/login.jpg"} alt="login" width={500} height={800} className='h-screen w-full object-contain rounded-lg' />
       </div>
       <div className=' w-1/2 flex flex-col justify-center items-center'>
          <SignIn />
       </div>
    </div>
  )
}