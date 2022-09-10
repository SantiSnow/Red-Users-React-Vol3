import {
  Header,
  Footer,
  TicketSelector,
  ValidationError,
  MoviesCarousel
} from './components';
import { useState, useEffect } from 'react';
import './styles/App.scss';

function App() {

  const peliculas = [
    {
      name: "Los Cazafantasmas",
      picture: "https://via.placeholder.com/600/771796"
    },
    {
      name: "La Bella y la Bestia",
      picture: "https://via.placeholder.com/600/771796"
    },
    {
      name: "Jurasick Park II",
      picture: "https://via.placeholder.com/600/771796"
    },
    {
      name: "Star Wars: Episodio III",
      picture: "https://via.placeholder.com/600/771796"
    },
    {
      name: "El Señor de los Anillos",
      picture: "https://via.placeholder.com/600/771796"
    }
  ];

  const [movie, setMovie] = useState(null);
  const [date, setDate] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const buyTickets = (e) => {
    console.log(e);
    setMovie(e);
  }

  const selectDate = (e) => {
    setDate(e);
  }

  const showSelectedMovie = () => {
    if (movie === "Seleccionar película" || !movie) {
      setErrorMessage("Por favor, seleccione una película");
      setValidationError(true);
      return;
    }

    if (!date) {
      setErrorMessage("Por favor, seleccione una fecha");
      setValidationError(true);
      return;
    }

    console.log("ha comprado tickets para: " + movie + ", el dia: " + date);
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
            <TicketSelector onChange={(val) => buyTickets(val)} onDateSelect={(val) => selectDate(val)}>
              <button
                onClick={() => showSelectedMovie()}
                className='btn btn-success'>Comprar entradas</button>
            </TicketSelector>
            {
              (validationError) && <ValidationError message={errorMessage} />
            }
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center'>
            <MoviesCarousel peliculas={peliculas} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
