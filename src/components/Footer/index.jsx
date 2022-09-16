import { useContext } from 'react';
import { Context } from '../Store';
import './styles.scss';

const Footer = () =>{

    const {
        state: { storeExampleSomething },
        dispatch: setStoreExampleSomething,
    } = useContext(Context);

    return(
        <footer className="footer">
            <span>Cine de Buenos Aires </span>
            <small>Copyright 2022</small>

            {
                (storeExampleSomething)
                    && <>El valor es verdadero!</>
            }
        </footer>
    )

}

export default Footer;