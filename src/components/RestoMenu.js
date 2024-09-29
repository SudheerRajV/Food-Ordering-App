
import useRestoMenu from '../utils/useRestoMenu'
import {useParams} from 'react-router-dom'
import ShimmerComponent from './Shimmer'
import ItemCategoryComponent from './ItemCategory'
import React, {useState} from 'react'

const RestoMenuComponent = () => {
const {restoId} = useParams()
const restaurant = useRestoMenu(restoId)
const [showIndex, setShowIndex] = useState(0)

if(restaurant === null) return <ShimmerComponent />

const {name, cuisines} = restaurant[2]?.card?.card?.info
let menuCategories = restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => (
    card?.card?.card?.itemCards != null 
))
return (
    <div className="m-2">
        <h1 className="m-2 text-center font-extrabold text-xl">{name}</h1>
        <h2 className="m-2 text-center font-extrabold text-md">{cuisines.join(",")}</h2>
        <ul>
        {menuCategories?.map((category, index) => (
        <ItemCategoryComponent 
        key={category?.card?.title} 
        data={category} 
        showItems={(showIndex === index) ? true: false}
        setShowIndex = {()=>{setShowIndex(index)}}/>
        ))}
        </ul>
    </div>
  )
}

export default RestoMenuComponent
