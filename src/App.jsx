import { BrowserRouter, Routes, Outlet, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signup from './components/authoPages/SignUp';
import Login from './components/authoPages/Login';
import DashBoard from './components/DashBoard';
import Lay from './components/shared/Lay';
import Parent from './components/shared/Parent';
import Instructors from './components/shared/Instructors';
import Course from './components/shared/course/Course';
import Dcourse from './components/shared/course/Dcourse';
import LandingPage from './components/LandingPage';


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<LandingPage />} />
              <Route path='/' element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Courses" element={<Courses />} />
              <Route path="Contact" element={<Contact />} />
      
            </Route>
           
            <Route>
              <Route path="Login" element={<Login />} />
              <Route path="SignUp" element={<Signup />} />
              
              
            </Route>
            <Route path="/" element={<Lay />}>
            <Route path="dashboard" element={<DashBoard />} /> 
            <Route path="parent" element={<Parent />} /> 
            <Route path="course" element={<Course />} /> 
            <Route path="Dcourse" element={<Dcourse />} />
            <Route path="instructor" element={<Instructors />} /> 
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
