import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';
export const AddressCard = ({item, showButton, handleSelectAddress}) => {
    
    return (
        <Card className='flex w-64 p-5 gap-5 m-3'>
            <HomeIcon />
            <div className="space-y-3 text-gray-500 ">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>Mumbai, new shivam building, gokuldham market, Maharstra, india</p>
                {showButton && (<Button variant='outlined' fullWidth onClick={() => handleSelectAddress(item)}>Select

                </Button>)}
            </div>
        </Card>

    )
}

export default AddressCard
