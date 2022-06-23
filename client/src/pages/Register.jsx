import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ReactComponent as IllustrationUser } from '../illustration_user.svg';
import { uid } from 'uid';

import axios from 'axios';

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Container fluid className="d-flex flex-column align-items-center">
                        <IllustrationUser />
                        <h1>Input New User</h1>
                    </Container>
                    <Form onSubmit={handleSubmit} className="mx-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Your Name Here"
                                // onChange={handleChange}
                                // value={formData.name} required 
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                // onChange={handleChange}
                                // value={formData.email} 
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="081234567890"
                                // onChange={handleChange}
                                // value={formData.phone} 
                                />
                        </Form.Group>
                        <div className="d-flex flex-column justify-content-center">
                            <Button variant="success" type="submit">Save</Button>
                        </div>
                    </Form>
                </Col>
                <Col>
                    <List
                        // data={dataUser}
                        // handleEdit={handleEdit}
                        // handleDelete={handleDelete}
                    />
                </Col>
            </Row>


        </Container>
    )


export default ListUser;