import React from 'react';
import { Form } from 'react-bootstrap';
import useForm from './UseForm';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button'



const EditProfile = (props) => {

    const {formValues, handleChange, handleSubmit} = useForm(edit)

    let navigate = useNavigate()

    async function edit() {
        console.log("from edit", formValues)
        props.editCall(formValues)
        navigate("../Profile")
    }
    
    return ( 
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username" 
                        name="username" 
                        placeholder={props.edit.username} 
                        onChange={handleChange} 
                         />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        placeholder="New Password" 
                        onChange={handleChange} 
                         />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder={props.edit.email} 
                        onChange={handleChange} 
                         />
                </Form.Group>

                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="first_name" 
                        name="first_name" 
                        placeholder={props.edit.first_name} 
                        onChange={handleChange} 
                         />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="last_name" 
                        name="last_name" 
                        placeholder={props.edit.last_name} 
                        onChange={handleChange} 
                         />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Middle Name/Initial</Form.Label>
                    <Form.Control 
                        type="middle_name" 
                        name="middle_name" 
                        placeholder={props.edit.middle_name} 
                        onChange={handleChange} 
                         />
                </Form.Group>
                <Form.Group>
                <Button variant="primary" type="submit">
                                Submit
                            </Button>
                </Form.Group>
            </Form>
        </div>
     );
}
 
export default EditProfile;