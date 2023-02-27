import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaRegFileAlt, FaHeartbeat } from 'react-icons/fa';
import './Research.css';

class Research extends Component {
  render() {
    return (
      <div className="Research">
        <Row>
          <Col lg={6}>
            <Card className="card-left">
              <Card.Body>
                <Card.Title className="CardTitle">My Research Journey</Card.Title>
                <Card.Text>
                  I have always been curious about the world, and this curiosity has led me to pursue
                  research as a career. My areas of interest lie in machine learning and artificial
                  intelligence, and I have been working on applying these technologies to solve
                  real-world problems.
                </Card.Text>
                <Card.Title className="CardTitle">Current Projects</Card.Title>
                <Card.Text>
                  My area of interest lies in speech recognition, synthesis, text analysis, and video analysis. 
                  Specifically, I am interested in developing systems that can accurately recognize and synthesize 
                  human speech, as well as analyze text and video data for insights and trends that can be applied 
                  to various industries and fields.
                </Card.Text>
                <Card.Title className="CardTitle">Past Projects</Card.Title>
                <Card.Text>
                  In the past, I have worked on text summarization techniques using Natural Language Processing (NLP) 
                  and text classification techniques. This involved developing algorithms to automatically summarize 
                  lengthy texts and categorize them based on their content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="card-right">
              <Card.Body>
                <Card.Title className="CardTitle"><FaRegFileAlt className="icon" /> Publications and Patents</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                    Yalamaddi, Abhinav and Arvapalli, Satwik, Stock Trend Prediction Based on Social Media Articles, SSRN, Dec. 2022.
                    </li>
                    <li>
                    Yalamaddi, Abhinav, et al, Detecting the early stage and breakdown of damaged power cords and transformers using mobile sensor network, IN Patent, 202211004369, filed January 26, 2022.
                    </li>
                    <li>
                    Yalamaddi, Abhinav, “Abstractive Text Summarization”, IJRESM, vol. 5, no. 2, pp. 20–22, Feb. 2022
                    </li>
                  </ul>
                </Card.Text>
                <Card.Title className="CardTitle"><FaHeartbeat className="icon" /> Professional Affiliations</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Computer Society of India Member, 2018-present</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Research;
