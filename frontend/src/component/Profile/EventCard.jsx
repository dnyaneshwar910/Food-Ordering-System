import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia
        
        sx={{height:345}} image='https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_640.jpg'/>

        <CardContent>
            <Typography variant='h5'>
                Indain Fast Food
            </Typography>

            <Typography variant='h5'>
                 50% off on your first Order
            </Typography>

            <div className="py-2 space-y-2 ">
              <p>{"mumbai"}</p>
              <p className='"texr-sm text-blue-500'>February 14, 2025, 12:00 AM</p>
              <p className='texr-sm text-red-500'>February 15, 2025, 12:00 AM</p>
                
            </div>
        </CardContent>
       { false &&  <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>}
      </Card>
    </div>
  )
}

export default EventCard
