import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MoviesCarousel = props => {

    return (
        <>
            <OwlCarousel className='owl-theme' loop margin={10} nav>
                {
                    props.peliculas.map((pelicula, index) => {
                        return (
                            <div className='item' key={index}>
                                <img src={pelicula.picture} width="600" alt={"Poster de " + pelicula.name} /> 
                                <h5 className='text-center'>{ pelicula.name }</h5>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </>
    )
}

export default MoviesCarousel;