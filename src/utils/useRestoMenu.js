import {useState, useEffect} from 'react'
const useRestoMenu = (restoId) =>{
    const [restaurant, setRestaurant] = useState(null)
    useEffect(()=>{
        fetchRestoMenu()
    }, [])

    const fetchRestoMenu = async () =>{
       // console.log('restoId',restoId)
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${restoId}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data?.json()
        setRestaurant(json?.data?.cards)
    }

    return restaurant
}

export default useRestoMenu