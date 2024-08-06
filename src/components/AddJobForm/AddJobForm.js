import { useState } from "react"
import './AddJobForm.css'
import * as apiService from "../../services/jobService";

const AddJobForm = () => {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [salary, setSalary] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !company || !location || !type || !description || !salary) {
            alert('Missing field')
            return
        }

        // onAdd({title,company,location,type,description,salary})
        addJob(title,company,location,type,description,salary)

        setTitle('')
        setCompany('')
        setLocation('')
        setType('')
        setDescription('')
        setSalary('')
    }

    const addJob = async (title,company,location,type,description,salary) => {
        try{
            const length = await apiService.getJobsLength();
            
            const today = new Date();

            // Extract the year, month, and day
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(today.getDate()).padStart(2, '0');

            // Format the date as "YYYY-MM-DD"
            const formattedDate = `${year}-${month}-${day}`;

            const job = {
                "id": length + 1,
                "title": title,
                "company": company,
                "location": location,
                "type": type,
                "description": description,
                "salary": salary,
                "postedDate": formattedDate,
                "requirements": []
            }
            const data = await apiService.createJob(job);
        } catch (error){
            console.log(error)
        }

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="add Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Company</label>
                <input type="text" placeholder="add Company" value={company} onChange={(e) => setCompany(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Location</label>
                <input type="text" placeholder="add Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Type</label>
                <input type="text" placeholder="add Type" value={type} onChange={(e) => setType(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>description</label>
                <input type="text" placeholder="add Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Salary</label>
                <input type="text" placeholder="add Salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
            </div>

            <input type="submit" value="Save Job"/>
        </form>
    )
}

export default AddJobForm