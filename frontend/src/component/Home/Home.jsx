import React, { useEffect } from 'react'
import MultiItemCarousel from './MultiItemCarousel'
import './Home.css'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantAction } from '../State/Restaurant/Action'
// import { useNavigate } from 'react-router-dom'

// const restaurants = [1,2,5,8,7,8,9,10]

    

const Home = () => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const { restaurant} = useSelector(store => store)
  console.log("restaurant ", restaurant)

  useEffect(()=>{
    dispatch(getAllRestaurantAction(jwt))
    
  },[])


 
  return (
    <div className='pb-10'>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        <div className="w-[50vw] z-10 text-center">
            <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Belly Food</p>
            <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the Convenience: Food, Fast And Delivered</p>
        </div>

        <div className="cover absolute top-0 left-0 right-0">

        </div>

        <div className="fadout">

        </div>
      </section>

      <section className='p-5 lg:py-5 lg:px-20'>
        <p className='text-2xl font-semibold text-gray-400 py-3 pb-2'>Top Meels</p>
        <MultiItemCarousel/>
      </section>

      <section className="px-5 lg:px-20 pt-10">
  <h1 className="text-2xl font-semibold text-gray-400 pb-8">Order from Our Handpicked Favorites</h1>

  <div className="flex flex-wrap justify-around items-center gap-5">
   {restaurant.restaurants.map((item) => <RestaurantCard key={item.id} item={item} />)}
  </div>
</section>

    </div>
  )
}

export default Home
