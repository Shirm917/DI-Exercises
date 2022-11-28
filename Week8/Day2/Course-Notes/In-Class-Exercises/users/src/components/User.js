import Button from 'react-bootstrap/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function User(props) {
    const {id, name, username, email} = props;

    // let style = {
    //     display: "inline-block", 
    //     margin: "20px", 
    //     border:"1px solid black",
    //     padding: "20px",
    //     textAlign: "center"
    // }

    return (
        <div className="dib m20 b1sb tac">
            <img src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>{email}</p>
            <Button variant="primary">Primary</Button>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>
        </div>
    )
}

export default User;