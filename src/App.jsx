// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Layout from './components/Layout';
// import Background from '';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/Home" element={<Home />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About'
function App() {
  return (
    <Router>
  
      <Routes>
      
        <Route path="/" element={<Layout />} >
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


