import React from 'react';
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './add-ticket-form.style.css';
import {shortText} from '../../utils/validation';

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDataErro, frmDt }) => {

    console.log(frmDt);
    return (
        <div className='mt-3 add-new-ticket bg-light'>
            <h1 className='text-info text-center'>Add New Ticket</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="subject"
                            value={frmDt.subject}
                            minLength="3"
                            maxLength="100"
                            onChange={handleOnChange}
                            placeholder="Subject"
                            required
                        />
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Issue Found
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="date"
                            name="issueDate"
                            onChange={handleOnChange}
                            required
                        />
                        <Form.Text className='text-danger'>
                            {frmDataErro.subject && "Subject is required"}</Form.Text>
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Password
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="textarea"
                            name="detail"
                            rows="5"
                            value={frmDt.detail}
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" variant="info" block>Login</Button>

            </Form>
        </div>
    );
};

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDataErro: PropTypes.object.isRequired,
    frmDt: PropTypes.object.isRequired,
};
