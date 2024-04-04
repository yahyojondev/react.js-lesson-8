import './App.css'
import { Routers } from './static/Router';
import { Routes,Route,NavLink } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/home/Home';
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
      </Routes>
    </div>
  );
}

export default App;
