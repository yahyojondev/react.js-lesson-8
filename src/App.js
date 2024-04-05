import './App.css'
import { Routers } from './static/Router';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/home/Home';
import SingleRoute from './Pages/singleroute/SingleRoute';
import Login from './Pages/login/Login';
import Admin from './Pages/admin/Admin';
import Auth from './Pages/auth/Auth';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       {
        Routers?.map(el=>(
           <Route key={el.id} path={el.path} element={el.element}/>
        ))
       }
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/admin' element={<Admin/>}/>
       <Route path='/product/:id' element= {<SingleRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
