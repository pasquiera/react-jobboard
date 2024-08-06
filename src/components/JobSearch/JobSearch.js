
import './JobSearch.css';
import { useState } from "react"

const JobSearch = () => {
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        console.log(description,city)
        setDescription('')
        setCity('')

    }

  return (
    <div className="job-search-div">
        <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <input id="input-description" type="text" placeholder="Job Title" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <span className="separator">|</span>
                <div className="form-control">
                    <input id="input-city" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>

                <input type="submit" value="Search"/>
            </form>
    </div>
  );
};

export default JobSearch;