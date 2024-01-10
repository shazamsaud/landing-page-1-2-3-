import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'

import TeacherProfile from "./Components/teacher/TeacherProfile.js"
import TeacherSubjects from "./Components/teacher/TeacherSubjects.js"
import Header from "./Components/Header.js"

import StudentProfile from "./Components/student/StudentProfile.js"

import StudentSubjects from "./Components/student/StudentSubjects.js"

import SideBar from './Components/SideBar.js'


function App() {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (
    <div className='grid-container'>

<Header OpenSidebar={OpenSidebar}/>
<SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <BrowserRouter>
      <Routes>
          <Route  path='/StudentProfile' element={<StudentProfile/>}/>
      <Route  path='/StudentCourses' element={<StudentSubjects/>}/>

   

      <Route path='/TeacherProfile' element={<TeacherProfile/>}/>
      <Route path='/Teachercourses' element={<TeacherSubjects/>}/> 
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App


// import { useState } from 'react'
// import { BrowserRouter , Route , Routes } from 'react-router-dom'
// import './App.css'

// import TeacherProfile from "../src/Components/teacher/TeacherProfile.js"
// import TeacherSubjects from "../src/Components/teacher/TeacherSubjects.js"
// import StudentProfile from "../src/Components/student/StudentProfile.js"

// import StudentSubjects from "../src/Components/student/StudentSubjects.js"
// import Signup from './Components/Signup.js'
// import Login from "./Components/Login.js"
// import Dashboard from './Components/Dashboard.js'


// function App() {
  
 

//   return (
//     <>
    
   

     

     
// <BrowserRouter>
// <Routes>
//   <Route path='/' element={<StudentProfile/>}/>
//   <Route path='/Dashboard' element={<Dashboard/>}/>
//     <Route exact path='/StudentProfile' element={<StudentProfile/>}/>
// <Route exact path='/StudentCourses' element={<StudentSubjects/>}/>
// <Route path='/signup' element={<Signup/>}/>
// <Route path='/login' element={<Login/>}/>


// <Route path='/TeacherProfile' element={<TeacherProfile/>}/>
// <Route path='/Teachercourses' element={<TeacherSubjects/>}/> 
// </Routes>

// </BrowserRouter>


    
//     </>
//   )
// }

// export default App








