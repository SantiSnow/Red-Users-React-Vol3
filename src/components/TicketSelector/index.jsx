
const TicketSelector = props => {
    return (
        <div>

            <label htmlFor="Película"></label>
            <select className='form-select' id='pelicula' onChange={(event) => props.onChange(event.target.value)}>
                <option defaultValue>Seleccionar película</option>
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