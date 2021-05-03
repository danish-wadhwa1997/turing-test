import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import "./JobPost.css";

const JobPost = ({ position, timeAgo, company, address, description }) => {
  return (
    <Col sm={6} lg={4} className="px-3 job-post">
      <Row>
        <Col>
          <h5 className="mb-0 position-name">{position}</h5>
        </Col>
        <Col sm={{ span: 4 }} style={{ textAlign: "end" }}>
          <p className="text mb-0">{timeAgo}</p>
        </Col>
      </Row>
      <Row>
        <Col sm={2} xs={1} lg={2}>
          <p>
            <strong>{company}</strong>
          </p>
        </Col>
        <Col
          sm={{ span: 7, offset: 2 }}
          lg={{ span: 8, offset: 1 }}
          xs={{ span: 7, offset: 2 }}
        >
          <p className="text">{address}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <p className="text">{description}</p>
        </Col>
      </Row>
      <Button className="job-button">
        <FaAngleRight />
      </Button>
    </Col>
  );
};

export default JobPost;
