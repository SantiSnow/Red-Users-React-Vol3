import './styles.css';

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg" id="nav-navbar-bar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Home page</a>
                    <button className="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarText" 
                        aria-controls="navbarText" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active">Peliculas</a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cines</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Precios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )

}

export default Header;