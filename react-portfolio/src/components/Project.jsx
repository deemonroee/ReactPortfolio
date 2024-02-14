import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import '../styles/Project.css';

// Componet to use in the Header component
export default function Project({ title, image, github, demo }) {
  return (
    <Card className="project my-2 rounded">
      <Link to={demo} target="_blank">
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body className="py-1 d-flex justify-content-between align-items-center">
        <Link to={demo} target="_blank">
          <strong>{title}</strong>
        </Link>
        <Link to={github} target="_blank">
          <FaGithub />
        </Link>
      </Card.Body>
    </Card>
  );
}