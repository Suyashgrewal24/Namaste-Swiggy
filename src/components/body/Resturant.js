import React, { useEffect, useState } from 'react'
import FoodCards from './FoodCards'
import SearchBar from './SearchBar'


const Resturant = () => {
  const [AllResData, setAllResData] = useState([])
  const [FilteredData, setFilteredData] = useState([])
  const [SearchInput, setSearchInput] = useState("")

  const SearchData = (SearchInput, AllResData) => {
    const FilteredList = AllResData.filter((res) => res.data.name.toLowerCase().includes(SearchInput.toLowerCase()))

    return FilteredList
  }

  useEffect(() => {
    GetFood()
  }, [])
  
  const GetFood = async () => {

    const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING')

    const data = await res.json()
  
    setFilteredData(data?.data?.cards[2]?.data?.data?.cards)
    setAllResData(data?.data?.cards[2]?.data?.data?.cards)
    console.log(data?.data.cards[2]?.data?.data?.cards)

  }


  return (FilteredData.length === 0  ) ? (

    <>
      <h2>Loading....</h2>
    </>
  )
    : (
      <>

        {/* SearchBar Section */}
        <SearchBar
          setSearchInput={setSearchInput}
          SearchData={SearchData}
          SearchInput={SearchInput}
          AllResData={AllResData}
          setAllResData={setAllResData}
          setFilteredData={setFilteredData}
        />
        <div className="food-cards-list">

          {

            FilteredData.map((restaurants) => {
              return <FoodCards key={restaurants.data.id} restaurants={restaurants} />

            })


          }
        </div>
      </>
    )
}

export default Resturant

