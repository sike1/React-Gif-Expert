
import { GifItem } from "./GifItem"
import { useFechGifs } from "../hooks/useFechGifs"


export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFechGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <div>Cargando...</div>
            }
            <div className="card-grid">

                {
                    gifs.map((gif) =>
                    (
                        <GifItem key={gif.id} {...gif} />
                    )
                    )
                }
            </div>
        </>
    )
}
