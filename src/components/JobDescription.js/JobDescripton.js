import { useState, useEffect } from "react"
import * as apiService from "../../services/jobService";
import './JobDescription.css';

const JobDescription = ({ job }) => {
  return (
        <div className="jobDesc">
            <p>{job.title}</p>
            <p>{job.salary}</p>
            <p>{job.postedDate}</p>
            <p>{job.type}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            {/* {job.requirements.map((requirement) => (
                <p>- {requirement}</p>
            ))}
            {job.benefits.map((benefit) => (
                <p>- {benefit}</p>
            ))} */}
        </div>
    );
};

export default JobDescription;