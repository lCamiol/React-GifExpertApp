import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([])

    // useEffect(() => {
    //     getGif(category)
    //     .then(setimages);

    // }, [category])
   const {data: images,loading} = useFetchGifs(category)

    

    return (
        <>
        <h3>{category} </h3>

        {loading && 'Cargando...'}
         <div className = "card-grid">
                {images.map( img  => (
                <GifGridItem 
                key = {img.id}
                {...img}/>
                ))
            }
        </div>   
        </>      
       )
        }

export default GifGrid