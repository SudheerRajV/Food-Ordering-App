import * as React from 'react';
//import restos from '../../asset/restaurant.json';
// Importing default export uses direct value
import RestoCardComponent, {withPromotedRestoCardComponent} from './RestoCard.js'
import ShimmerComponent from './Shimmer.js'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const PromotedRestoCardComponent = withPromotedRestoCardComponent(RestoCardComponent)
// Body
//  Search
//  resto cards


const BodyComponent = () => {
    const [restosList, setMainRestosList] = useState([])
    const [filteredRestosList, setFilteredRestosList] = useState([])
    const [searchText, setSearchText] = useState("")
    const RestoCardComponents = []
    //Always use unique keys in components(for performance optimaization)
    filteredRestosList?.map((resto) => RestoCardComponents.push(
    <Link key={resto.info.id} to= {`/restaurant/${resto.info.id}`}>
        { (resto.info.avgRating > 4.1) ? <PromotedRestoCardComponent key= {resto.info.id} data={resto}/> :
        <RestoCardComponent key= {resto.info.id} data={resto}/> }
        </Link>));
    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const restoJson = await data.json()
       // console.log(restoJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle)
       setMainRestosList(restoJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestosList(restoJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return restosList?.length === 0 ? (<ShimmerComponent />) : (
        <div className = "body">
            <div className = "flex m-4 items-center">
            <input data-testid = "searchInput" className = "border border-solid p-2 m-2" value= {searchText} onChange = { (e)=>{
                setSearchText(e.target.value)
            }} />
            <button data-testid = "search" className = "bg-orange-400 p-2 m-2 rounded-md" onClick = { () => {
            const topRatedRestosList = restosList.filter((resto) => resto.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestosList(topRatedRestosList);
           }  }>Search</button>
           <button data-testid = "topRated" className = "bg-orange-400 p-2 m-2 rounded-md"
           onClick = { () => {
            const topRatedRestosList = restosList.filter((resto) => resto.info.avgRating > 4.3);
            setFilteredRestosList(topRatedRestosList);
           }  }>Top rated</button>
           </div>
            <div className = "mx-auto p-6 grid grid-cols-5 gap-2"> 
                {RestoCardComponents}
            </div>
    </div>
    );
}

export default BodyComponent;