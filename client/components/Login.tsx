'use client'
import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { FaceSmileIcon } from '@heroicons/react/24/outline';




 function Login() {
      
  return (

    <>
    <div className=' bg-blue-200 '>
    <FaceSmileIcon className='p-4 h-20' />
    <h1 className='font-bold p-4 '>ResuFix</h1>
    

    <div className='flex flex-col md:flex-row lg:flex-row p-5 bg-blue-500'>

      </div>

    </div>
   
   
     <div className='flex flex-col md:flex-row lg:flex-row p-5 bg-blue-500'>
      
      
      <div className='p-4 items-center lg:mt-10'>
      <h1 className=' text-6xl font-bold p-4 bg-linear tracking-wide animate-pulse'>Maximizing the Potential of Your Resume for Optimal Results</h1>
      <p className='font-medium text-2xl p-4 text-center mt-10 tracking-wide'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>

      "Resufix is an AI-powered platform that streamlines your resume for you, so you can focus on other application requirements.
       --- Simply upload your resume and let Resufix's intelligent analysis do the rest."
       </p>
       
      <button  onClick={ () => signIn() }   className='flex lg:mt-10 md:mt:5 bg-purple-800 
      rounded-full p-4 mx-auto py-4 px-10 hover:bg-gray-300 animate-pulse '>
       <h2 className='font-medium mx-auto text-black p-2 '>Get Started</h2> 
       
      </button>
      </div>


      <div className=' p-5  '>
      <Image className='' src={"/hiring.svg"} width={2000} height={1800} alt= "" />
      </div>

      </div>
      </>

  );
}

export default Login;