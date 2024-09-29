import React from 'react'
import FoodItemComponent from './FoodItem'

const ItemCategoryComponent = (props) => {
const categroy = props?.data?.card
const {showItems, setShowIndex} = props
const handleClick = () =>{
    setShowIndex()
}
  return (
    <div className = "w-6/12 bg-slate-50 border bottom-1 mx-auto my-4 p-2">
    <div className="flex justify-between" onClick={handleClick}>
        {categroy?.card?.title+"("+categroy?.card?.itemCards?.length+")"}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
    </div>
    {categroy?.card?.itemCards.map((item)=>(showItems && <FoodItemComponent data={item}/>))}  
    </div>
  )
}

export default ItemCategoryComponent