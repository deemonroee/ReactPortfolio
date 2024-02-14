import { Row, Col, Image } from 'react-bootstrap';
import hero from '../assets/images/webdev2.png';

export default function AboutPage() {
  return (
    <>
      <Row className="mt-lg-4">
        <Col md={3} xs={5} className='m-auto'>
          <Image src={hero} alt="programmer" fluid />
        </Col>
        <Col lg={8} xs={12} className='m-auto'>
          <h2 className='mb-4'>About me</h2>
          <p className='h5' style={{ lineHeight:'1.5'}}>
            My name is Denise Vasquez, I spend most of my time now finding ways to help my dog. She is a senior with 
            conjestive heart failure and the light of my life. In the mix of that I am learning how to be a web developer in hopes of bringing a strong interest
            back to life and where i can actually enjoy doing my work again. 

          </p>
        </Col>
      </Row>
    </>
  );
}