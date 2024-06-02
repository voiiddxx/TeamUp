import React from 'react'

const SecondFold = () => {
    const res =[2,5,6,3]
  return (
<div className='pb-4 w-full py-4 bg-gradient-to-b from-stone-900 to-stone-900 px-20' >
    <h1 className='text-sm text-zinc-300' >Popular Matches</h1>

    <div className='flex gap-2 mt-4' >
        {
            res.map((curr:any)=>{
                return <div className='h-[200px] w-[450px] bg-stone-800 border border-stone-900 hover:bg-stone-900 transition-all px-3 py-4' >
                    <p className='text-zinc-400' >5 Nov 2024</p>
                    <p className='text-xs text-red-500 tracking-wide' >Bathinda Punjab , INDIA</p>
                    {/* other details */}
                    <div className=' h-full w-full flex justify-between' >
                        {/* team card div */}
                        <div className='flex flex-col mt-4 gap-6' >

                                <div className='flex items-center gap-2' >
                                    <div className='h-8 w-8 rounded-full bg-stone-700' ></div>
                                    <p className='text-zinc-400 tracking-wide' >India</p>
                                </div>
                                <div className='flex items-center gap-2' >
                                    <div className='h-8 w-8 rounded-full bg-stone-700' ></div>
                                    <p className='text-zinc-400 tracking-wide' >India</p>
                                </div>
                        </div>
                        {/* team card div end */}
                        {/* score card div */}
                        <div className='flex flex-col items-center gap-6 mt-5' >
                            <div className='h-8 w-8 rounded-md bg-stone-700' >

                            </div>
                            <div className='h-8 w-8 rounded-md bg-stone-700' >

                            </div>
                        </div>
                        {/* score card div end */}
                    </div>
                </div>
            })
        }
    </div>

    </div>
  )
}

export default SecondFold