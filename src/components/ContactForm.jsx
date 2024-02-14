import { useState } from 'react';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';

export default function ContantForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Don't let to submit if fields are empty.
    if ((!name, !email, !message)) return;

    // Clean the fields after submit.
    setName('');
    setEmail('');
    setMessage('');
  };

  const inputBlurHandler = (e) => {
    const inputType = e?.target?.type;

    // Check which input was blurred, display error message if any.
    if (inputType === 'text') {
      name ? setErrorMessage('') : setErrorMessage('Name is required');
    } else if (inputType === 'email') {
      const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (email) {
        !emailRegex.test(email)
          ? setErrorMessage('Invalid email address!')
          : setErrorMessage('');
      } else {
        setErrorMessage('Email is required!');
      }
    } else {
      !message ? setErrorMessage('Message is required!') : setErrorMessage('');
    }
  };

  return (
      <Row className="justify-content-md-center">
        <Col >
          <Card className='mb-2'>
            <Form className='p-4 pb-5' onSubmit={submitHandler}>
              <Form.Group className="my-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={inputBlurHandler}
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={inputBlurHandler}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  row="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={inputBlurHandler}
                  required
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Submit
              </Button>
              <p className="mt-2 text-danger position-absolute">{errorMessage}</p>
            </Form>
          </Card>
        </Col>
      </Row>
  );
}