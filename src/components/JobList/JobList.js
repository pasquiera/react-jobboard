import { useState, useEffect } from "react"
import './JobList.css';
import * as apiService from "../../services/jobService";
import JobDescription from "../JobDescription.js/JobDescripton";

const JobList = () => {

    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobId, setJobId] = useState('1');

    useEffect(() => {
        const fetchJobs = async () => {
          try {
            const data = await apiService.getJobs();
            setJobs(data);
            setSelectedJob(data[0])
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchJobs();
      }, []);

      const onToggle = (job) => {
        setSelectedJob(job)
      }

    return (
        <div className="jobContainer">
            <div className="jobList">
                {jobs.map((job) => (
                    <div className="individual">
                      <h3 key={job.id}  onClick={() => onToggle(job)}>{job.title}</h3>   
                    </div>
                ))}
            </div>
            <div className="jobDescription">
              {selectedJob !== null ? <JobDescription job={selectedJob}/> : ''}
                
            </div>
        </div>
    )
}

export default JobList