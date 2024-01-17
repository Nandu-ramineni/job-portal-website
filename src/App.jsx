import React, {  useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

import Footer from './Components/Footer/Footer'
import CreateJob from './Components/CreateJob/CreateJob'

//import Login from './Components/User/Login'
const App = () => {
 
  const [showCreateJobForm, setShowCreateJobForm] = useState(false);
  
  const handlePostJobClick = () => {
    setShowCreateJobForm(true);
  };

  const handleCloseForm = () => {
    setShowCreateJobForm(false);
  };
  
  return (
    <div>
      <Navbar onPostJobClick={handlePostJobClick} />
      
      
      {showCreateJobForm && (
        <CreateJob onCloseForm={handleCloseForm} />
      )}
      
      <Footer/>
      {/*<Login/>
      */}
    </div>
  )
}

export default App
