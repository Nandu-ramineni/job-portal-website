import React from 'react'

function ShortNews() {
    const NewsData = [
        { company: 'Tata', news: 'Now hiring for multiple positions: Graphic Designer, AWS Devops, Functional Tester.' },
        { company: 'Capgemini', news: 'Exciting opportunities available' },
        { company: 'Google', news: 'Looking for talented software engineers.' },
        { company: 'Microsoft', news: 'Explore career options in cloud computing and AI.' },
        { company: 'Amazon', news: 'Join the world\'s largest e-commerce and cloud computing company.' },
        { company: 'Facebook', news: 'Discover opportunities in social media innovation.' },
        { company: 'Apple', news: 'Innovate with cutting-edge technology at Apple.' },
        { company: 'Netflix', news: 'Join the entertainment revolution at Netflix.' },
        { company: 'Tesla', news: 'Revolutionize the automotive industry with Tesla.' },
        { company: 'IBM', news: 'Drive digital transformation with IBM.' },
        // Add more news items as needed
      ];

    return (
        <div className="bg-white block justify-center gap-5 my-2 mx-5 rounded-md">
      <h2 className="text-2xl font-semibold pt-4 text-center">Flash News</h2>
      {NewsData.map((item, index) => (
          <div key={index} className=" px-5 py-1 my-2 ">
            <p className="font-medium">{item.company} 
            <img
              src="https://media.tenor.com/rpteyJaOOAYAAAAi/new.gif"
              alt="Flash"
              className="inline-block w-6 h-5 mx-2 animate-flash" // Add the animate-flash class for animation
              style={{
                animationName: 'flashAnimation',
                animationDuration: '1s',
                animationIterationCount: 'infinite',
              }}
            />
            </p>
            <p className="text-gray-600">{item.news}</p>
          </div>
        ))}
    </div>
    )
}

export default ShortNews
