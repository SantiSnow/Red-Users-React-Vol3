import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Store';

const MoviesCarousel = props => {

    const {
        state: { storeExampleSomething, storesMovies },
    } = useContext(Context);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        console.log(storesMovies);

        setLoading(true);
    }, []);


    return (
        <>
            {
                (loading)
                ?
                <OwlCarousel className='owl-theme' loop margin={10} nav>
                    {
                        storesMovies.peliculas.map((pelicula, index) => {
                            return (
                                <div className='item' key={index}>
                                    <img src={pelicula.picture} width="600" alt={"Poster de " + pelicula.name} /> 
                                    <h5 className='text-center'>{ pelicula.name }</h5>
                                </div>
                            )
                        })
                        
                    }
                </OwlCarousel>
                :
                <>Cargando...</>
            }
        </>
    )
}

export default MoviesCarousel;