import React,{memo} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import { Routers } from '../../static/Router'
import { CiSearch } from "react-icons/ci";
import navbarlogo from "../../assets/images/images.jpg"

function Navbar() {
    let navbarproduct = Routers?.map(el=>(
                    <li key={el.id} className="navbar__wrapper__list__item"><NavLink className="navbar__link" to={el.path}>{el.title}</NavLink></li>
    ))
  return (
    <div className='navbar'>
        <div className="container">
             <div className="navbar__wrapper">
                <img className='navbar__wrapper__logo'  src={navbarlogo} alt="" />
                <div className="navbar__wrapper__search">
                    <input type="text" className="navbar__wrapper__search__input" />
                    <CiSearch  className='navbar__wrapper__search__svg'/>
                </div>
                <ul className="navbar__wrapper__list">
                    {navbarproduct}
                </ul>
             </div>
        </div>
    </div>
  )
}

export default  memo(Navbar)