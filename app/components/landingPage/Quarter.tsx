import React from 'react'
import QuarterSaturdaysPage from './QuarterSaturday'

function Quarter() {
  return (
<main className='bg-[#14364d] flex flex-col items-center justify-center text-white py-10 px-4 mb-6'>
   <div className='w-[80%]'>
     <h1 className='text-3xl font-bold m-6 text-center'>Amazing and Free Webinar</h1>
    <p className='text-center mb-6'>Join us for our upcoming Quarterly Webinar for <span className='underline'><em>Free</em></span>, where we’ll share key updates, spotlight stories, new features, and exclusive insights from The Cyber Safety Alliance team.</p>

    <QuarterSaturdaysPage/>

    <div>
        <form action="">
            <div className='flex flex-col justify-center items-center'>
                <label htmlFor="" className=' flex flex-col justify-center items-center text-center mb-2'>Email Address</label>
                <input type="text" placeholder='email address'  className='w-full border p-2 bg-white text-black'/>

                <button className='bg-[#19b6d7] text-white font-semibold px-4 py-2 mt-4 rounded hover:bg-[#16a1c0] transition-colors duration-300 w-1/2'>
                    Register
                </button>
            </div>
        </form>
    </div>
   </div>

</main>
  )
}

export default Quarter