import { useContext } from 'react';
import { Context } from '../Store';
import './styles.css'

const Button = () => {

    const {
        state: { storeExampleSomething },
        dispatch: setStoreExampleSomething,
    } = useContext(Context);

    const myEvent = async () => {
        await setStoreExampleSomething({ storeExampleSomething: true });
        console.log("has clickeado");
        console.log(storeExampleSomething)
    }

    return (
        <>
            <button 
                className="btn btn-primary"
                onClick={ () => myEvent() }>
                    Click
            </button>
        </>
    )
}

export default Button;