import {
  Header,
  Footer,
  TicketSelector
} from './components';
import './styles/App.scss';

const peliculas = [
  { name: 'Los Cazafantasmas' },
  { name: 'La Bella y la Bestia' },
  { name: 'Jurasick Park II' },
  { name: 'Star Wars: Episodio III' },
  { name: 'El Señor de los Anillos' },
]

function App() {
  return (
    <>
      <Header />
      
      <div className='container mt-5'>
        <div className='row'>
          <h1>Welcome</h1>
        </div>

        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <TicketSelector movies={peliculas}>
              <button className='btn btn-success'>Comprar entradas</button>
            </TicketSelector>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
