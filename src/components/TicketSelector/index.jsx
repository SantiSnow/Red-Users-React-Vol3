import { useState, useEffect } from 'react';

const TicketSelector = props => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState(null);

    const getMovies = async () => {

        await fetch(process.env.REACT_APP_API_URL+"movies", {
            method: 'GET',
        })
            .then(response => response.json())
            .then(
                result => {
                    setMovies(result);
                    setLoading(false);
                },
                error => {
                    console.log(error);
                    return;
                }
            );
    };

    useEffect(() => {
        getMovies();
    }, [loading]);

    return (
        <div>

            <label htmlFor="Película"></label>
            <select className='form-select' id='pelicula' onChange={(event) => props.onChange(event.target.value)}>
                <option defaultValue>Seleccionar película</option>
                {
                    (loading)
                        ?
                        <>Cargando...</>
                        :
                        <>
                            {
                                movies.map((movie, index) => {
                                    return (<option
                                        key={index}
                                        value={movie.name}>{movie.name}
                                    </option>)
                                })
                            }
                        </>
                }
            </select>
            <br />

            <label htmlFor="date">Fecha</label>
            <input type="date"
                className="form-control"
                name="date" id='fecha'
                onChange={(event) => props.onDateSelect(event.target.value)}
                required />
            <br />

            {props.children}

        </div>
    )
}

export default TicketSelector;