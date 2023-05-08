import React from 'react'
// import Foodimg from '../assets/foodCard-img.jfif'
import './Body.css'
import { IMG_URL } from '../../Utils/Constant'


const FoodCards = ({ restaurants }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, deliveryTime } = restaurants.data
  console.log(restaurants)



  return (
    <>
      <div className="food-single-card">
        <img className='food-img' src={IMG_URL + cloudinaryImageId} alt="Delicious food" />
        <h3 className='food-name'>{name}</h3>
        <p className='cuisine'>{cuisines.join(", ")}</p>
        <span className='card-bottom'>
          <p className='rating' >{avgRating}</p>
          .

          <p className='avg-time'>{deliveryTime} MINS</p>
          .
          <p className='price'>{costForTwo / 100} FOR TWO</p>
        </span>
      </div>
    </>
  )
}

export default FoodCards