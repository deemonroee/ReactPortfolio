import { Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import data from '../assets/data/projectsData';

export default function Portfolio() {
  return (
    <Row >
      <h2 className="my-3">Portfolio</h2>
      {}
      {data.map((project) => (
        <Col key={project.id} sm={12} md={6} lg={4} xl={3}>
          <Project
            title={project.title}
            image={project.image}
            github={project.github}
          />
        </Col>
      ))}
    </Row>
  );
}