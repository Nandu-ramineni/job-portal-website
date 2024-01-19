import React, { useEffect, useState } from 'react'
import { db} from '../../firebase';
import { addDoc, collection,getDocs} from "firebase/firestore"; 
import { serverTimestamp } from "firebase/firestore";
import { IoMdClose } from "react-icons/io";
import Login from '../User/AdminLogin';
const CreateJob = ({ onCloseForm  }) => {
    const [jobdetails,setjobDetails]=useState({
        title:'',
        company:'',
        type:'',
        experience:'',
        location:'',
        skills:[],
        salary:'',
        job_link:'',
        logo:'',
        postedOn: new Date()
    })
    const {title,company,type,experience,location,skills,salary,job_link,logo}=jobdetails;
    const [customSkill, setCustomSkill] = useState('');
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    
    const postJobs = async () => {
        try {
            const jobsCollection = collection(db, 'jobs');
            const newJobRef = await addDoc(jobsCollection, {
                ...jobdetails,
                postedOn: serverTimestamp(),
            });
            console.log('Job added with ID: ', newJobRef.id);
            const updatedJobs = await getDocs(jobsCollection);
            const updatedJobList = [];
            updatedJobs.forEach((job) => {
                updatedJobList.push({
                    ...job.data(),
                    id: job.id,
                });
            });
            setjobDetails(updatedJobList);
        } catch (error) {
            console.error('Error adding job: ', error);
        }
    };
    const changeHandler = (e) => {
        const { name, value, type } = e.target;
        setjobDetails((prevState) => {
            if (type === 'checkbox') {
                const updatedSkills = e.target.checked
                    ? [...prevState.skills, value]
                    : prevState.skills.filter((skill) => skill !== value);
                return { ...prevState, [name]: updatedSkills };
            } else {
                return { ...prevState, [name]: value };
            }
        });
    };
    const addCustomSkill = () => {
        if (customSkill.trim() !== '') {
            setjobDetails((prevState) => ({
                ...prevState,
                skills: [...prevState.skills, customSkill],
            }));
            setCustomSkill('');
        }
    };
    
    const handleAdminLogin = () => {
        // Perform login logic
        // If login is successful, set isAdminLoggedIn to true
        setIsAdminLoggedIn(true);
      };
    const submitHandler = async(e) => {
        e.preventDefault();
        
        await postJobs(); // Post the job

        // Close the form
        onCloseForm();
    };

    useEffect(() => {
        
    }, []);
    
    return (
        <div className="fixed top-1/2 right-8 transform  -translate-y-1/2 bg-white p-8 rounded-lg shadow-md z-50  ">
            {isAdminLoggedIn ? (
            <form className="max-w-lg mx-auto bg-gray-50 py-4 px-4 mb-4 rounded-lg sm:w-full"
            onSubmit={submitHandler}>
                <div className="text-2xl pt-1 font-semibold text-green-500 mb-4 flex justify-between text-center">
                    <h2>Post a job</h2>
                    <button
                            type="button"
                            onClick={onCloseForm}
                            className="text-2xl text-[#FF9843] hover:text-[#FF004D]"
                        >
                            <IoMdClose />
                        </button>
                </div>
                <div className="mb-4 flex gap-4">
                <div  className="w-1/2">
                    <label >Title:</label>
                    <input className="w-full p-2 border rounded" type="text" name="title" value={title} onChange={changeHandler} placeholder='Enter Job Title' required/>
                </div>
                <div  className="w-1/2">
                    <label>Company:</label>
                    <input type="text" name="company" value={company} onChange={changeHandler} className="w-full p-2 border rounded" placeholder='Enter Company' required/>
                </div>
                </div>
                <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                    <label>Job type:</label>
                    <select name="type" value={type} onChange={changeHandler} className="w-full p-2 border rounded" required>
                        <option value="" disabled hidden selected>Job Type</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Intern">Intern</option>
                        <option value="contract">contract</option>
                    </select>
                </div >
                <div className="w-1/2">
                    <label>Experience:</label>
                    <select name="experience" value={experience} onChange={changeHandler} className="w-full p-2 border rounded" required>
                        <option value="" disabled hidden selected>Experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Junior-level">Junior-level</option>
                        <option value="Mid-level">Mid-level</option>
                        <option value="Senior-level">Senior-level</option>
                    </select>
                </div>
                </div>
                <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                    <label>Location:</label>
                    <select name="location" value={location} onChange={changeHandler} className="w-full p-2 border rounded" required>
                        <option value="" disabled hidden selected>Location</option>
                        <option value="on-site">on-site</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div className="w-1/2">
                    <label>Salary:</label>
                    <input type="text" name='salary' value={salary} onChange={changeHandler} className="w-full p-2 border rounded" placeholder='Enter Salary' required/>
                </div>
                </div>
                <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Skills:</label>
                    <div className="flex flex-wrap">
                        {["Javascript", "Python", "React", "Node", "Java", "Aws"].map((skill) => (
                            <label key={skill} className="mr-4">
                                <input
                                    type="checkbox"
                                    name="skills"
                                    value={skill}
                                    checked={skills.includes(skill)}
                                    onChange={changeHandler}
                                    className="mr-2"
                                />
                                {skill}
                            </label>
                        ))}
                    </div>
                    
                </div>
                <div className="w-1/2">
                    <label >Job_Link:</label>
                    <input type="text" name="job_link" value={job_link} onChange={changeHandler} className="w-full p-2 border rounded" placeholder='Enter Job Link' required/>
                </div>
                </div>
                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <input
                            type="text"
                            placeholder="Add custom skill"
                            value={customSkill}
                            onChange={(e) => setCustomSkill(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        <button
                            type="button"
                            onClick={addCustomSkill}
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-regular py-1 px-2 mb-4 mt-3 rounded ml-2"
                        >
                            Add Skill
                        </button>
                    </div>
                    
                    <div className="w-1/2 mt-[-2rem]">
                    <label >Job_Logo:</label>
                        <input type='text' value={logo} onChange={changeHandler} name="logo" className="w-full p-2 border rounded" placeholder='Paster your logo link'/>
                    <button
                            type="submit"
                            className="bg-green-500 mt-2 hover:bg-blue-700 text-white font-medium py-2 px-8  rounded flex justify-center text-center"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </form>
            ) : (
                <div className="text-center">
                    <Login handleAdminLogin={handleAdminLogin} onCloseForm={onCloseForm } />
                </div>
            )}
        </div>
    )
}

export default CreateJob
