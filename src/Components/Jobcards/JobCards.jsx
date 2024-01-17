import React from 'react';
import dayjs from 'dayjs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { PiBagSimple } from 'react-icons/pi';
import { MdSchedule } from 'react-icons/md';

function JobCards(props) {
  const date1 = dayjs(Date.now());
  const difInDays = date1.diff(props.postedOn, 'days');

  return (
    <div className='mx-4 md:mx-20 lg:mx-20 mb-4'>
      <div className='flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-zinc-100 rounded-md border border-black shadow-lg hover:border-blue-400 hover:translate-y-1 hover:scale-100'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-base md:text-md lg:text-lg font-medium flex items-center'>
            {props.logo && <img src={props.logo} alt='Company Logo' className='w-8 h-8 rounded-full mr-2' />}
            <span className='md:text-lg lg:text-xl'>
              {props.title} - {props.company}
            </span>
          </h1>
          <p className='flex items-center gap-1 text-sm md:text-base lg:text-md'>
            <MdSchedule /> {props.type} &#x2022; <PiBagSimple /> {props.experience} &#x2022; <IoLocationOutline /> {props.location}
          </p>
          <p className='flex items-center text-sm md:text-base lg:text-md'>
            Salary - <MdOutlineCurrencyRupee />{props.salary}
          </p>
          <div className='flex items-center gap-2'>
          {Array.isArray(props.skills)
              ? props.skills.map((skill) => (
                  <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black font-200">{skill}</p>
                ))
              : <p className="text-gray-500 py-1 px-2 rounded-md border border-black font-200">{props.skills}</p>
            }
          </div>
        </div>
        <div className='flex items-center gap-4 mt-4 md:mt-0'>
          <p className='text-gray-500 text-sm md:text-base lg:text-md'>Posted {difInDays > 1 ? `${difInDays} days ago` : difInDays === 1 ? `${difInDays} day ago` : 'Today'}</p>
          <a href={props.job_link}><button className='text-blue-500 border border-blue-500 px-6 py-2 rounded-md text-sm md:text-base lg:text-md'>Apply</button></a>
        </div>
      </div>
    </div>
  );
}

export default JobCards;
