import React from 'react'


    type GetmatchProps = {
        data:any
    }

const GetMatch = ({data}:GetmatchProps) => {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen w-full' >
        <h1>All Matchs</h1>
        {
            data && (
                <div>
                    {
                        data.map((curr:any)=>{
                            return <div className='h-[200px] w-[200px] bg-zinc-900' >

                            </div>
                        })
                    }
                </div>
            )
        }

    </div>
  )
}

export default GetMatch