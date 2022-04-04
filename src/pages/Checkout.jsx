import React from 'react'
import Input from '../components/common/Input'
import Radio from '../components/common/Radio'

function Checkout() {
  return (
    <div className='container mx-auto pt-10'>


      <div className='mb-20'>
        <h3 className='font-medium leading-tight text-3xl mt-4 mb-4 text-blue-600'>Shipping Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Input type="text" label="First name" />

          <Input type="text" label="Last name" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input type="text" label="Address" />

          <Input type="text" label="City" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input type="text" label="Country" />

          <Input type="text" label="State/Province" />
        </div>


        <div className="grid md:grid-cols-2 gap-4">
          <Input type="number" label="Pin code" />

          <Input type="number" label="Phone" />

        </div>


        <button type="button" className="block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>


      </div>





      <div>
        <h3 className='font-medium leading-tight text-3xl mt-8 mb-5 text-blue-600'>Payment</h3>

        <div className='form-check form-check-inline'>
          <Radio label="Credit card" />

          <Radio label="PhonePe" />

          <Radio label="Cash on delivery" />


          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Place order</button>

        </div>

      </div>
    </div >


  )
}

export default Checkout