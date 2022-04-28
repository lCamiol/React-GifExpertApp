import { useEffect, useState } from "react"
import { getGif } from "../Helpers/GetGifs";

export const useFetchGifs = (category) =>{


    const [state, setState] = useState({
        data:[],
        loading: true
    }) ;

    useEffect(() => {
        getGif(category).then( (img) => 
        setTimeout(() => {
            setState({
                data:img,
                loading: false
            })
            
        }, 3000)
      
    )}, [category])
    

    return state;
}