import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
    return (
        <div className="card">
            <FontAwesomeIcon icon={props.icon} className="icon"/>
            <span>{props.title}</span>
            <p>{props.amount}</p>
        </div>
    )
}

export default Card;