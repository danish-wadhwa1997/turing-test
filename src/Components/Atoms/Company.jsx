import BriefCase from "../../resources/images/icon-briefcase.png";
import "./Company.css";
const Company = ({ name }) => {
  return (
    <div className="company-container">
      <div className="circle-border">
        <img src={BriefCase} alt={name} />
      </div>
      <h5>
        <strong>{name}</strong>
      </h5>
    </div>
  );
};

export default Company;
