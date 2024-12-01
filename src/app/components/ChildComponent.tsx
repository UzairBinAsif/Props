import React from 'react'

interface Props{
  name: string;
}

const ChildComponent = (props: Props) => {
  console.log(props)

  return (
    <h1 className='text-4xl animate-pulse font-bold'>I am {props.name}</h1>
  )
}

export default ChildComponent