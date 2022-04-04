import React from 'react'

function Input(props) {
  return (
    <div className='mb-4'>  

      <label htmlFor=""
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
      >
        {props.label}
      </label>
      <input type={props.type}
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name'
      />
    </div>
  )
}

export default Input