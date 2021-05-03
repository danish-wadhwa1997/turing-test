import React from "react";
import { Row } from "react-bootstrap";
import JobPost from "../Atoms/JobPost";
import { jobs } from "../../data";
const JobPostContainer = () => {
  const [jobList, setJobList] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setJobList(jobs);
    }, 2000);
  }, []);
  return (
    <Row className="my-4">
      {jobList.map((job) => (
        <JobPost {...job} />
      ))}
    </Row>
  );
};

export default JobPostContainer;
