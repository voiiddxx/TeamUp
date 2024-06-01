import React from 'react'

    interface IMatchInputProps {
        Value: any
        setValue:any
        placeholderVal:string
    }

const MatchInput = ({Value , setValue , placeholderVal}:IMatchInputProps) => {

    const onChangeMethod = (e:any)=>{
        setValue(e.taget.value);
    }

  return (
    <div>
        <input className='bg-transparent h-12 w-full border-zinc-700 border ' onChange={(e)=>{
            onChangeMethod(e);
        }} type="text" placeholder={`${placeholderVal}`} />
    </div>
  )
}

export default MatchInput