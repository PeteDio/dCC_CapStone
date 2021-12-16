import { Card } from 'react-bootstrap';
import './logout.scss'

const Logout = () => {

    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
        console.log("Successfully logged out")
    }
    const handleNoClick = () => {
        window.location = '/home';
    }
    return (
        <div className="logout">
        <Card style={{ width: '18rem', margin: '2rem'}} >
            <center>
            <Card.Body >
                <Card.Text>
                Are you sure you want to logout?
                </Card.Text>
                <button className='yes' onClick={handleClick}>Yes</button>
                <button className='no' onClick={handleNoClick}>No</button>
            </Card.Body>
            </center>
        </Card>
        </div>
    );
}

export default Logout;