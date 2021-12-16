import { Card } from 'react-bootstrap';

const Logout = () => {

    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
        console.log("Successfully logged out")
    }
    const handleNoClick = () => {
        window.location = '/Forum';
    }
    return (
        <div className="logout">
        <Card style={{ width: '18rem', margin: '2rem'}} >
            <center>
            <Card.Body >
                <Card.Text>
                Are you sure you want to logout?
                </Card.Text>
                <button onClick={handleClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
            </Card.Body>
            </center>
        </Card>
        </div>
    );
}

export default Logout;