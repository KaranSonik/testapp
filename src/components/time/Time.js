import React from 'react'
import './time.scss'
import { Form } from 'react-bootstrap';


function Time() {


    return (
        <div className='time'>
            <div className='timeWrapper'>
                <h5>Time spent on learning</h5>
                <Form.Group controlId="dob">
                            <Form.Label>Last Week</Form.Label>
                            <Form.Control type="date" name="dob" />
                </Form.Group>
            </div>
            
        </div>
    )
}

export default Time
