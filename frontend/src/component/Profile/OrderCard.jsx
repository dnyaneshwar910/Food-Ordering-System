import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
  <Card className='flex justify-between items-center p-5'>
    <div className="flex items-center space-x-5">
        <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_640.jpg" alt="" />
        <div className="">
            <p>Pizza</p>
            <p> $199</p>
        </div>
    </div>
        <Button  className='cursor-not-allowed'>Completed</Button>
  </Card>
  )
}

export default OrderCard
