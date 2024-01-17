import React from 'react';

function Header() {
  return (
    <div className='mt-10 flex flex-col gap-5 items-center justify-center sm:px-6 md:px-10 lg:px-20'>
      <h1 className='text-3xl font-semibold text-black text-center sm:text-xl md:text-2xl lg:text-3xl'>
        Find Your Dream Job Now!!.
      </h1>
      <p className='text-lg text-center'>
        Uncover the newest job vacancies that are an ideal fit for your skills and professional objectives!
      </p>
    </div>
  );
}

export default Header;
