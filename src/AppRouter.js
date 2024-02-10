// AppRouter.js
import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import UserList from './UserList';
import AddQuestion from './AddQuestion';
import AddAccount from './AddAccount';
import AccountList from './AccountList';
import QuizScore from './QuizScore';
import Home from './Home';
import Layout from './Layout'; // Adjust the path as needed
import NavBar from './NavBar'; // Import the NavBar component
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Register';


const AppRouter = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <Router>
     <Layout>
        <ToastContainer />
        <NavBar loggedInUser={loggedInUser} /> {/* Include the NavBar component */}
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/home" element={<Home />} />
          <Route path="/"  element={<Login onLogin={handleLogin} />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/userlist" element={<UserList />} /> 
          <Route path="/addquestion" element={<AddQuestion />} />
          <Route path="/addaccount" element={<AddAccount />} />
          <Route path="/accountlist" element={<AccountList  />} />
          <Route path="/quizscore" element={<QuizScore />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
