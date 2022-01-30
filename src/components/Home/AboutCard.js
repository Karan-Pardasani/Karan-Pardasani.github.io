import React from "react";
import Card from "react-bootstrap/Card";
import {GiSoccerBall, GiTv, GiForkKnifeSpoon } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Karan Pardasani </span>
            and I am a<span className="purple"> Software Developer and a Machine Learning Enthusiast </span>
            currently pursuing Masters in Computer Science at <span className="purple">Rutgers University</span>, New Jersey, USA.
            <br />
            <br />
            My main interests are data-driven problems and real-life applications concerning Machine Learning, Deep Learning and Data Science. Outside the academics,  I also love to:
          </p>
          <ul>
            <li className="about-activity">
              <GiSoccerBall /> Play Soccer
            </li>
            <li className="about-activity">
              <GiTv /> Watch Comic Series
            </li>
            <li className="about-activity">
              <GiForkKnifeSpoon />  Eating delicious food
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
