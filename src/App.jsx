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
import ResetPassword from './components/authoPages/ResetPassword';
import LevelOne from './components/LevelOne';
import Play from './components/Parentdash/Play';
import Dash from './components/Parentdash/Dash';
import Books from './components/Parentdash/Books';
import Pinstructor from './components/Parentdash/Pinstructor';

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
              <Route path="/" element={<LandingPage />} />
              <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Courses" element={<Courses />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
            <Route element={<Layout />}>
              <Route path="LevelOne" element={<LevelOne />} />
            </Route>

            <Route>
              <Route path="Login" element={<Login />} />
              <Route path="SignUp" element={<Signup />} />
              <Route path="ResetPassword" element={<ResetPassword />} />
            </Route>
            <Route path="/" element={<Lay />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="parent" element={<Parent />} />
              <Route path="course" element={<Course />} />
              <Route path="Dcourse" element={<Dcourse />} />
              <Route path="instructor" element={<Instructors />} />
            </Route>
            <Route path="/" element={<Play />}>
              <Route path="dash" element={<Dash />} />
              <Route path="book" element={<Books />} />
              <Route path="pinstructor" element={<Pinstructor />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
