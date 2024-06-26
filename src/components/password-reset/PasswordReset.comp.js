import React from 'react';
import PropTypes from 'prop-types'; // Corrected import
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{ color: 'white' }} className='text-info text-center'>Reset Password</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>

                        <Button type="submit">Reset Password</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    );
};

ResetPassword.propTypes = { // Corrected propTypes
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};
