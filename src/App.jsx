import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllNewsComponent from './components/GetAllNewsComponent/GetAllNewsComponent';
import AddNewsComponent from './components/AddNewsComponent/AddNewsComponent';
import EditNewsComponent from './components/EditNewsComponent/EditNewsComponent';
import DeleteNewsComponent from './components/DeleteNewsComponent/DeleteNewsComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>NEWS App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add News</Link>
                <Link to="/admin/edit" >Edit News</Link>
                <Link to="/admin/delete" >Delete News</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllNewsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewsComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditNewsComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteNewsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
