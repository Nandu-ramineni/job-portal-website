import React, { useEffect, useState } from 'react'
import Header from '../Header/header'
import Searchbar from '../Searchbar/Searchbar'
import JobCards from '../Jobcards/JobCards'
//import  jobData  from './dummyData'
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from '../../firebase'
import JobTittlebar from '../JobTittlebar/JobTittlebar'
import JobNews from '../JobNews/JobNews';
import ShortNews from '../JobNews/ShortNews';
function Home() {
  const [jobs, setJobs] = useState([])
  const [customSearch, setCustomSearch] = useState(false)
  const [loading, setLoading] = useState(true); // State variable to track loading state
  const [noJobsFoundMessage, setNoJobsFoundMessage] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const fetchJobs = async () => {
    setLoading(true);
    setCustomSearch(false)
    setNoJobsFoundMessage(false)
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"))
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      //console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
    setLoading(false); // Set loading state to false after fetching data
  }
  const fetchJobsCustom = async (jobSearch) => {
    try {
      setCustomSearch(true)
      const tempJobs = [];
      const jobsRef = collection(db, "jobs");
      let q = query(jobsRef);
      // Add where clauses only for the selected search criteria
      if (jobSearch.type) {
        q = query(q, where("type", "==", jobSearch.type));
      }
      if (jobSearch.location) {
        q = query(q, where("location", "==", jobSearch.location));
      }
      if (jobSearch.experience) {
        q = query(q, where("experience", "==", jobSearch.experience));
      }
      if (jobSearch.title) {
        q = query(q, where("title", "==", jobSearch.title));
      }
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate()
        });
      });
      setJobs(tempJobs);
      if (tempJobs.length === 0) {
        console.log("No jobs found. Sorry.");
        setNoJobsFoundMessage(true);
      } else {
        setJobs(tempJobs);
        setNoJobsFoundMessage(false);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }
  const fetchJobsByTitle = async (title) => {
    if (title) {
      const tempJobs = [];
      const jobsRef = collection(db, 'jobs');
      const q = query(jobsRef, where('title', '==', title));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id

        });
      });
      setJobs(tempJobs);
      if (tempJobs.length === 0) {
        console.log('No jobs found for the selected title. Sorry.');
        setNoJobsFoundMessage(true);
      } else {
        setNoJobsFoundMessage(false);
      }
    }
  };

  //fetching by logo
  const fetchJobsByLogo = async (logo) => {
    if (logo) {
      const tempJobs = [];
      const jobsRef = collection(db, 'jobs');
      const q = query(jobsRef, where('logo', '==', logo));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id

        });
      });
      setJobs(tempJobs);
      if (tempJobs.length === 0) {
        console.log('No jobs found for the selected title. Sorry.');
        setNoJobsFoundMessage(true);
      } else {
        setNoJobsFoundMessage(false);
      }
    }
  };

  useEffect(() => {
    fetchJobs()
  }, [])
  
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    // Ensure new page is within valid range
    if (newPage > 0 && newPage <= Math.ceil(jobs.length / jobsPerPage)) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div>
      <Header />
      <Searchbar fetchJobsCustom={fetchJobsCustom} />
      {loading && <p id="loader"></p>}
      {customSearch &&
        <button onClick={fetchJobs} className='flex  mb-2'>
          <p className='bg-blue-500 px-10 py-2 ml-10 text-center rounded-md text-white right-8'>Clear Filters</p>
        </button>}
      {noJobsFoundMessage && <p className='flex justify-center text-3xl h-20 text-white'>No jobs found. Sorry🥺.</p>}

      <div className="flex flex-col lg:flex-row  my-2 justify-center ">
        <div className="lg:w-3/4"> {/* Adjust the width based on your layout */}
          {currentJobs.map((job) => (
            <JobCards key={job.id} {...job} />
          ))}
          <div className="flex justify-center items-center mt-4">
        <button
          className="flex justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          &larr; Prev
        </button>
        <button
          className="flex justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next &rarr;
        </button>
      </div>
      </div>
        <div className="block justify-center lg:w-1/3 mx-4 "> {/* Adjust the width based on your layout */}
          <JobTittlebar fetchJobsByTitle={fetchJobsByTitle} />
          
          <ShortNews/>
        </div>
      </div>
      
      
      <JobNews fetchJobsByLogo={fetchJobsByLogo}/>
    </div>
  )
}

export default Home
