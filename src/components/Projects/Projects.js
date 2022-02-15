import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import sec from "../../Assets/Projects/2.png";
import DevConnector from "../../Assets/Projects/3.png";
import dynmat from "../../Assets/Projects/1.png";
import a_star from "../../Assets/Projects/4.png";
import tsp from "../../Assets/Projects/5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dynmat}
              isBlog={false}
              title="Dynamic Matchmaking Machine"
              description="Implemented an Artificial Neural Network that mimics the Complementary System of the Brain. Combined the model that mimicks the Long term Memory model and Short Term Memory model to better predict the characters from MNIST dataset. The improvement over the previous model was an increase of 15% accuracy."
              link="https://github.com/Karan-Pardasani/Dynamic-Matchmaking-Machine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sec}
              isBlog={false}
              title="Optimisation of Loss Function for Predictive Soil Mapping"
              description="Designed and trained an Artificial Neural Network to predict the soil electrical conductivity. Trained the data on 38 features and 10000 data points, which resulted in the MSE of 0.055. The research paper is published in Springer book and was accepted in Advanced Machine Learning Tchnoloy and Application (AMLTA) - 2020."
              link="https://link.springer.com/chapter/10.1007/978-981-15-3383-9_9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevConnector}
              isBlog={false}
              title="Dev-Connector"
              description="Developed a website for Developers to create, edit and delete Posts. Used Python Django and Django REST Framework for development. Implemented Signup  and Login Functionality for users. The data for user profile and posts are stored in SQlite Database."
              link="https://github.com/Karan-Pardasani/Blog_Post_Web_App_Django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsp}
              isBlog={false}
              title="Approximation Algorithm to solve Travelling Salesman Problem"
              description="I have implemented 3 algorithms namely Black Hole Optimisation , Particle Swarm Optimisation and Ant Colony Optimisation algorithms. These nature inspired algorithms finds the sub optimal solution of the Travelling Salesmn Problem, an NP-hard problem. In this project, we have compared the three algorithms in terms of the closeness of the approximate solution to the actual solution, the time required reach the sub optimal solution and the stability of different solutions for 1000 iterations."
              link="https://github.com/Karan-Pardasani/Travelling_Salesman_Poblem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a_star}
              isBlog={false}
              title="Voyage Into the Unkown using A-Star algorithm"
              description="Implemented A-star algorithm for a robot to find a path in a maze with unknown obstacles. The A-star algorithm is an informed searched algorithm which uses metrics like Manhattan Distance to approximate the path length. As the robot gets bumped into the block, it updates it's knowledge and creates a new path to reach the target. In addition to the standard problem, I have also developed variations of A-star algorithm to solve the path finding problem for different scenarios of the robot."
              link="https://github.com/Karan-Pardasani/Voyage-Into-the-unknown"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
