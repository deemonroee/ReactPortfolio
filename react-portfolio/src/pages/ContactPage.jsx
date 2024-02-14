import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import ContactForm from '../../../src/components/ContactForm';
import { FaPhoneAlt, FaSms } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactPage() {
  return (
    <>
      <Row className="text-secondary">
        <h2 className="my-3">Contact</h2>
        <Col lg={7}>
          <ContactForm />
        </Col>
        <Col className="h6">
          <Card className="p-3 ">
            <Row>
              <Link to="tel:+2138848155">
                <FaPhoneAlt />
                <span className="m-2">(213)-884-8155</span>
              </Link>
            </Row>
            <Row className="my-3">
              <Link to="sms:+2138848155">
                <FaSms />
                <span className="m-2">(213)-884-8155</span>
              </Link>
            </Row>
            <Row>
              <Link to="dean.monroee@gmail.com">
                <MdEmail />
                <span className="m-2"><dean className="monroee"></dean>@gmail.com</span>
              </Link>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}