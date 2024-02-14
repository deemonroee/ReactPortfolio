import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaStackOverflow, FaLinkedinIn } from 'react-icons/fa';

// Footer to display on every page.
export default function Footer() {
  return (
    <footer>
      <Container
        className="position-absolute text-center"
        style={{ bottom: '2rem' }}
      >
        <Link
          className="h2"
          to="https://github.com/deemonroee"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          className="m-4 h2"
          to="https://www.linkedin.com/"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="h2"
          to=""
          target="_blank"
        >
          <FaStackOverflow />
        </Link>
      </Container>
    </footer>
  );
}