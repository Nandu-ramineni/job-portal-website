import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import Selectcuate from './Selectcuate.png'
const JobNews = ({ fetchJobsByLogo }) => {
  const [logos, setLogos] = useState([]);

  // Fetch logos from the database
  const fetchLogos = async () => {
    try {
      const companiesRef = query(collection(db, "jobs"));
      const querySnapshot = await getDocs(companiesRef);
      const logosData = querySnapshot.docs.map((doc) => doc.data().logo);
      setLogos(logosData);
    } catch (error) {
      console.error("Error fetching logos:", error);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  // Slider settings for smooth scrolling
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const [selectedLogo, setSelectedLogo] = useState('');

  const handleTitleClick = (logo) => {
    if (selectedLogo === logo) {
      setSelectedLogo('');
      fetchJobsByLogo('');
    } else {
      setSelectedLogo(logo);
      fetchJobsByLogo(logo);
    }
  };

  return (
    <div className="bg-white h-auto flex justify-center items-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium my-4 text-center">Top Companies Hiring</h2>
        <Slider {...sliderSettings} className="mx-auto">
          {logos.map((logo, index) => (
            <div className={`${selectedLogo === logo}`} key={index}>
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="mx-auto my-8 max-h-20 w-full object-contain cursor-pointer"
                onClick={() => handleTitleClick(logo)}
              />
            </div>
          ))}
        </Slider>
        <div className="flex flex-col md:flex-row justify-center py-4 items-center">
        <div className="w-3/4 h-auto flex justify-center m-auto items-center">
            <img src={Selectcuate} alt="img" className="w-1/2 h-auto" />
          </div>
          <div className='h-40 overflow-hidden text-center md:mr-4'>
            <h3 className="text-xl font-medium my-2">Explore Exciting Job Opportunities</h3>
            <p className="text-gray-600">
              Discover a world of opportunities with top companies. Now hiring for various positions. Apply now and shape your future!
            </p>
            <a href="."><button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2">View Now</button></a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default JobNews;
