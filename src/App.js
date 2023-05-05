import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Detail from './Pages/Detail';
import MovieList from './Components/MovieList';
import Search from './Pages/Search';
import Login from './Pages/Login'
import Register from './Pages/Register'
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Pages/ProtectedRoute'

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
      <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route
        path='/home' 
        element={<ProtectedRoute><Home/></ProtectedRoute>} 
      />
      <Route path='movie/:id' element={<Detail />}></Route>
      <Route path='movies/:type' element={<MovieList />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/search' element={<Search />}></Route>
      </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}


export default App;
