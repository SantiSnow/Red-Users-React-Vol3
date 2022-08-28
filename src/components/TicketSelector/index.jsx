
const TicketSelector = props => {
    return (
        <form>

            <label htmlFor="Película"></label>
            <select className='form-select' id='pelicula'>
                <option defaultValue disabled>Seleccionar película</option>
                {
                    props.movies.map((movie, index)=>{
                        return (<option 
                                    key={index} 
                                    value={movie.name}>{movie.name}
                                </option>)
                    })
                }
            </select>
            <br />

            <label htmlFor="date">Fecha</label>
            <input type="date" className="form-control" name="date" id='fecha' required />
            <br />

            {props.children}

        </form>
    )
}

export default TicketSelector;