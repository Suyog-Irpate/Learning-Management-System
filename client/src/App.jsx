import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import NotFound from './Pages/NotFound.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import CourseList from './Pages/Course/CourseList.jsx'
import Contact from './Pages/Contact.jsx'
import Denied from './Pages/Denied.jsx'
import CourseDescription from './Pages/Course/CourseDescription.jsx'
import RequireAuth from './Components/Auth/RequireAuth.jsx'
import CreateCourse from './Pages/Course/CreateCourse.jsx'
import Profile from './Pages/User/Profile.jsx'
import Editprofile from './Pages/User/EditProfile.jsx'
import Checkout from './Pages/Payment/Checkout.jsx'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess.jsx'
import CheckoutFailure from './Pages/Payment/CheckoutFailure.jsx'
import DisplayLectures from './Pages/Dashboard/DisplayLectures.jsx'
import AddLecture from './Pages/Dashboard/AddLecture.jsx'
import AdminDashboard from './Pages/Dashboard/AdminDashboard.jsx'

function App() {

  return (
  <>
    <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/courses" element={<CourseList />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/denied" element={<Denied />} ></Route>
        <Route path="/course/description" element={<CourseDescription />} ></Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
          <Route path="/course/create" element={<CreateCourse />}></Route>
          <Route path="/course/addlecture" element={<AddLecture />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/editprofile' element={<Editprofile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure/>} />
          <Route path='/course/displaylectures' element={<DisplayLectures/>} />
        </Route>


        <Route path="*" element={<NotFound />} ></Route>
    </Routes>
    
  </>
  )
}

export default App
