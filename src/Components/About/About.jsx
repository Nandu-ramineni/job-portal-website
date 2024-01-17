import React from 'react';
import Aboutbg from './Aboutbg.png'
import categoriesData from './categoriesData'
import testimonialsData from './TestimonialsData'
const About = () => {
  const bannerStyle = {
    backgroundImage: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("https://firebasestorage.googleapis.com/v0/b/portfolio-6467b.appspot.com/o/bg.jpg?alt=media&token=d4534a4b-04e0-4345-ba1e-e15890523c0a")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-blue-500 text-white py-16 mx-5 my-5 rounded-md flex justify-center m-auto" style={bannerStyle}>
        <div className="container mx-auto my-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to JobVista</h1>
          <p className="text-lg">Discover exciting job opportunities and build your career with us.</p>
          <p className="text-md">Join our community of professionals and unlock a world of possibilities.</p>
          <p className="text-md">Explore diverse career paths and find the perfect fit for your skills and passion.</p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto my-12 px-4 sm:px-8">
  <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
    <div className="mb-8 sm:mb-0 sm:mr-8 flex justify-center m-auto">
      <img src={Aboutbg} alt="img" className="w-full sm:w-3/4 h-auto" />
    </div>
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-4 sm:mb-8">About Us</h2>
      <p className="text-gray-700 mb-4">
        At JobVista, we believe in connecting talents with opportunities to shape a brighter future. Our platform is designed to simplify the job search process, providing a seamless experience for both job seekers and employers.
      </p>
      <p className="text-gray-700 mb-4">
        Whether you are looking for your dream job or hiring the perfect candidate, JobVista is here to guide you through the process. We focus on creating a dynamic and inclusive job marketplace, where skills meet opportunities, and careers flourish.
      </p>
      <p className="text-gray-700 mb-4">
        Join us on this journey of career growth and exploration. Discover exciting opportunities, build meaningful connections, and take the next step in your professional life with JobVista.
      </p>
      <p className="text-gray-700 mb-4">
        Our commitment to excellence and innovation sets us apart. We continuously strive to enhance our platform, embracing the latest technologies to provide you with the best possible job search experience.
      </p>
      <p className="text-gray-700">
        Explore a world of possibilities with JobVista. Your success is our priority, and we are here to support you every step of the way.
      </p>
    </div>
  </div>
</div>


      {/* Explore Categories Section */}
      <div className="container  my-12 ">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
          {categoriesData.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-md dark:shadow-dark hover:shadow-xl dark:hover:shadow-dark flex flex-col items-center cursor-pointer">
              {React.createElement(category.icon, { className: 'text-4xl mb-4 text-[#FFA33C]' })}
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
        
        {/* Testimonials*/}
      <div className="container mx-auto my-12">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md dark:shadow-dark hover:shadow-xl dark:hover:shadow-dark flex flex-col items-center h-full">
                <img
                  src={testimonial.imageUrl}
                  alt={`User ${testimonial.id}`}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 h-[170px] ">{testimonial.text}</p> <br />
                <span className="font-semibold text-center">
                  {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
export default About;