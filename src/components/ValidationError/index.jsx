import './styles.scss';

const ValidationError = (props) =>{

    return(
        <div className="error-in-validation">
            {props.message}
        </div>
    )

}

export default ValidationError;