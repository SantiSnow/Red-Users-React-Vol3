import {
    Header,
    Footer,
    TicketSelector,
    ValidationError,
    MoviesCarousel,
    Button,
  } from './components';
  import { useState } from 'react';
  import './styles/App.scss';
  
  function Home() {

    const [movie, setMovie] = useState(null);
    const [date, setDate] = useState(null);
    const [validationError, setValidationError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [ticketsBught, setTicketsBught] = useState(false);
  
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
  
      sendTicketsBought(movie, date);
    }
  
    const sendTicketsBought = async (movie, date) => {
  
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          pelicula: movie,
          fecha: date,
        }),
      }

      await fetch(process.env.REACT_APP_API_URL + "tickets", options)
        .then(response => response.json())
        .then(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
            return;
          }
        );
  
      setTicketsBught(true);
    }

    return (
      <>
        <Header />
  
        <div className='container mt-5'>
          <div className='row'>
            <h1>Bienvenido</h1>
          </div>
  
          <div className='row'>
  
            {
              (!ticketsBught)
              ?
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
              :
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center'>
                  <h6 className='alert alert-success'>Gracias por su compra. Puede retirar sus entradas por la ventanilla del cine.</h6>
                </div>
            }
  
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center'>
              <MoviesCarousel />
            </div>
          </div>

          <div className='row'>
            <Button />
          </div>
        </div>
  
        <Footer />
      </>
    );
  }
  
  export default Home;
  