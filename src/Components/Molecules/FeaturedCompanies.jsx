import React from "react";
import { Col } from "react-bootstrap";
import { companies } from "../../data";
import Company from "../Atoms/Company";
const FeaturedCompanies = () => {
  return (
    <Col className="featured-companies py-4">
      {companies.map((company) => (
        <Company name={company} />
      ))}
    </Col>
  );
};
export default FeaturedCompanies;
