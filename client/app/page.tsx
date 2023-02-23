
export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-10"> ResuFix</h1>
      <div>
        <div className="text-center">

          <div className='flex flex-col items-center justify-center mb-5'>
           {/*Icon HERE*/}
           
           <h2 className="font-bold text-2xl">Features</h2>
            </div>

            <div className='space-y-2'>
            <p className='infoText font-semibold animate-bounce'>"Grammar Check"</p>
            <p className='infoText font-semibold animate-bounce'>"Spelling Check"</p>
            <p className='infoText font-semibold animate-bounce'>"Resume Outline"</p>
            <p className='infoText font-semibold animate-bounce'> "Chat Guidance"</p>
            </div>
            
        </div>

      </div>

      </div>
  )
}
