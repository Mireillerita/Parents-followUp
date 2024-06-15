import { BrowserRouter, Routes, Outlet, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Level from './components/Level';
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
import Play from './components/Parentdash/Play';
import Dash from './components/Parentdash/Dash';
import Books from './components/Parentdash/Books';
import Pinstructor from './components/Parentdash/Pinstructor';
import ConfirmNewPass from './components/authoPages/ComfirmNewPass';
import OTP from './components/authoPages/OTP';
import EditCourse from './components/shared/course/EditCourse';
import Messages from './components/shared/Messages';
import AddB from './components/shared/course/AddB';
import UpdateB from './components/Parentdash/UpdateB';
import BookAd from './components/shared/BookAd';
import BookDetail from './components/shared/course/BookDetail';
import AddParent from './components/shared/course/AddParent';

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

              <Route path="level" element={<Level />} />

              <Route path="Contact" element={<Contact />} />
            </Route>
            
            <Route>
              <Route path="Login" element={<Login />} />
              <Route path="SignUp" element={<Signup />} />
              <Route path="OTP" element={<OTP />} />
              <Route path="ResetPassword" element={<ResetPassword />} />
              <Route path="ConfirmNewPass" element={<ConfirmNewPass />} />
            </Route>
            <Route path="/" element={<Lay />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="parent" element={<Parent />} />
              <Route path="AddParent" element={<AddParent />} />
              <Route path="Course" element={<Course />} />
              <Route path="BookAd" element={<BookAd />} />
              <Route path="Level" element={<Level />} />
              <Route path="AddB" element={<AddB />} />
              <Route path="BookDetail" element={<BookDetail />} />
              <Route path="EditCourse/:id" element={<EditCourse />} />
              <Route path="Dcourse" element={<Dcourse />} />
              <Route path="instructor" element={<Instructors />} />
              <Route path="instructor" element={<Instructors />} />
              <Route path="messages" element={<Messages />} />
            </Route>
            <Route path="/" element={<Play />}>
              <Route path="dash" element={<Dash />} />
              <Route path="book" element={<Books />} />

              <Route path="UpdateB" element={<UpdateB />} />
              <Route path="pinstructor" element={<Pinstructor />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
};
export default App;
