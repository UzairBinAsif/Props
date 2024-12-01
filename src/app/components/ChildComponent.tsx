import React from 'react'

const ChildComponent = (props: any) => {
  console.log(props)

  return (
    <h1 className='text-4xl animate-pulse font-bold'>I am {props.x}</h1>
  )
}

export default ChildComponent