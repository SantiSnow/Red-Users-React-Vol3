import {
  Header,
  Footer,
  TicketSelector,
  ValidationError
} from './components';
import { useState } from 'react';
import './styles/App.scss';

const peliculas = [
  { name: 'Los Cazafantasmas' },
  { name: 'La Bella y la Bestia' },
  { name: 'Jurasick Park II' },
  { name: 'Star Wars: Episodio III' },
  { name: 'El Señor de los Anillos' },
]

function App() {

  const [ movie, setMovie ] = useState(null);
  const [ date, setDate ] = useState(null);
  const [ validationError, setValidationError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");

  const buyTickets = (e) => {
    console.log(e);
    setMovie(e);
  }

  const selectDate = (e) => {
    setDate(e);
  }

  const showSelectedMovie = () => {
    if(movie === "Seleccionar película" || !movie)
    {
      setErrorMessage("Por favor, seleccione una película");
      setValidationError(true);
      return;
    }

    if(!date)
    {
      setErrorMessage("Por favor, seleccione una fecha");
      setValidationError(true);
      return;
    }

    console.log("ha comprado tickets para: "+ movie+", el dia: "+date);
  }

  return (
    <>
      <Header />
      
      <div className='container mt-5'>
        <div className='row'>
          <h1>Bienvenido</h1>
        </div>

        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <TicketSelector movies={peliculas} onChange={(val) => buyTickets(val)} onDateSelect={(val) => selectDate(val)}>
              <button 
                onClick={() => showSelectedMovie() }
                className='btn btn-success'>Comprar entradas</button>
            </TicketSelector>
            {
              (validationError) && <ValidationError message={errorMessage} />
            }
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
