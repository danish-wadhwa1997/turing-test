import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import JobPostContainer from "./Components/Molecules/JobPostContainer";
import FeaturedCompanies from "./Components/Molecules/FeaturedCompanies";

import "./App.css";
const App = () => {
  return (
    <div>
      <Row className="banner-image m-0">
        <Col xs={{ span: 10, offset: 1 }}>
          <Row>
            <Col>
              <h1>Juniors make IT work.</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Hire and invest in highly skilled juniors now.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={{ boxShadow: "0px 0px 8px #007bff" }}>
                Post Offer Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="m-0 py-4">
        <Col xs={{ span: 10, offset: 1 }} className="py-5">
          <Row className="mb-5">
            <Col>
              <Row className="align-items-end">
                <Col sm={6}>
                  <h3>
                    <strong>Newest Job Offers</strong>
                  </h3>
                </Col>
                <Col sm={6} style={{ textAlign: "end", paddingRight: 0 }}>
                  <Button className="inverted-button mr-0">
                    <strong>
                      View all job offers
                      <span className="pl-2">
                        <FaLongArrowAltRight />
                      </span>
                    </strong>
                  </Button>
                </Col>
              </Row>
              <JobPostContainer />
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h3>
                    <strong>Featured Companies</strong>
                  </h3>
                </Col>
              </Row>
              <Row>
                <FeaturedCompanies />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default App;
