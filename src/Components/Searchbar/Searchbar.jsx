import React, { useState } from 'react'

function Searchbar(props) {
  const [jobSearch,setJobSearch]=useState({
    title:'',
    location:'',
    experience:'',
    type:''
  })
  const {title,location,experience,type}=jobSearch
  const changeHandler =(e)=>{
    setJobSearch((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }
  console.log(jobSearch)
  
  const submitHandler = async() =>{
    await props.fetchJobsCustom(jobSearch)
    setJobSearch({
      title:'',
    location:'',
    experience:'',
    type:''
    })
  }
  return (
    <div className='flex flex-col gap-4 my-5 justify-center px-5 md:px-10 lg:px-20 lg:flex-row'>
      <select onChange={changeHandler} name='title' value={title} className='w-full md:w-64 py-3 pl-4 bg-zinc-100 font-regular rounded-md'>
        <option value="" disabled hidden selected>Job Role</option>
        <option value="Fullstack Developer">Fullstack Developer</option>
        <option value="Java Developer">Java Developer</option>
        <option value="Graphic Designer">Graphic Designer</option>
        <option value="System Architects">System Architects</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
      <select onChange={changeHandler} name='type' value={type}className='w-full md:w-64 py-3 pl-4 bg-zinc-100 font-regular rounded-md'>
        <option value="" disabled hidden selected>Job Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Intern">Intern</option>
        <option value="contract">contract</option>
      </select>
      <select onChange={changeHandler} name='location' value={location} className='w-full md:w-64 py-3 pl-4 bg-zinc-100 font-regular rounded-md'>
        <option value="" disabled hidden selected>Location</option>
        <option value="on-site">on-site</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select onChange={changeHandler}  name='experience' value={experience} className='w-full md:w-64 py-3 p-4 bg-zinc-100 font-regular rounded-md'>
        <option value="" disabled hidden selected className='p-2'>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior-level">Junior-level</option>
        <option value="Mid-level">Mid-level</option>
        <option value="Senior-level">Senior-level</option>
      </select>
      <button onClick={submitHandler} className='w-full md:w-64 py-3 rounded-md bg-blue-500 text-white cursor-pointer'>Search</button>
    </div>
  )
}

export default Searchbar
