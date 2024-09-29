// Importing named export uses {}
import { CDN_URL } from "../utils/constants";
//  Resto cards
//      resto image
//      name, cusine, rating, 

const RestoCardComponent = (props) => {
    const {name, cuisines, avgRating, sla,cloudinaryImageId} = props?.data?.info
    return (
        <div data-testid = "restoCard" className = "m-4 p-2 w-52 h-96 overflow-hidden bg-slate-50 rounded-md hover:bg-slate-200">
            <img className ="resto-img  w-48 h-3/6 rounded-md " src= {CDN_URL+cloudinaryImageId} />
            <h3 className = "font-bold text-md">{name}</h3>
            <p className = "font-normal text-sm">{cuisines.join(",")}</p>
            <p className = "font-normal text-sm">{avgRating}</p>
            <p className = "font-normal text-sm">{sla.slaString}</p>
        </div>
    );
}

export const withPromotedRestoCardComponent = (RestoCardComponent) => {
    return(props) =>{
        return(
            <div>
                <label className="absolute bg-slate-800 m-2 p-2 rounded-md text-white">Promoted</label>
                <RestoCardComponent {...props}/>
            </div>
        )
    }
}

// Default export
export default RestoCardComponent;